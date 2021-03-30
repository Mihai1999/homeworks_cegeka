using CarDealership2.Database;
using CarDealership2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Repository
{
	public class EFRepository<TEntity> : IRepository<TEntity>
		where TEntity : class, IEntity
	{
		private readonly Context _database;
		private readonly DbSet<TEntity> _table;

		public EFRepository()
		{
			_database = new Context();
			_database.Database.EnsureCreated();
			_database.Database.Migrate();

			_table = _database.Set<TEntity>();
		}

		public void Delete(TEntity entity)
		{
			_database.Remove(entity);

			SaveChanges();
		}

		public IEnumerable<TEntity> GetByAll()
		{
			return _table.AsEnumerable();
		}

		public TEntity GetById(Guid id)
		{
			return _table.Find(id);
		}

		public void Insert(TEntity entity)
		{
			_database.Add(entity);

			SaveChanges();
		}

		public void Update(TEntity entity)
		{
			_database.Update(entity);

			SaveChanges();
		}

		public bool SaveChanges()
		{
			return _database.SaveChanges() > 0;
		}
	}
}
