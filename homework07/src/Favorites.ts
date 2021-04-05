import Product from './Product'


export default class Favorites {

  list: Product[];

  constructor() {
    this.list =   new Array<Product>()
  }

  Add(p: Product){
    this.list.push(p);
  }

  Show(){
    
    this.list.forEach((p) =>{
      console.log(p)
    });

  }



}
