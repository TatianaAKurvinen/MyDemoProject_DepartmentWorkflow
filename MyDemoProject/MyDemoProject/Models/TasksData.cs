using System;
using System.Collections.Generic;

namespace MyDemoProject.Models
{
    public partial class TasksData
    {
        public string EmployeeName { get; set; }
        public string TaskTitle { get; set; }
        public string Description { get; set; }
        public DateTime? Dl { get; set; }
        public string TitleId { get; set; }
        public bool? Status { get; set; }

        public TasksData TaskTitleNavigation { get; set; }
        public TasksData InverseTaskTitleNavigation { get; set; }
    }
}
