using Common.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.Servises;
using System.Web.Http;
using System.Web.Http.Filters;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IService<TaskDto> _taskService;

        public TaskController(IService<TaskDto> taskService)
        {
            _taskService = taskService;
        }
        // GET: api/<TaskController>
       [Microsoft.AspNetCore.Mvc.HttpGet]
        public List<TaskDto> Get()
        {
            return _taskService.GetAll();
        }

        // GET api/<TaskController>/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public TaskDto Get(int id)
        {
            return _taskService.GetById(id);
        }

        // POST api/<TaskController>
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public TaskDto Post([Microsoft.AspNetCore.Mvc.FromBody] TaskDto value)
        {
            return _taskService.Add(value);
        }

        // PUT api/<TaskController>/5
        [Microsoft.AspNetCore.Mvc.HttpPut("{id}")]
        public TaskDto Put(int id, [Microsoft.AspNetCore.Mvc.FromBody] TaskDto value)
        {

            return _taskService.Update(id, value);
        }

        // DELETE api/<TaskController>/5
        [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
        public void Delete(int id)
        {

            _taskService.Delete(id);
        }
    }
}
