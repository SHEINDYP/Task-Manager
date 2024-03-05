using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Vacation
    {
        public int Id { get; set; }
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; } 
        public virtual Employee Employee { get; set; }  
        public DateTime FromDate { get; set; }
        public  DateTime ToDate { get; set;}
    }
}
