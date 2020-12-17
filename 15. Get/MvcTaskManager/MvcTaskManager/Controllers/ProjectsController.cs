using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Models;

namespace MvcTaskManager.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("api/projects")]
        public List<Project> Get()
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            List<Project> projects = db.Projects.ToList();
            return projects;
        }
    }
}


