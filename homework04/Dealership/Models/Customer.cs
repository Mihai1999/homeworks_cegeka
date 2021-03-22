using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dealership.Models
{
	public class Customer
	{
		public static int Count = 0;
		public int Id { get; set; }
		public string Name { get; set; }
		public List<Car> OwnedCars { get; set; }

		public Customer(string name)
		{
			Name = name;
			OwnedCars = new List<Car>();
			Interlocked.Increment(ref Count);

			Id = Count;
		}

		public Customer()
		{

		}

	}
}
