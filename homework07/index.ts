import Customer from "./src/Customer";
import Market from "./src/Market";
import Product from "./src/Product";



console.log("Hellow World")

var market = new Market();
//market.Show();
var c1 = new Customer("Mihai", "parola123", "mihai@yahoo.com", 1);
var c2 = new Customer("customer2", "parola123", "customer@yahoo.com", 1);
market.CreateCustomer(c1); 
market.CreateCustomer(c2);
var p1 = new Product(3, "pizza", "ristorante", 24, 25)
var p2 = new Product(4, "adidasi nike", "ccc shoes", 10, 200)
market.AddProduct(p1);
market.AddProduct(p2);
//market.Show();

// service 1, increment likeability for a product
var p3 = market.GetProductById(3);
console.log(p3);
for(let i=0; i<6; i++){
  market.Like(3);
}

var p4 = market.GetProductById(3);
console.log(p4);

// likeability discount, if libeability > 5  discount 10%
market.GetCustomer(1).AddMoney(100000)
market.PlaceOrder(4, 1, 5)
for(let i=0; i<6; i++){
  market.Like(4);
}
market.PlaceOrder(4, 1, 5)


//refill s tock
console.log(market.GetProductById(3).stock);
market.RefillStock(3, 10);
console.log(market.GetProductById(3).stock);

//add product to favorites with price > 1000 than buy it\
var p5 = new Product(5, "ceva scump", "balenciaga", 2, 1500)
market.AddProduct(p5);
market.PlaceOrder(5, 1, 1);
var fav = market.GetCustomer(1).favorites.list;
console.log("favorite", fav);
market.AddToFavorites(5, 1);
market.PlaceOrder(5, 1, 1);