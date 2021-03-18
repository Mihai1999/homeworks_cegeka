namespace GenericsExercise.Console
{
    public class University : IEntity
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }

        public University(string id, string name, string address)
		{
            Id = id;
            Name = name;
            Address = address;
		}

        public University()
		{

		}
		public override string ToString()
		{
			
            return  new string(Id + " " + Name + " " + Address);
		}
	}
}