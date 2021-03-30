using CarDealership2.Models;
using CarDealership2.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CarsController : Controller
	{
		private readonly IRepository<Car> _carRepository;
		private readonly IRepository<Customer> _customerRepository;
		public CarsController()
		{
			_carRepository = new EFRepository<Car>();
			_customerRepository = new EFRepository<Customer>();
		}

		[HttpGet]
		public ActionResult<List<Car>> GetAll()
		{
			var cars = _carRepository.GetByAll();

			return Ok(cars);
		}

		[HttpGet("{id}")]
		public ActionResult<Car> GetById(Guid id)
		{
			var car = _carRepository.GetById(id);

			if (car == null) return NotFound("Masina nu a fost gasita");

			return Ok(car);
		}

		[HttpPost]
		public ActionResult InsertCar([FromBody] Car model)
		{
			if (model == null)
			{
				return BadRequest();
			}

			_carRepository.Insert(model);

			return Ok(model);

		}

		[HttpDelete("{id}")]
		public ActionResult DeleteCar(Guid id)
		{
			_carRepository.Delete(_carRepository.GetById(id));

			return Ok();
		}

		[HttpPatch("{id}")]
		public ActionResult<Car> PatchCar(Guid id, [FromBody] Car model)
		{
			var car = _carRepository.GetById(id);

			if (car == null)
			{
				return NotFound("Masina nu a fost gasita");
			}

			if (model.Manufacteur != null) car.Manufacteur = model.Manufacteur;
			if (model.Model != null) car.Model = model.Model;
			if (model.Year != null) car.Year = model.Year;
			if (model.CylindricCapacity != 0) car.CylindricCapacity = model.CylindricCapacity;


			return Ok(car);
			
		}
		
		[HttpPost("buycar/car={carId}&customer={customerId}")]
		public ActionResult BuyCar(Guid carId, Guid customerId)
		{
			var car = _carRepository.GetById(carId);
			var customer = _customerRepository.GetById(customerId);

			if(car == null || customer == null)
			{
				return NotFound();
			}

			car.CustomerId = customer.Id;
			_carRepository.SaveChanges();

			return Ok(car);

		}
		

	}
}
