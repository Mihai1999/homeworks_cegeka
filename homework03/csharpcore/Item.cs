using System;
using System.Collections.Generic;

namespace csharpcore
{
    public class Item
    {
        public string Name { get; set; }
        public int SellIn { get; set; }
        public int Quality { get; set; }

    }
	public class StandardItem : Item
	{
		public StandardItem(Item i)
		{
			this.Name = i.Name;
			this.SellIn = i.SellIn;
			this.Quality = i.Quality;
		}

		public StandardItem()
		{

		}

		public void UpdateState()
		{
			if (Quality < 50 && Quality > 0)
			{
				UpdateQuality();
			}
			

			UpdateSellIn();

		}

		public virtual void UpdateQuality()
		{

			

			if (SellIn > 0)
			{
				Quality--;

			}
			else
			{
				Quality -= 2;

			}
		}

		public virtual void UpdateSellIn()
		{
			SellIn--;
		}

	}

	public class Sulfuras : StandardItem
	{
		public Sulfuras()
		{
			Quality = 80;
			SellIn = int.MaxValue;
		}

		public override void  UpdateSellIn()
		{

		}

		public override void UpdateQuality()
		{

		}
	}

	public class AgedBrie : StandardItem
	{
		public AgedBrie(Item i): base(i) { }
		public override void UpdateQuality()
		{
			Quality = Quality < 50 ? Quality + 1 : Quality;

		}

	}

	public class BackstagePasses : StandardItem
	{
		public BackstagePasses(Item i) : base(i) { }
		public override void UpdateQuality()
		{
			if (SellIn <= 5) Quality += 3;
			if (SellIn <= 10) Quality += 2;
			else Quality += 1;

		}
	}

	public class Conjured : StandardItem
	{
		public Conjured(Item i) : base(i) { }
		public override void UpdateQuality()
		{
			Quality -= 2;
		}
	}

	public class ItemFactory
	{
		private const string STANDARD = "standard";
		private const string AgedBrie = "Aged Brie";
		private const string Sulfuras = "Sulfuras";
		private const string Backstage = "Backstage passes";
		private const string Conjured = "Conjured";

		// Key: item name, Value: item's derived class
		public Dictionary<string, Item> dict;

		public ItemFactory(Item i)
		{
			dict = new Dictionary<string, Item>();

			dict[STANDARD] = new StandardItem(i);
			dict[AgedBrie] = new AgedBrie(i);
			dict[Sulfuras] = new Sulfuras();
			dict[Backstage] = new BackstagePasses(i);
			dict[Conjured] = new Conjured(i);

		}

		public T GetObject<T>(T i) where T : Item
		{

			foreach (var it in dict)
			{
				if (i.Name.Contains(it.Key.ToString().ToLower()))
					return (T)it.Value;
			}

			return (T)dict[STANDARD];
		}


	}

}
