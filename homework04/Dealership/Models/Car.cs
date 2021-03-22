using Dealership.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dealership.Models
{
	public enum Transmission {
		MANUAL,
		AUTOMATIC,
		ELECTRIC,
	}

	public class Car
	{
		public static int NumberOfCars = 0;
		public int Id { get; set; }
		public string Manufacteur { get; set; }
		public string Model { get; set; }
		public DateTime Year { get; set; }
		public Transmission Transmission { get; set; }
		public double CylindricCapacity { get; set; }
		List<Link> Links { get; set; }

		public Car(string ma, string mo, DateTime y, Transmission t, double cc) :this()
		{
			Manufacteur = ma;
			Model = mo;
			Year = y;
			Transmission = t;
			CylindricCapacity = cc;
			
		}

		public Car(Car c) : this(c.Manufacteur, c.Model, c.Year, c.Transmission, c.CylindricCapacity) { }

		public Car()
		{
			SetId();

		}

		public void SetId()
		{
			Interlocked.Increment(ref NumberOfCars);
			Id = NumberOfCars;
		}

	}
}
