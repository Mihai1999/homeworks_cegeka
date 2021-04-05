
export default class Product {

  id: number;
  name: string;
  provider: string;
  stock: number;
  price: number;
  likeability: number = 0;

  constructor(id:number, name:string, provider:string, stock:number, price:number) {
    
    this.id = id;
    this.name = name;
    this.provider = provider;
    this.stock = stock;
    this.price = price;

  }

  IncrementLIKE(value:number){
    this.likeability += value
  }

  Buy(){
    this.stock -= 1;
  }

}
