using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repository.Entities;
using Repository.Interface;
using SecurityLesson.Models;
using Service.Interface;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SecurityLesson.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _config;
        private IRepository<Employee> _employeeRepository;
        public LoginController(IConfiguration config, IRepository<Employee> repository)
        {
            this._config = config;
            this._employeeRepository = repository;
        }

        // GET: api/<LoginController>
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoginController>/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public IActionResult Post([Microsoft.AspNetCore.Mvc.FromBody] UserLogin loginModel)
        {
            var user = Authenticate(loginModel);
            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }
            return null;
        }

        private string Generate(Employee user)
        {
            var securitykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
            new Claim(ClaimTypes.Name,user.FirstName),
            new Claim(ClaimTypes.Role,user.Status.ToString()),
            new Claim(ClaimTypes.NameIdentifier,user.Id.ToString())
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Employee Authenticate(UserLogin loginModel)
        {
            var CurrentUser = _employeeRepository.GetAll().FirstOrDefault(x => x.Email == loginModel.Email
            && x.Password== loginModel.Password);
            if (CurrentUser != null)
                return CurrentUser;
            return null;
        }

        // PUT api/<LoginController>/5
        [Microsoft.AspNetCore.Mvc.HttpPut("{id}")]
        public void Put(int id, [Microsoft.AspNetCore.Mvc.FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    internal interface IContext<T>
    {
    }
}
