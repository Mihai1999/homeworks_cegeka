using System;
using System.Collections.Generic;
using System.Text;

namespace homework01
{
	public static class Menus
	{
		public static bool MainMenu()
		{
			Console.WriteLine("\nChoose an option:\n");
			Console.WriteLine("1. Create new car\n");
			Console.WriteLine("2. Print manufactured cars\n");
			Console.WriteLine("3. Show the amount of cars manufactured\n");
			Console.WriteLine("0. Exit\n");

			switch (Console.ReadLine())
			{
				default : 
					return false;

				case "0": 
					return false;

				case "1":
					{
						CreateCar();
						break;
					}

				case "2":
					{
						PrintManufacturedCars();
						break;
					}

				case "3":
					{
						Console.WriteLine("The amount of cars is " + Car.Showroom.Count);
						break;
					}

			}

			Console.WriteLine("\nPress Enter\n");
			Console.ReadLine();
			return true;

		}

		public static void CreateCar()
		{
			Console.WriteLine("What is the model,  package, horse power and engine size of the car?\n" +
				" Write each specifications on a new line\n");

			string model = Console.ReadLine();
			string package = Console.ReadLine();
			int horsepower = Int32.Parse(Console.ReadLine());
			double enginesize = Double.Parse(Console.ReadLine());

			Console.WriteLine("Write the fuel type(D, B, E or GPL): ");

			string fuel = Console.ReadLine();

			Console.WriteLine("Automatic or Manual transmission?(true/false)");

			bool transmission = Boolean.Parse(Console.ReadLine());

			Car car = new Car(model, package, horsepower, enginesize, transmission, fuel);

		}

		public static void PrintManufacturedCars()
		{
			if (Car.Showroom.Count == 0)
			{
				Console.WriteLine("There are no cars.\n");
				return;
			}

			foreach (Car c in Car.Showroom)
			{
				Console.WriteLine(c.ToString());
			}

			return;
			
		}
	}
}
