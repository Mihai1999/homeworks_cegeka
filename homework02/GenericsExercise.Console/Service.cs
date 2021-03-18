using System;
using System.Collections.Generic;
using System.Text;

namespace GenericsExercise.Console
{
	public class Service<T> where T : IEntity
	{
		public Persistence Db { get; set; }

		public Service()
		{
			Db = new Persistence();
		}

		public void Insert(T el)
		{
			try
			{

				Db.InsertAsync<T>(el).Wait();

			}
			catch(Exception e)
			{
				System.Console.WriteLine(e);
			}
		}

		public IEnumerable<T> GetAll()
		{
			IEnumerable<T> res = new List<T>();

			try
			{
				res = Db.GetAllAsync<T>().Result;

				if(res == null)
				{
					throw new Exception();
				}
				
			}
			catch(Exception e)
			{
				System.Console.WriteLine(e);
			}


			return res;
		}
	}
}
