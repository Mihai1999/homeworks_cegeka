using Dealership.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dealership.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CarsController : Controller
	{
		private static List<Customer> Customers = new List<Customer>
		{
			new Customer("Mihai"),
			new Customer("Andrei"),
			new Customer("Ionut"),
			new Customer("Adrian"),
		};
		private static List<Car> Cars = new List<Car> {
			new Car
			{
				Manufacteur = "Volskwagen",
				Model = "Golf",
				Year = new DateTime(2005, 1, 1),
				Transmission = Transmission.MANUAL,
				CylindricCapacity = 2.0,
			},

			new Car
			{
				Manufacteur = "Dacia",
				Model = "Logan",
				Year = new DateTime(2002, 1, 1),
				Transmission = Transmission.MANUAL,
				CylindricCapacity = 1.8,
			}
		};
		 

		[HttpGet]
		public ActionResult<List<Car>> GetCars()
		{
			if (Cars == null)
			{
				return NotFound("Nu exista nicio masina in lista");
			}

			var links = Hypermedia.MainMedia(Cars);

			return Ok(new {Cars = Cars, Links = links });
		}

		[HttpGet("{id}")]
		public ActionResult<Car> GetById(int id)
		{
			var car = Cars.FirstOrDefault(x => x.Id == id);

			if (car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			var links = Hypermedia.CarMedia(car);

			return Ok(new { Cars = car, Links = links });

		}

		[HttpPost]
		public ActionResult InsertCar([FromBody] Car model)
		{
			if (model == null)
			{
				return BadRequest();
			}

			Cars.Add(model);

			var links = Hypermedia.CarMedia(model);

			return Ok(new { Cars = model, Links = links });

		}

		[HttpPatch("{id}")]
		public ActionResult PatchCar(int id, [FromBody] Car model)
		{
			var car = Cars.FirstOrDefault(x => x.Id == id);

			if (car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			if (model.Manufacteur != null) car.Manufacteur = model.Manufacteur;
			if (model.Model != null) car.Model = model.Model;
			if (model.Year != null) car.Year = model.Year;
			if (model.CylindricCapacity != 0) car.CylindricCapacity = model.CylindricCapacity;

			var links = Hypermedia.CarMedia(car);

			return Ok(new { Cars = car, Links = links });
		}

		[HttpPut("{id}")]
		public ActionResult UpdateCar(int id, [FromBody] Car model)
		{

			if (model == null)
			{
				return BadRequest();
			}

			var car = Cars.FirstOrDefault(x => x.Id == id);

			if (car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			car = model;

			var links = Hypermedia.CarMedia(car);

			return Ok(new { Cars = car, Links = links });

		}

		[HttpDelete]
		public ActionResult DeleteCar(int id)
		{
			var car = Cars.FirstOrDefault(x => x.Id == id);

			if (car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			Cars.Remove(car);

			var links = Hypermedia.CarMedia(car);

			return Ok(new { Cars = car, Links = links });

		}

		[HttpPost("buy/{id}")]
		public ActionResult BuyCar(int id,[FromBody] Customer c)
		{

			string name = c.Name;
			var car = Cars.FirstOrDefault(x => x.Id == id);

			if(car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			var customer = Customers.Where(x => x.Name == name).FirstOrDefault();

			if (customer == null)
			{
				customer = new Customer(name);
				Customers.Add(customer);
			}

			customer.OwnedCars.Add(car);

			var links = Hypermedia.CarMedia(car);

			return Ok(new { Customer = customer, Links = links });

		}

		[HttpGet("customers/page={page}&items={pageItems}")]
		public ActionResult GetCustomers(int page, int pageItems)
		{
			List<Customer> sortedList = new List<Customer>();
			foreach(Customer c in Customers)
			{
				
				var cars = c.OwnedCars.OrderBy(x => x.Manufacteur)
					.Skip(pageItems * page)
					.Take(pageItems)
					.ToList();

				sortedList.Add(new Customer
				{
					Name = c.Name,
					OwnedCars = cars,
				}) ;

			}

			//var customers = sortedList.Skip(SKIP * page).Take(SKIP).ToList();
			var customers = sortedList;

			var links = Hypermedia.MainMedia(Cars);

			return Ok(new { Customers = customers, Links = links });
		}


	}
}
