// See https://aka.ms/new-console-template for more information

using Common.Dto;
using DataContext;
using HungaryProject;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client.Extensibility;
using Repository.Entities;

Console.WriteLine("Hello, World!");
Db myDb = new Db();
FilterToHungarain fh = new FilterToHungarain(myDb);
Repository.Interface.IContext _context;
_context = myDb;


using (var dbContext = new Db())
{
    List<Repository.Entities.Task> tasks = dbContext.Tasks.ToList();
    List<Employee> employees = dbContext.Employees.ToList();

    int[] res = fh.FilterMat();//returns an array of the size of all employees whose values ​​in the array are the task number
    //assigning the employee to the task in the database
    for (int i = 0; i < res.Length; i++)
    {
        if (res[i] != -1)
        {
            Repository.Entities.Task currentTask = tasks[res[i]];//accepts the assignment in the array
            Employee currentEmployee = employees[i];
            currentEmployee.Vacations = new List<Vacation>();
            if (currentTask.EmployeeId == 0)
            {
                currentTask.EmployeeId = currentEmployee.Id;
                currentEmployee.Vacations.Add(new Vacation { FromDate = DateTime.Now, ToDate = currentTask.DeadLine });
                dbContext.SaveChanges();
            }
        }
    }
}

Console.WriteLine();