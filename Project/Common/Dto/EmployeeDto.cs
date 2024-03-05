using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class EmployeeDto
    {
        //[Key]
        public int Id { get; set; }
        //public long Tz { get; set; }// צריך תז או נשתמש בid?
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Status { get; set; }

        public int ManagerId { get; set; }
        //---------------------------------------
        public int Experience { get; set; } // 1-5
        
        public ICollection<LanguageForEmployeeDto>? LanguageForEmployee { get; set; }    
       // public ICollection<VacationDto> Vacations{ get; set; }
        // public ICollection<TaskDto> Tasks { get; set; }


        //public Calendar calendar { get; set; }

    }
}
