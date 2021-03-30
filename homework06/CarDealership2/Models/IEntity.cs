using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Models
{
	public interface IEntity
	{
		Guid Id { get; set; }
	}
}
