using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Repository.Entities;
using Repository.Repositories;
using SecurityLesson.Controllers;
using SecurityLesson.Models;
using Service.Interface;
using Service.Servises;
using System.Security.Claims;
using System.Web.Http;

namespace Project.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IService<EmployeeDto> _employeeService;
        public EmployeeController(IService<EmployeeDto> employeeService)
        {
            _employeeService = employeeService;
             }


        private Employee GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var UserClaim = identity.Claims;
                return new Employee()
                {
                    FirstName = UserClaim.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value,
                    Email = UserClaim.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value,
                };

            }
            return null;
        }

        // GET: api/<UserController>
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public List<EmployeeDto> Get()
        {
            return _employeeService.GetAll();
        }

        // GET api/<UserController>/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public EmployeeDto Get(int id)
        {
            return _employeeService.GetById(id);
        }

        // POST api/<UserController>
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public EmployeeDto Post([Microsoft.AspNetCore.Mvc.FromBody] EmployeeDto value)
        {
            return _employeeService.Add(value);
        }

        // PUT api/<UserController>/5
        [Microsoft.AspNetCore.Mvc.HttpPut("{id}")]
        public EmployeeDto Put(int id, [Microsoft.AspNetCore.Mvc.FromBody] EmployeeDto value)
        {
            return _employeeService.Update(id, value);
        }

        // DELETE api/<UserController>/5
        [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
        public void Delete(int id)
        {
            _employeeService.Delete(id);
        }

        [Microsoft.AspNetCore.Mvc.HttpPost("login")]
        public EmployeeDto LogIn([Microsoft.AspNetCore.Mvc.FromBody] EmployeeDto value)
        {
            var user = _employeeService.GetAll().FirstOrDefault(x => x.Email == value.Email && x.Password == value.Password);
            return user;
        }


    }
    
}
