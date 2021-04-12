import Product from './Product';


export default class Sources {

  private products: Product[];

  constructor() {

    this.products =  new Array<Product>()
    this.AddValues();
    
  }

  AddValues(){

    var product1 = new Product(1, "nume", "provider", 32, 1500);
    var product2 = new Product(2, "abcdefg", "hijklmn", 32, 100);

    this.products.push(product1, product2);
  }
  
  GetProducts(){
    return this.products;
  }

}






