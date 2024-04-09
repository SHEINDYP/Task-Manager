using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using static System.Reflection.Metadata.BlobBuilder;

namespace HungaryProject
{
    public class HungarianAlgoritem
    {

        //FilterToHungarain filterToHungarain;
        bool[] e;
        public HungarianAlgoritem(bool[] bools)
        {
            int s = bools.Length;
            e = new bool[s];
            e = bools;
        }
        public double[,] mat;
        int[] taskForEmployee;//assigntask to employee
        int[] unAsigmentRow;//marking the rows without insertion
        int[] unAsigmentCol;// marking columns that have zeros in marked rows
        int[] asigmentRow;//marking rows with inset in marked columns
        bool[,] yellowMat;//moving lines on the marked columns and unmarked rows
        double min = 0;//the minimum in the entire matrix
        int m = 0;//לא לדרוס!
        int k = 0;//לא לדרוס!!
        int size;
        int count;
        double[,] temp;

        public int[] RunHungarianAlgorithm(double[,] matrix)
        {

            size = matrix.GetLength(0);
            mat = new double[size, size];
            taskForEmployee = new int[size];
            //multiply the matrix by minus one to make the largest value the smallest value
            //and so the algorithm will work correctly
            for (int i = 0; i < size; i++)
                for (int j = 0; j < size; j++)
                    mat[i, j] = matrix[i, j] * -1;

            //return mat;
            return ReduceMinRow();
        }

        public int[] ReduceMinRow()
        {
            //decreasing the minimum element in each row
            for (int i = 0; i < size; i++)
            {
                double min = double.MaxValue;
  
                for (int j = 0; j < size; j++)
                {
                    min = Math.Min(min, mat[i, j]);
                }

                for (int j = 0; j < size; j++)
                {
                    mat[i, j] -= min;
                }
                // sent single-valued assignment test function
            }
            IsOptimalPlacement();
            if (count != size)//are all tasks nested
                          
                return ReduceMinCol();

            return taskForEmployee;
        }

        public int[] ReduceMinCol()
        {
            temp = new double[size, size];
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                    temp[i, j] = mat[i, j];
            }
            //decreasing the minimum element in each column
            for (int i = 0; i < size; i++)
            {
                double min = double.MaxValue;

                for (int j = 0; j < size; j++)
                {
                    min = Math.Min(min, mat[i, j]);
                }

                for (int j = 0; j < size; j++)
                {
                    mat[i, j] -= min;
                }
                // sent single-valued assignment test function
            }
            IsOptimalPlacement();
            if (count != size)
                return UnAsigmentRow();

            return taskForEmployee;

        }

        //marking the rows without insertion
        public int[] UnAsigmentRow()
        {
            unAsigmentRow = new int[taskForEmployee.Length];//array for keeping the ranks - the workers without assignment
            for (int i = 0; i < taskForEmployee.Length; i++)
            {
                if (taskForEmployee[i] == -1)
                    unAsigmentRow[m++] = i;//m - the number of rows without insertion
            }
            return UnAsigmentCol();
        }
        //marking columns that have zeros in marked rows
        public int[] UnAsigmentCol()
        {   
            unAsigmentCol = new int[size*size];//array that holds the columns whose rows are marked 0
            for (int i = 0; i < m; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    if (mat[unAsigmentRow[i], j] == 0)
                        unAsigmentCol[k++] = j;// marking columns that have zeros in marked rows
                }
            }
            return AsigmentCol();
        }
        //marking rows with inset in marked columns
        public int[] AsigmentCol()
        {
            asigmentRow = new int[size*size];
            int f = 0;
            for (int i = 0; i < k; i++)
            {
                for (int j = 0; j < size; j++)
                {
               //  checking whether the row in the column marked = 0 - has an inset.
               //and isn't this row already marked in the array of rows without placement
                    if (mat[j, unAsigmentCol[i]] == 0 && !unAsigmentRow.Contains(j))
                        asigmentRow[f++] = j;// marking rows with inset in marked columns
                }
            }
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                    if (temp[i, j] != mat[i, j])
                        ReduceMinCol();
            }
            return UnasigmentRowAndCol();
        }

        //moving lines on the marked columns and unmarked rows
        public int[] UnasigmentRowAndCol()
        {
            yellowMat = new bool[size, size];
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    if (!unAsigmentRow.Contains(i) && !asigmentRow.Contains(i) && !unAsigmentCol.Contains(j))
                        yellowMat[i, j] = true;
                }
            }
            return FindMinMat();
        }

        //finding the minimal element in the entire matrix
        public int[] FindMinMat()
        {
            min = double.MaxValue;
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    if (!yellowMat[i, j] && mat[i, j] < min)
                        min = mat[i, j];
                }
            }
            return End();
        }

        public int[] End()
        {
            for (int i = 0; i <size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    if (!unAsigmentRow.Contains(i) && !asigmentRow.Contains(i) && unAsigmentCol.Contains(j))
                        mat[i, j] += min;
                    else if (!yellowMat[i, j])
                        mat[i, j] -= min;
                }
            }
            return IsOptimalPlacement();
        }

        // a single-valued nesting test function
        public int[] IsOptimalPlacement()
        {
            bool[] flag = new bool[size];
            taskForEmployee = new int[size];
            Array.Fill(taskForEmployee, -1);
            count = 0;
            for (int i = 0; i < size; i++)//employee
            {
                for (int j = 0; j < size; j++)//task
                {
                    if (mat[i, j] == 0)
                        if (!flag[j] && e[i])// If it exists in the array of employees received in the constructor that is assigned to the employee, this is a task.
                                              //and if the task has not yet been assigned
                        {
                            flag[j] = true;//assigned task
                            taskForEmployee[i] = j;//each employee in the array is assigned a task
                            count++;//the amount of tasks applied to check later whether there is an assignment for all the tasks
                            break;
                        }
                }
            }
            return taskForEmployee;


        }


    }
}
