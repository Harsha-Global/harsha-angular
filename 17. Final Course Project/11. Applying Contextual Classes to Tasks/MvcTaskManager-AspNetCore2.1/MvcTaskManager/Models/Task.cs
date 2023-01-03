using MvcTaskManager.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManager.Models
{
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskID { get; set; } //Primary Key for Tasks table
        public string TaskName { get; set; } //Name / title of the task
        public string Description { get; set; } //Description of the task
        public DateTime CreatedOn { get; set; } //Date and time of task creation
        public int ProjectID { get; set; } //FK, refers to "Projects" table
        public string CreatedBy { get; set; } //FK, refers to "AspNetUsers" table, indicating who created the task
        public string AssignedTo { get; set; } //FK, refers to "AspNetUsers" table, indicating to whom the task is assigned
        public int TaskPriorityID { get; set; } //FK, refers to "TaskPriorities" table
        public DateTime LastUpdatedOn { get; set; } //Date and time of task last updation
        public string CurrentStatus { get; set; } //Current status name of the task
        public int CurrentTaskStatusID { get; set; } //Indicating ID of current task status

        [NotMapped]
        public string CreatedOnString { get; set; }
        [NotMapped]
        public string LastUpdatedOnString { get; set; }

        [ForeignKey("ProjectID")]
        public virtual Project Project { get; set; }

        [ForeignKey("CreatedBy")]
        public virtual ApplicationUser CreatedByUser { get; set; }

        [ForeignKey("AssignedTo")]
        public virtual ApplicationUser AssignedToUser { get; set; }

        [ForeignKey("TaskPriorityID")]
        public virtual TaskPriority TaskPriority { get; set; }

        public virtual ICollection<TaskStatusDetail> TaskStatusDetails { get; set; }
    }

    public class GroupedTask
    {
        public string TaskStatusName { get; set; }
        public List<Task> Tasks { get; set; }
    }
}


