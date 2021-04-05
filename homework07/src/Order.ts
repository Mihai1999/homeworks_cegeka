import Customer from "./Customer";
import Market from "./Market";
import Product from "./Product";


export default class Order{

  customer: Customer;
  item: Product;
  quantity: number;
  market: Market;
  total: number;

  constructor(customer:Customer, item: Product, quantity: number, market:Market) {

    this.market = market;
    this.customer = customer
    this.item = item
    this.quantity = quantity;
    this.total = 0.0;

    market.orders.push(this);
  }


  FinalizeOrder(discount: number = 0): boolean{

    if(this.item.stock < this.quantity){
      console.log("Out of stock");
      return false;

    }

    if(this.item.price > 1000  && this.customer.favorites.list.filter((p, idx) => {
      return(p.id == this.item.id )
    }) != undefined ) discount += 0.25;

    this.item.stock -= this.quantity;

    this.total = this.quantity * (1 - discount) * this.item.price 

    if(this.customer.balance < this.total){
      console.log("Insufficent Funds");
      return false;
    }

    this.customer.balance -= this.total;
    console.log("Ati cumparat cu succes " + this.quantity + " " + this.item.name + " de la " +  this.item.provider);
    console.log("Suma totala platita: " + this.total);

    return true;

  }


}