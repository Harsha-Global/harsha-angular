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

        [HttpGet]
        [Route("api/clientlocations/searchbyclientlocationid/{ClientLocationID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByClientLocationID(int ClientLocationID)
        {
            ClientLocation clientLocation = db.ClientLocations.Where(temp => temp.ClientLocationID == ClientLocationID).FirstOrDefault();
            if (clientLocation != null)
            {
                return Ok(clientLocation);
            }
            else
                return NoContent();
        }

        [HttpPost]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ClientLocation Post([FromBody] ClientLocation clientLocation)
        {
            db.ClientLocations.Add(clientLocation);
            db.SaveChanges();

            ClientLocation existingClientLocation = db.ClientLocations.Where(temp => temp.ClientLocationID == clientLocation.ClientLocationID).FirstOrDefault();
            return clientLocation;
        }

        [HttpPut]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ClientLocation Put([FromBody] ClientLocation project)
        {
            ClientLocation existingClientLocation = db.ClientLocations.Where(temp => temp.ClientLocationID == project.ClientLocationID).FirstOrDefault();
            if (existingClientLocation != null)
            {
                existingClientLocation.ClientLocationName = project.ClientLocationName;
                db.SaveChanges();
                return existingClientLocation;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int ClientLocationID)
        {
            ClientLocation existingClientLocation = db.ClientLocations.Where(temp => temp.ClientLocationID == ClientLocationID).FirstOrDefault();
            if (existingClientLocation != null)
            {
                db.ClientLocations.Remove(existingClientLocation);
                db.SaveChanges();
                return ClientLocationID;
            }
            else
            {
                return -1;
            }
        }
    }
}


