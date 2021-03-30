using CarDealership2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Repository
{
	public interface IRepository<TEntity> where TEntity : IEntity
	{
		TEntity GetById(Guid id);

		IEnumerable<TEntity> GetByAll();

		void Insert(TEntity entity);

		void Update(TEntity entity);

		void Delete(TEntity entity);

		public bool SaveChanges();

	}
}
