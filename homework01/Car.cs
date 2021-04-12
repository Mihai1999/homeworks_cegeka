using System;
using System.Collections.Generic;
using System.Text;

namespace homework01
{
	class Car
	{
		public static List<Car> Showroom = new List<Car>();
		public string Model { get; set; }
		public string Package { get; set; }
		public int HorsePower { get; set; }
		public double EngineSize { get; set; }
		public bool IsManual { get; set; }
		public string  Fuel { get; set; }

		public Car(string model, string package, int horsepower,
			double size, bool isManual, string fuel)
		{
			Model = model;
			Package = package;
			HorsePower = horsepower;
			EngineSize = size;
			IsManual = isManual;
			Fuel = fuel;
			Showroom.Add(this);
			
		}

		override
		public string ToString()
		{
			string output = Model + " " + Package + " package "  + HorsePower +  " CP " + 
				EngineSize + " " + Fuel;

			output += " cutie ";

			if (IsManual) output += "manuala";
			else output += "automata";

			return output;
		}

		public static int GetAmountOfCars()
		{
			return Showroom.Count;
		}


	}
}
