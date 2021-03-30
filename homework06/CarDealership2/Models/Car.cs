using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Models
{
	public enum Transmission
	{
		MANUAL,
		AUTOMATIC,
		ELECTRIC,
	}
	public class Car : IEntity
	{
		public Guid Id { get; set; }
		public string Manufacteur { get; set; }
		public string Model { get; set; }
		public DateTime Year { get; set; }
		public Transmission Transmission { get; set; }
		public double CylindricCapacity { get; set; }
		public Guid? CustomerId { get; set; }
		public virtual Customer Customer { get; set; }

	}
}
