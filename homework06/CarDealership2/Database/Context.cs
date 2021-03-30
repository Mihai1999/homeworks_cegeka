using CarDealership2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Database
{
	public class Context : DbContext
	{
		public DbSet<Customer> Customers { get; set; }
		public DbSet<Car> Cars { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder options)
		{
			options.UseSqlServer(@"Data Source=(LocalDb)\MSSQLLocalDb;Initial Catalog=Dealership");
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<Customer>(entity =>
			{
				entity.HasMany(x => x.Cars)
					.WithOne(y => y.Customer)
					.HasForeignKey(y => y.CustomerId);

				entity.HasKey(x => x.Id);

			});
				

			builder.Entity<Car>()
				.HasKey(x => x.Id);
			
				
				
		}


	}
}
