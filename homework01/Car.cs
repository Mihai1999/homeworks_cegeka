using System;
using System.Collections.Generic;
using System.Text;

namespace homework01
{
	class Car
	{
		public static List<Car> Showroom = new List<Car>();
		public string model { get; set; }
		public string package { get; set; }
		public int horsePower { get; set; }
		public double engineSize { get; set; }
		public bool isManual { get; set; }
		public string  fuel { get; set; }

		public Car(string m, string p, int hp, double size, bool isM, string f)
		{
			model = m;
			package = p;
			horsePower = hp;
			engineSize = size;
			isManual = isM;
			fuel = f;
			Showroom.Add(this);
			
		}

		override
		public string ToString()
		{
			string output = model + " " + package + " package "  + horsePower +  " CP " + 
				engineSize + " " + fuel;

			output += " cutie ";

			if (isManual) output += "manuala";
			else output += "automata";

			return output;
		}

		public static int GetAmountOfCars()
		{
			return Showroom.Count;
		}


	}
}
