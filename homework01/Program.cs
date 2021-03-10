using System;

namespace homework01
{
	class Program
	{
		static void Main(string[] args)
		{
			/*
			Console.WriteLine(Car.Showroom.Count);
			Car c = new Car("mercedes", "entry", 150, 2.1, true, true);
			Console.WriteLine("Showroom: " + Car.Showroom[0].ToString());
			Console.WriteLine(c.ToString());*/

			bool showMenu = true;

			while (showMenu)
			{
				showMenu = Menus.MainMenu();
			}



		}
	}
}
