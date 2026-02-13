using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.Models;

namespace MvcTaskManager.Identity
{
    public partial class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ClientLocation> ClientLocations { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ApplicationRole> ApplicationRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ClientLocation>().HasData(
                new ClientLocation() { ClientLocationID = 1, ClientLocationName = "Boston" },
                new ClientLocation() { ClientLocationID = 2, ClientLocationName = "New Delhi" },
                new ClientLocation() { ClientLocationID = 3, ClientLocationName = "New Jersy" },
                new ClientLocation() { ClientLocationID = 4, ClientLocationName = "New York" },
                new ClientLocation() { ClientLocationID = 5, ClientLocationName = "London" },
                new ClientLocation() { ClientLocationID = 6, ClientLocationName = "Tokyo" }
            );

            modelBuilder.Entity<Project>().HasData(
                new Project() { ProjectID = 1, ProjectName = "Hospital Management System", DateOfStart = Convert.ToDateTime("2017-8-1"), Active = true, ClientLocationID = 2, Status = "In Force", TeamSize = 14 },
                new Project() { ProjectID = 2, ProjectName = "Reporting Tool", DateOfStart = Convert.ToDateTime("2018-3-16"), Active = true, ClientLocationID = 1, Status = "Support", TeamSize = 81 }
            );
        }
    }
}


