using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dealership.Models
{
	public class Link
	{
		public string Rel { get; set; }
		public string Verb { get; set; }
		public string Href { get; set; }
		
		public Link() { }
		public Link(string r, string v, string h)
		{
			Rel = r;
			Verb = v;
			Href = h;
		}
		
	}
}
