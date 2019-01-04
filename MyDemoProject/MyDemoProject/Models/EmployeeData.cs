using System;
using System.Collections.Generic;

namespace MyDemoProject.Models
{
    public partial class EmployeeData
    {
        public EmployeeData()
        {
            TaskData = new HashSet<TaskData>();
        }

        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string Password { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public ICollection<TaskData> TaskData { get; set; }
    }
}
