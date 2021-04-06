import Product from './Product'


export default class Favorites {

  list: Product[];

  constructor() {
    this.list =   new Array<Product>()
  }

  Add(p: Product){
    console.log("Added to favorites")
    this.list.push(p);
    this.Show();
  }

  Show(){
    
    this.list.forEach((p) =>{
      console.log(p)
    });

  }



}
