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
	public class CustomersController : Controller
	{
		private readonly IRepository<Customer> _customerRepository;
		public CustomersController()
		{
			//_customerRepository = new EFRepository<Customer>();
			_customerRepository = new MongoDbRepository<Customer>();
		}

		[HttpGet]
		public ActionResult<List<Customer>> GetAll()
		{
			var customers = _customerRepository.GetByAll();

			return Ok(customers);
		}

		[HttpGet("{id}")]
		public ActionResult<Customer> GetById(Guid id)
		{
			var customer = _customerRepository.GetById(id);

			if (customer == null) return NotFound("Clientul nu a fost gasita");

			return Ok(customer);
		}

		[HttpPost]
		public ActionResult InsertCustomer([FromBody] Customer model)
		{
			if (model == null)
			{
				return BadRequest();
			}

			_customerRepository.Insert(model);

			return Ok(model);

		}

		[HttpDelete("{id}")]
		public ActionResult DeleteCar(Guid id)
		{
			_customerRepository.Delete(_customerRepository.GetById(id));

			return Ok();
		}

		[HttpPatch("{id}")]
		public ActionResult<Car> PatchCar(Guid id, [FromBody] Customer model)
		{
			var customer = _customerRepository.GetById(id);

			if (customer == null)
			{
				return NotFound("Clientul nu a fost gasita");
			}

			if (model.FirstName != null) customer.FirstName = model.FirstName;
			if (model.LastName != null) customer.LastName = model.LastName;
			if (model.PhoneNumber != null) customer.PhoneNumber = model.PhoneNumber;

			return Ok(customer);

		}
	}
}
