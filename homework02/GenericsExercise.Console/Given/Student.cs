namespace GenericsExercise.Console
{
    public class Student : IEntity
    {
        public string Id { get; set; }

        public string FisrtName { get; set; }
        public string LastName { get; set; }
        
        public Student(string id, string first, string last)
		{
            Id = id;
            FisrtName = first;
            LastName = last;
		}

        public Student()
		{

		}

        public override string ToString()
        {

            return new string(Id + " " + FisrtName + " " + LastName);
        }

    }
}