using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.ServiceContracts;
using MvcTaskManager.ViewModels;

namespace MvcTaskManager.Controllers
{
    [ApiController]
    public class AccountController : Controller
    {
        private IUsersService _usersService;

        public AccountController(IUsersService usersService)
        {
            this._usersService = usersService;
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]LoginViewModel loginViewModel)
        {
            var user = await _usersService.Authenticate(loginViewModel);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            return Ok(user);
        }
    }
}


