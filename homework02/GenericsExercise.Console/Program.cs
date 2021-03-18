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
                        System.Console.WriteLine("Write Id(string between 1-10 without %)" +
                            ", First and Last Name for student. Each on different lines.");

                        string id = System.Console.ReadLine();
                        string fn = System.Console.ReadLine();
                        string ln = System.Console.ReadLine();

                        Student s = new Student(id, fn, ln);

                        studentService.Insert(s);

                        break;
                    }
                case "2":
					{
                        System.Console.WriteLine("Write Id(string between 1-10 without %)" +
                            ", Name and Address for university. Each on different lines.");

                        string id = System.Console.ReadLine();
                        string name = System.Console.ReadLine();
                        string address = System.Console.ReadLine();

                        University uni = new University(id, name, address);

                        universityService.Insert(uni);
                        break;
                    }
                case "3":
                    {

                       
                        var students = studentService.GetAll();
                        
                        
						foreach (var el in students)
						{
                            System.Console.WriteLine(el.ToString()); 
						}
                       
                        break;
				    }
                case "4":
					{
                        var universities = universityService.GetAll();
                        

                        foreach (var el in universities)
                        {
                            System.Console.WriteLine(el.ToString());
                        }
                        break;
					}

			}

            System.Console.WriteLine("\nPress Enter\n");
            System.Console.ReadLine();

            return true;

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