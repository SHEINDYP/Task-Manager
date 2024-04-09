using Common.Dto;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Repository.Entities;
using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HungaryProject
{


    public class FilterToHungarain
    {
        private readonly IContext _context;
        public FilterToHungarain(IContext db)
        {
            this._context = db;
        }
        public FilterToHungarain() { }


        public bool[] matTask;
        public bool[] matEmployee;
        public int[] FilterMat()
        {
            var employees = _context.Employees.Include(e => e.LanguageForEmployees).Include(e => e.Vacations).ToList();
            List<Repository.Entities.Task> tasks = _context.Tasks.ToList();
            var countEmp = employees.Count;
            var countTask = tasks.Count;


            double[,] mat;
            if (countEmp == countTask)
            {
                mat = new double[countTask, countEmp];

            }
            else
            {
                if (countEmp > countTask)
                {
                    mat = new double[countEmp, countEmp];
                }
                else
                    mat = new double[countTask, countTask];
            }

            int i, j, size = Math.Max(countTask, countEmp);
            matTask = new bool[size];
            matEmployee = new bool[size];

            for (i = 0; i < size; i++)
                for (j = 0; j < size; j++)
                    mat[i, j] = double.MinValue;

            i = -1;
            j = -1;
            bool flag = false;
            foreach (var item in employees)
            {
                if (item.Status == 0)
                    continue;
                i++;
                tasks = _context.Tasks.ToList();
                foreach (var itemT in tasks)
                {
                    j++;
                    if (itemT.EmployeeId == 0)
                    {
                        foreach (var itemV in item.Vacations)
                        {
                            if (itemT.DeadLine >= itemV.FromDate && itemT.DeadLine <= itemV.ToDate.AddDays(6))
                            {
                                mat[i, j] = double.MinValue;
                                flag = true;
                                break;
                            }


                        }
                        if (!flag)
                        {
                            foreach (var itemL in item.LanguageForEmployees)
                            {

                                if (itemT.LanguageId == itemL.LanguageId)
                                {
                                    mat[i, j] = ((itemL.Level * 0.2 + item.Experience * 0.4) / itemT.Level) * 10;
                                    matTask[j] = true;
                                    matEmployee[i] = true;
                                    break;

                                }

                            }

                        }
                        flag = false;
                    }
                }
                j = -1;
            }
            foreach (var item in matTask)
            {
                Console.WriteLine(item);
            }

            HungarianAlgoritem hungarianAlgoritem = new HungarianAlgoritem(matEmployee);
            int[] newMat = hungarianAlgoritem.RunHungarianAlgorithm(mat);

            return newMat;
        }

    }
}