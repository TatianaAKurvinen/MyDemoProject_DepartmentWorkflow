using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyDemoProject.Models;

namespace MyDemoProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public List<EmployeeData> GetAll()
        {
            MyDemoProjectContext context = new MyDemoProjectContext ();
            List<EmployeeData> employee = context.EmployeeData.ToList();
            return employee;
        }
    }


}