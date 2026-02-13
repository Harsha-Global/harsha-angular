using MvcTaskManager.Identity;
using MvcTaskManager.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.ServiceContracts
{
    public interface IUsersService
    {
        Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel);
        Task<ApplicationUser> Register(SignUpViewModel signUpViewModel);
        Task<ApplicationUser> GetUserByEmail(string Email);
    }
}
