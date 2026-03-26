using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace MvcTaskManager.Identity
{
    public class ApplicationRoleManager : RoleManager<ApplicationRole>
    {
        public ApplicationRoleManager(ApplicationRoleStore applicationRoleStore, IEnumerable<IRoleValidator<ApplicationRole>> roleValidators, ILookupNormalizer lookupNormalizer, IdentityErrorDescriber identityErrorDescriber, ILogger<ApplicationRoleManager> logger) : base(applicationRoleStore, roleValidators, lookupNormalizer, identityErrorDescriber, logger)
        {

        }
    }
}


