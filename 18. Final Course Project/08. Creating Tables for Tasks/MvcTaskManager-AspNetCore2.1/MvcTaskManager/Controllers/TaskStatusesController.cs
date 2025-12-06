using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;

namespace MvcTaskManager.Controllers
{
    public class TaskStatusesController : Controller
    {
        private ApplicationDbContext db;

        public TaskStatusesController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("api/taskstatuses")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public List<TaskStatus> Get()
        {
            List<TaskStatus> taskStatuses = db.TaskStatuses.ToList();
            return taskStatuses;
        }

        [HttpGet]
        [Route("api/taskstatuses/searchbytaskstatusid/{TaskStatusID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByTaskStatusID(int TaskStatusID)
        {
            TaskStatus taskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == TaskStatusID).FirstOrDefault();
            if (taskStatus != null)
            {
                return Ok(taskStatus);
            }
            else
                return NoContent();
        }

        [HttpPost]
        [Route("api/taskstatuses")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskStatus Post([FromBody] TaskStatus taskStatus)
        {
            db.TaskStatuses.Add(taskStatus);
            db.SaveChanges();

            TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatus.TaskStatusID).FirstOrDefault();
            return taskStatus;
        }

        [HttpPut]
        [Route("api/taskstatuses")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskStatus Put([FromBody] TaskStatus project)
        {
            TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == project.TaskStatusID).FirstOrDefault();
            if (existingTaskStatus != null)
            {
                existingTaskStatus.TaskStatusName = project.TaskStatusName;
                db.SaveChanges();
                return existingTaskStatus;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/taskstatuses")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int TaskStatusID)
        {
            TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == TaskStatusID).FirstOrDefault();
            if (existingTaskStatus != null)
            {
                db.TaskStatuses.Remove(existingTaskStatus);
                db.SaveChanges();
                return TaskStatusID;
            }
            else
            {
                return -1;
            }
        }
    }
}


