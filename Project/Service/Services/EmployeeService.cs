using AutoMapper;
using Common.Dto;
using Repository.Entities;
using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Servises
{
    public class EmployeeService : IService<EmployeeDto>
    {

        private readonly IRepository<Employee> repository;
        private readonly IMapper mapper;

        public EmployeeService(IRepository<Employee> repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public EmployeeDto Add(EmployeeDto item)
        {
            return mapper.Map<EmployeeDto>(repository.Add(mapper.Map<Employee>(item)));
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public List<EmployeeDto> GetAll()
        {
            return mapper.Map<List<EmployeeDto>>(repository.GetAll());
        }

        public EmployeeDto GetById(int id)
        {
            return mapper.Map<EmployeeDto>(repository.Get(id));
        }

        public EmployeeDto Update(int id, EmployeeDto entity)
        {
           return mapper.Map<EmployeeDto>( repository.Update(id,mapper.Map<Employee>(entity)));
        }

       
    }
}
