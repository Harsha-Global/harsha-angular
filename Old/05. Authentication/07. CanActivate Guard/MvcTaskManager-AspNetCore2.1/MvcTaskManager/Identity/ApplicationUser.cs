using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManager.Identity
{
    public class ApplicationUser : IdentityUser
    {
        [NotMapped]
        public string Token { get; set; }
    }
}

