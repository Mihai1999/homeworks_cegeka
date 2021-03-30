using CarDealership2.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDealership2.Repository
{
	public class MongoDbRepository<TEntity> : IRepository<TEntity>
		where TEntity : class, IEntity
	{

		private readonly IMongoDatabase database;
		private IMongoCollection<TEntity> collection => database.GetCollection<TEntity>(typeof(TEntity).Name);

		public MongoDbRepository()
		{
			var dbClient = new MongoClient("mongodb+srv://mihai99:mongopass123@cluster0.2ybyc.mongodb.net/Dealership?retryWrites=true&w=majority");
			database = dbClient.GetDatabase(typeof(TEntity).Name);
		}
		public void Delete(TEntity entity)
		{
			collection.DeleteOne(e => e.Id == entity.Id);
		}

		public IEnumerable<TEntity> GetByAll()
		{
			return collection.Find(e => true).ToEnumerable();
		}

		public TEntity GetById(Guid id)
		{
			return collection.Find(e => e.Id == id).SingleOrDefault();
		}

		public void Insert(TEntity entity)
		{
			collection.InsertOne(entity);
		}

		public bool SaveChanges()
		{
			throw new NotImplementedException();
		}

		public void Update(TEntity entity)
		{
			collection.ReplaceOne(e => e.Id == entity.Id,entity);
		}
	}
}
