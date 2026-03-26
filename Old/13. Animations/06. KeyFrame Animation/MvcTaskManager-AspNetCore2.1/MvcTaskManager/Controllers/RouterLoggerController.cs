using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace MvcTaskManager.Controllers
{
    public class RouterLoggerController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public RouterLoggerController(IHostingEnvironment hostingEnvironment)
        {
            this._hostingEnvironment = hostingEnvironment;
        }

        [HttpPost]
        [Route("api/routerlogger")]
        public IActionResult Index()
        {
            string logMessage = null;
            using (StreamReader streamReader = new StreamReader(Request.Body, Encoding.ASCII))
            {
                logMessage = streamReader.ReadToEnd() + "\n";
            }
            string filePath = this._hostingEnvironment.ContentRootPath + "\\RouterLogger.txt";
            System.IO.File.AppendAllText(filePath, logMessage);
            return Ok();
        }
    }
}

