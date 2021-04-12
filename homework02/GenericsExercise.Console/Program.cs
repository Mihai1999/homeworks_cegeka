using System;
using System.Collections.Generic;

namespace GenericsExercise.Console
{
    public class Program
    {
        public static Service<Student> studentService = new Service<Student>();
        public static Service<University> universityService = new Service<University>();
        public static bool MainMenu()
		{
            System.Console.WriteLine("\nChoose an option\n");
            System.Console.WriteLine("1. Insert Student\n");
            System.Console.WriteLine("2. Insert University\n");
            System.Console.WriteLine("3. Show Students\n");
            System.Console.WriteLine("4. Show Universities\n");
            System.Console.WriteLine("0. Exit");

            switch (System.Console.ReadLine())
            {
                default: return false;
                case "0": return false;
                case "1":
					{
                        InsertStudent();
                        break;
                    }
                case "2":
					{
                        InsertUniversity();
                        break;
                    }
                case "3":
                    {
                        PrintStudents();
                        break;
				    }
                case "4":
					{
                        PrintUniversities();
                        break;
					}

			}

            System.Console.WriteLine("\nPress Enter\n");
            System.Console.ReadLine();

            return true;

        }

        static void PrintUniversities()
		{
            var universities = universityService.GetAll();


            foreach (var university in universities)
            {
                System.Console.WriteLine(university.ToString());
            }
        }

        static void PrintStudents()
		{
            var students = studentService.GetAll();


            foreach (var el in students)
            {
                System.Console.WriteLine(el.ToString());
            }
        }
        static void InsertUniversity()
		{
            System.Console.WriteLine("Write Id(string between 1-10 without %)" +
                            ", Name and Address for university. Each on different lines.");

            string id = System.Console.ReadLine();
            string name = System.Console.ReadLine();
            string address = System.Console.ReadLine();

            University uni = new University(id, name, address);

            universityService.Insert(uni);
        }

        static void InsertStudent()
		{

            System.Console.WriteLine("Write Id(string between 1-10 without %)" +
                ", First and Last Name for student. Each on different lines.");

            string id = System.Console.ReadLine();
            string firstname = System.Console.ReadLine();
            string lastname = System.Console.ReadLine();

            Student s = new Student(id, firstname, lastname);

            studentService.Insert(s);
        } 
        static void Main(string[] args)
        {

            System.Console.WriteLine("Hello");
            
            bool showMenu = true;

			while (showMenu)
			{

                showMenu = MainMenu();
			}

        }
    }
}