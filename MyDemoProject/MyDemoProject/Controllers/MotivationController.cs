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
    public class MotivationController : ControllerBase
    {
        public List<MotivationPhrase> GetAll()
        {
            MyDemoProjectContext context = new MyDemoProjectContext();
            List<MotivationPhrase> phrase = context.MotivationPhrase.ToList();
            return phrase;
        }
    }
}