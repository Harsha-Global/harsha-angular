using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;

namespace MvcTaskManager.Controllers
{
    public class CountriesController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CountriesController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [Route("api/countries")]
        public IActionResult GetCountries()
        {
            List<Country> countries = this._db.Countries.OrderBy(temp => temp.CountryName).ToList();
            return Ok(countries);
        }
    }
}


