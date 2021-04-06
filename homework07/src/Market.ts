import Product from './Product';
import Sources from './Sources';
import Customer from './Customer';
import Order from './Order';

export default class Market {

  public products: Product[];
  public customers: Customer[];
  public orders: Order[];

  constructor(){
    
    var s = new Sources();
    this.customers = new Array<Customer>();
    this.products = s.GetProducts();
    
    this.orders = new Array<Order>();
  }

  GetById(id:number){
    var product = this.products.filter((p, idx) =>{
      return (p.id == id);
    })[0]

    return product
  }

  GetCustomer(customerid: number){
    var customer = this.customers.filter((c, idx) => {
      return (c.id == customerid);
    })[0]

    return customer;
  }

  AddToFavorites(id: number, customerid:number){
    
    var product = this.GetById(id);
    var customer = this.GetCustomer(customerid);
    //customer.favorites.Add(product);
    customer.AddFavorites(product);

  }

  Like(id:number){

    var product = this.GetById(id);
    product.IncrementLIKE(1);

  }

  PlaceOrder(productid:number, customerid: number, quantity:number){

    var product = this.GetById(productid);
    var customer = this.GetCustomer(customerid);
    var order = new Order(customer, product, quantity, this);
    var discount = 0;

    if(product.likeability > 5) discount += 0.1
    var succes = order.FinalizeOrder(discount);
    

  }

  Show(){
    /*
    this.products.forEach((p, idx) =>{
      console.log(p);
    })*/
    console.log(this.products);
  }

  RefillStock(id:number, value:number){
    var product = this.GetById(id);
    product.stock += value;
  }

  CreateCustomer(c:Customer){
    this.customers.push(c);
  }

  AddProduct(p:Product){
    this.products.push(p);
  }


}
