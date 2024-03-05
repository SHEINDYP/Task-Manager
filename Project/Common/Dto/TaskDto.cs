using Repository.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class TaskDto
    {
        //[Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }//מצב המשימה :1-תהלך...
        public int Level { get; set; }//רמת המשימה התאמה לרמת- שנות נסיון של העובד
        //[ForeignKey("User")]
        public int EmployeeId { get; set; }
        //[ForeignKey("Language")]
        public int LanguageId { get; set; }
       //public virtual Employee Employee { get; set; }
        //public virtual Language language { get; set; }
        public DateTime DeadLine { get; set; }

        //public TaskDto() { }

        //public TaskDto(int id, string title, string description, bool isCompleted, int level, Language language, DateTime deadLine)
        //{
        //    Id = id;
        //    Title = title;
        //    Description = description;
        //    IsCompleted = isCompleted;
        //    Level = level;
        //    this.language = language;
        //    DeadLine = deadLine;
        //}
    }
}
