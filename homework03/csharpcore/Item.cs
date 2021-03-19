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
	public class CustomItem : Item {
		public CustomItem(Item i)
		{
			this.Name = i.Name;
			this.SellIn = i.SellIn;
			this.Quality = i.Quality;
		}

		public CustomItem() { }

		public void UpdateState()
		{

			UpdateQuality();

			if (SellIn > 0)
			{
				UpdateSellIn();
			}


			checkQuality();
			

		}
		public virtual  void UpdateQuality()
		{

		}

		public virtual void UpdateSellIn()
		{

		}

		public virtual void checkQuality()
		{
			if (Quality > 50)
			{
				Quality = 50;
			}
			else if (Quality < 0)
			{
				Quality = 0;
			}
		}

		public override string ToString()
		{
			return new String(this.Name + " " + this.SellIn + " " + this.Quality);
		}

	}

	public class StandardItem : CustomItem
	{
		public StandardItem(Item i)
			: base(i)
		{
			
		}

		public StandardItem()
		{

		}

		

		public override void UpdateQuality()
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

		public override void UpdateSellIn()
		{
			SellIn--;
		}

	}

	public class Sulfuras : CustomItem
	{
		public Sulfuras(Item i)
		{
			Name = i.Name;
			Quality = 80;
			SellIn = i.SellIn;
		}

		public override void  UpdateSellIn()
		{

		}

		public override void UpdateQuality()
		{

		}

		public override void checkQuality()
		{
			
		}
	}

	public class AgedBrie : CustomItem
	{
		public AgedBrie(Item i): base(i) { }
		public override void UpdateQuality()
		{
			Quality += 1;

		}

	}

	public class BackstagePasses : CustomItem
	{
		public BackstagePasses(Item i) : base(i) { }
		public override void UpdateQuality()
		{
			if (SellIn <= 5) Quality += 3;
			if (SellIn <= 10) Quality += 2;
			else Quality += 1;

		}
	}

	public class Conjured : CustomItem
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
			dict[Sulfuras] = new Sulfuras(i);
			dict[Backstage] = new BackstagePasses(i);
			dict[Conjured] = new Conjured(i);

		}

		public CustomItem GetCustomItem(Item i) 
		{
			//Console.WriteLine("GetCustomItem: " + i.Name);
			//Console.WriteLine("2: " + i.Name.ToLower().Contains(AgedBrie.ToLower()));
			foreach (var it in dict)
			{
				
				if (i.Name.ToLower().Contains(it.Key.ToString().ToLower()))
				{
					//Console.WriteLine("1: " + i.Name + " " + it.Value);
					return (CustomItem)it.Value;
				}
					
			}

			return (CustomItem)dict[STANDARD];
		}


	}

}
