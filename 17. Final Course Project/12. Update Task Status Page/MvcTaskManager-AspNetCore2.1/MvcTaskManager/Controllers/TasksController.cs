using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;

namespace MvcTaskManager.Controllers
{
    public class TasksController : Controller
    {
        private readonly ApplicationDbContext db;
        private readonly ApplicationUserManager applicationUserManager;

        public TasksController(ApplicationDbContext db, ApplicationUserManager applicationUserManager)
        {
            this.db = db;
            this.applicationUserManager = applicationUserManager;
        }

        [HttpGet]
        [Route("/api/tasks")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Get()
        {
            string currentUserId = User.Identity.Name;
            List<GroupedTask> grouppedTasks = new List<GroupedTask>();
            List<TaskStatus> taskStatuses = db.TaskStatuses.ToList();
            List<Task> tasks = db.Tasks
                .Include(temp => temp.CreatedByUser)
                .Include(temp => temp.AssignedToUser)
                .Include(temp => temp.Project).ThenInclude(temp => temp.ClientLocation)
                .Include(temp => temp.TaskStatusDetails)
                .Include(temp => temp.TaskPriority)
                .Where(temp => temp.CreatedBy == currentUserId || temp.AssignedTo == currentUserId)
                .OrderBy(temp => temp.TaskPriorityID)
                .ThenByDescending(temp => temp.LastUpdatedOn).ToList();

            foreach (var item in tasks)
            {
                item.CreatedOnString = item.CreatedOn.ToString("dd/MM/yyyy");
                item.LastUpdatedOnString = item.LastUpdatedOn.ToString("dd/MM/yyyy");
                item.TaskStatusDetails = item.TaskStatusDetails.OrderByDescending(temp => temp.TaskStatusDetailID).ToList();

                foreach (var item2 in item.TaskStatusDetails)
                {
                    item2.StatusUpdationDateTimeString = item2.StatusUpdationDateTime.ToString("dd/MM/yyyy");
                }
            }

            foreach (var item in taskStatuses)
            {
                GroupedTask groupedTask = new GroupedTask();
                groupedTask.TaskStatusName = item.TaskStatusName;
                groupedTask.Tasks = tasks.Where(temp => temp.CurrentStatus == item.TaskStatusName).ToList();

                if (groupedTask.Tasks.Count > 0)
                {
                    grouppedTasks.Add(groupedTask);
                }
            }

            return Ok(grouppedTasks);
        }


        [HttpGet]
        [Route("/api/tasks/searchbytaskid/{TaskID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByTaskID(int TaskID)
        {
            //Get task from database
            Task task = db.Tasks
                .Include(temp => temp.CreatedByUser)
                .Include(temp => temp.AssignedToUser)
                .Include(temp => temp.Project).ThenInclude(temp => temp.ClientLocation)
                .Include(temp => temp.TaskStatusDetails)
                .Include(temp => temp.TaskPriority)
                .Where(temp => temp.TaskID == TaskID)
                .FirstOrDefault();

            if (task != null)
            {
                //Date conversion
                task.CreatedOnString = task.CreatedOn.ToString("dd/MM/yyyy");
                task.LastUpdatedOnString = task.LastUpdatedOn.ToString("dd/MM/yyyy");

                foreach (var item2 in task.TaskStatusDetails)
                {
                    item2.StatusUpdationDateTimeString = item2.StatusUpdationDateTime.ToString("dd/MM/yyyy");
                }

                return Ok(task);
            }
            else
                return NoContent();
        }


        [HttpPut]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("/api/updatetaskstatus")]
        public IActionResult UpdateTaskStatus([FromBody] TaskStatusDetail taskStatusDetail)
        {
            //Insert task status detail
            taskStatusDetail.UserID = User.Identity.Name;
            taskStatusDetail.StatusUpdationDateTime = DateTime.Now;
            taskStatusDetail.StatusUpdationDateTimeString = taskStatusDetail.StatusUpdationDateTime.ToString("dd/MM/yyyy");
            taskStatusDetail.TaskStatus = null;
            taskStatusDetail.User = null;
            db.TaskStatusDetails.Add(taskStatusDetail);
            db.SaveChanges();

            //Update existing task
            Task existingTask = db.Tasks.Where(temp => temp.TaskID == taskStatusDetail.TaskID).FirstOrDefault();
            existingTask.LastUpdatedOn = DateTime.Now;
            existingTask.CurrentStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatusDetail.TaskStatusID).FirstOrDefault().TaskStatusName;
            existingTask.CurrentTaskStatusID = taskStatusDetail.TaskStatusID;
            db.SaveChanges();

            return Ok(taskStatusDetail);
        }



        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("/api/createtask")]
        public IActionResult Post([FromBody] Task task)
        {
            task.Project = null;
            task.CreatedByUser = null;
            task.AssignedToUser = null;
            task.TaskPriority = null;
            task.TaskStatusDetails = null;
            task.CreatedOn = DateTime.Now;
            task.LastUpdatedOn = DateTime.Now;
            task.CurrentStatus = "Holding";
            task.CurrentTaskStatusID = 1;
            task.CreatedOnString = task.CreatedOn.ToString("dd/MM/yyyy");
            task.LastUpdatedOnString = task.LastUpdatedOn.ToString("dd/MM/yyyy");
            task.CreatedBy = User.Identity.Name;

            db.Tasks.Add(task);
            db.SaveChanges();

            TaskStatusDetail taskStatusDetail = new TaskStatusDetail();
            taskStatusDetail.TaskID = task.TaskID;
            taskStatusDetail.UserID = task.CreatedBy;
            taskStatusDetail.TaskStatusID = 1;
            taskStatusDetail.StatusUpdationDateTime = DateTime.Now;
            taskStatusDetail.TaskStatus = null;
            taskStatusDetail.User = null;
            taskStatusDetail.Description = "Task Created";
            db.TaskStatusDetails.Add(taskStatusDetail);
            db.SaveChanges();

            Task existingTask = db.Tasks.Where(temp => temp.TaskID == task.TaskID).FirstOrDefault();
            return Ok(existingTask);
        }
    }
}


