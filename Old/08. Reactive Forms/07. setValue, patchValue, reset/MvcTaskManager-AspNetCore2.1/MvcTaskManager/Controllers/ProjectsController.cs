using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using MvcTaskManager.ViewModels;

namespace MvcTaskManager.Controllers
{
    public class ProjectsController : Controller
    {
        private ApplicationDbContext db;

        public ProjectsController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Get()
        {
            System.Threading.Thread.Sleep(1000);
            List<Project> projects = db.Projects.Include("ClientLocation").ToList();

            List<ProjectViewModel> projectsViewModel = new List<ProjectViewModel>();
            foreach (var project in projects)
            {
                projectsViewModel.Add(new ProjectViewModel() { ProjectID = project.ProjectID, ProjectName = project.ProjectName, TeamSize = project.TeamSize, DateOfStart = project.DateOfStart.ToString("dd/MM/yyyy"), Active = project.Active, ClientLocation = project.ClientLocation, ClientLocationID = project.ClientLocationID, Status = project.Status });
            }
            return Ok(projectsViewModel);
        }

        [HttpGet]
        [Route("api/projects/search/{searchby}/{searchtext}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Search(string searchBy, string searchText)
        {
            List<Project> projects = null;
            if (searchBy == "ProjectID")
                projects = db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID.ToString().Contains(searchText)).ToList();
            else if (searchBy == "ProjectName")
                projects = db.Projects.Include("ClientLocation").Where(temp => temp.ProjectName.Contains(searchText)).ToList();
            if (searchBy == "DateOfStart")
                projects = db.Projects.Include("ClientLocation").Where(temp => temp.DateOfStart.ToString().Contains(searchText)).ToList();
            if (searchBy == "TeamSize")
                projects = db.Projects.Include("ClientLocation").Where(temp => temp.TeamSize.ToString().Contains(searchText)).ToList();

            List<ProjectViewModel> projectsViewModel = new List<ProjectViewModel>();
            foreach (var project in projects)
            {
                projectsViewModel.Add(new ProjectViewModel() { ProjectID = project.ProjectID, ProjectName = project.ProjectName, TeamSize = project.TeamSize, DateOfStart = project.DateOfStart.ToString("dd/MM/yyyy"), Active = project.Active, ClientLocation = project.ClientLocation, ClientLocationID = project.ClientLocationID, Status = project.Status });
            }

            return Ok(projectsViewModel);
        }

        [HttpGet]
        [Route("api/projects/searchbyprojectid/{ProjectID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetProjectByProject(int ProjectID)
        {
            Project project = db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == ProjectID).FirstOrDefault();

            ProjectViewModel projectViewModel = new ProjectViewModel() { ProjectID = project.ProjectID, ProjectName = project.ProjectName, TeamSize = project.TeamSize, DateOfStart = project.DateOfStart.ToString("dd/MM/yyyy"), Active = project.Active, ClientLocation = project.ClientLocation, ClientLocationID = project.ClientLocationID, Status = project.Status };
            return Ok(projectViewModel);
        }

        [HttpPost]
        [Route("api/projects")]
        [Authorize]
        [ValidateAntiForgeryToken]
        public IActionResult Post([FromBody] Project project)
        {
            project.ClientLocation = null;
            db.Projects.Add(project);
            db.SaveChanges();

            Project existingProject = db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();
            ProjectViewModel projectViewModel = new ProjectViewModel() { ProjectID = existingProject.ProjectID, ProjectName = existingProject.ProjectName, TeamSize = existingProject.TeamSize, DateOfStart = existingProject.DateOfStart.ToString("dd/MM/yyyy"), Active = existingProject.Active, ClientLocation = existingProject.ClientLocation, ClientLocationID = existingProject.ClientLocationID, Status = existingProject.Status };

            return Ok(projectViewModel);
        }

        [HttpPut]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Put([FromBody] Project project)
        {
            Project existingProject = db.Projects.Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();
            if (existingProject != null)
            {
                existingProject.ProjectName = project.ProjectName;
                existingProject.DateOfStart = project.DateOfStart;
                existingProject.TeamSize = project.TeamSize;
                existingProject.Active = project.Active;
                existingProject.ClientLocationID = project.ClientLocationID;
                existingProject.Status = project.Status;
                existingProject.ClientLocation = null;
                db.SaveChanges();

                Project existingProject2 = db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();
                ProjectViewModel projectViewModel = new ProjectViewModel() { ProjectID = existingProject2.ProjectID, ProjectName = existingProject2.ProjectName, TeamSize = existingProject2.TeamSize, ClientLocationID = existingProject2.ClientLocationID, DateOfStart = existingProject2.DateOfStart.ToString("dd/MM/yyyy"), Active = existingProject2.Active, Status = existingProject2.Status, ClientLocation = existingProject2.ClientLocation };
                return Ok(projectViewModel);
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int ProjectID)
        {
            Project existingProject = db.Projects.Where(temp => temp.ProjectID == ProjectID).FirstOrDefault();
            if (existingProject != null)
            {
                db.Projects.Remove(existingProject);
                db.SaveChanges();
                return ProjectID;
            }
            else
            {
                return -1;
            }
        }
    }
}


