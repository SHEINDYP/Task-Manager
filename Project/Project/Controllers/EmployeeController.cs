﻿using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.Servises;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IService<EmployeeDto> _employeeService;

        public EmployeeController(IService<EmployeeDto> employeeService)
        {
            _employeeService = employeeService;
        }

        // GET: api/<UserController>
        [HttpGet]
        public List<EmployeeDto> Get()
        {
            return _employeeService.GetAll();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public EmployeeDto Get(int id)
        {
            return _employeeService.GetById(id);
        }

        // POST api/<UserController>
        [HttpPost]
        public EmployeeDto Post([FromBody] EmployeeDto value)
        {
            return _employeeService.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public EmployeeDto Put(int id, [FromBody] EmployeeDto value)
        {
            return _employeeService.Update(id, value);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _employeeService.Delete(id);
        }
    }
}
