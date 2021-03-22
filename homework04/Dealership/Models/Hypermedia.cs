using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dealership.Models
{
	public static class Hypermedia
	{
		public static readonly string baseUrl = "https://localhost:44368/cars";
		public static List<Link> CarMedia(Car c)
		{
			var links = new List<Link>
			{
				new Link
				{
					Href = baseUrl,
					Verb = "GET",
					Rel = "Get the list of cars",
				},

				new Link
				{
					Href = baseUrl + "/buy/" + c.Id,
					Verb = "POST",
					Rel = "Buy the car for a customer. Specify customer name in body(name:example)",
				},

				new Link
				{
					Href = baseUrl + "/" + c.Id,
					Verb = "PUT",
					Rel = "Update a car. Write in body the new values.",
				},

				new Link
				{
					Href = baseUrl + "/"+ c.Id,
					Verb = "PATCH",
					Rel = "Partially update a car. Write in body the fields you want to update.",
				},

				new Link
				{
					Href = baseUrl + "/"+ c.Id,
					Verb = "PATCH",
					Rel = "Partially update a car. Write in body the fields you want to update.",
				},

				new Link
				{
					Href = baseUrl + "/"+ c.Id,
					Verb = "DELETE",
					Rel = "Delete a car.",
				},

			};


			return links;
		}

		public static List<Link> MainMedia(List<Car> cars)
		{
			var links = new List<Link>();
			foreach(Car c in cars)
			{
				links.Add(new Link
				{
					Href = baseUrl + "/" + c.Id,
					Verb = "GET",
					Rel = "View info about the car with id = " + c.Id,
				});
			}

			links.Add(new Link
			{
				Href = baseUrl + "/customers/page={page}&items={pageItems}",
				Verb = "GET",
				Rel = "Get customers and their owned cars paginated. Replace {page} and {pageItems} with the values desired."
			});

			return links;
		}
		
	}
}
