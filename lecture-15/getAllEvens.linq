<Query Kind="Program" />

void Main()
{
	var r = new Random();
	GetAllEvens()
		.Where(number => number % 2 == 0)
		.Where(number => number > 50)
		.Select(number => r.Next(100))
		.Take(50)
		.OrderBy(n => n)
		.GroupBy(n => n % 10)
		.Dump();
}



// Define other methods and classes here

IEnumerable<int> GetAllEvens(){
	var even = 2;
	while(true){
		// Thread.Sleep(500);
		yield return even;
		even +=2;
	}
}

IEnumerable<int> GetRandoms(){
	var r = new Random();
	while(true){
		yield return r.Next(100);
	}
}


