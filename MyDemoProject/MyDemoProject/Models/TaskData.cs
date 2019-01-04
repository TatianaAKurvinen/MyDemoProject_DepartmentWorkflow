using System;
using System.Collections.Generic;

namespace MyDemoProject.Models
{
    public partial class TaskData
    {
        public string TaskTitle { get; set; }
        public string EmployeeName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime? Dl { get; set; }
        public string Status { get; set; }

        public EmployeeData EmployeeNameNavigation { get; set; }
    }
}
