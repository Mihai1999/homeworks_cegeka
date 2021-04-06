import Favorites from "./Favorites";
import Product from "./Product";


export default class Customer{

  id: number;
  username:string;
  password:string;
  email:string;
  balance:number;
  favorites: Favorites;


  constructor(username:string, password:string, email:string, id:number) {

    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.favorites = new Favorites();
    this.balance = 0.0;

  }

  AddMoney(sum: number){
    
    this.balance += sum;
  }

  AddFavorites(p: Product){
    this.favorites.Add(p);
    
  }

}