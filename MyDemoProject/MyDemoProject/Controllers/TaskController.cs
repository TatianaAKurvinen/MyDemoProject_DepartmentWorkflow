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
    public class TaskController : ControllerBase
    {

        public List<TaskData> GetAll()
        {
            MyDemoProjectContext context = new MyDemoProjectContext();
            List<TaskData> tasks = context.TaskData.ToList();
            return tasks;
        }

        [HttpPost]
        public string PostCreateNew([FromBody] TaskData task)
        {
            MyDemoProjectContext context = new MyDemoProjectContext();
            context.TaskData.Add(task);
            context.SaveChanges();

            return task.EmployeeName;
        }

        [HttpPut]
        [Route("{key}")]
        public string PutEdit(string key, [FromBody] TaskData newData)
        {
            MyDemoProjectContext context = new MyDemoProjectContext();
            TaskData opentask = context.TaskData.Find(key);

            if (opentask != null)
            {

                //opentask.TaskTitle = newData.TaskTitle;
                opentask.EmployeeName = newData.EmployeeName;
                opentask.Status = newData.Status;
                

                context.SaveChanges();
                return "OK";
            }

            return "Not Found";

        }


        [HttpDelete]
        [Route("{key}")]
        public string DeleteSingle(string key)
        {
            MyDemoProjectContext context = new MyDemoProjectContext();
            TaskData task = context.TaskData.Find(key);

            if (task != null)
            {

                context.TaskData.Remove(task);
                context.SaveChanges();
                return "Task has been deleted";

            }

            return "Task was not found and not deleted";
        }

    }
}