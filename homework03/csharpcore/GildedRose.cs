using System.Collections.Generic;

namespace csharpcore
{
    public class GildedRose
    {
        IList<Item> Items;
        
        public GildedRose(IList<Item> Items)
        {
            this.Items = Items;
        }

        public void UpdateQuality()
        {
			for (int i = 0; i < Items.Count; i++)
			{
                Item item = Items[i];

                ItemFactory factory = new ItemFactory(item);

                CustomItem newItem = factory.GetCustomItem(item);

                newItem.UpdateState();

                //System.Console.WriteLine(newItem.ToString());
                Items[i] = newItem;



            }
            
        }


        
    }

}

