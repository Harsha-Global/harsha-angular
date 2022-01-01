using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;

namespace MvcTaskManager.Controllers
{
    public class ClientLocationsController : Controller
    {
        private ApplicationDbContext db;

        public ClientLocationsController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Get()
        {
            List<ClientLocation> clientLocations = db.ClientLocations.ToList();
            return Ok(clientLocations);
        }
    }
}


