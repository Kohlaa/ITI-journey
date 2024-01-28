import { Component } from '@angular/core';
import {DiscountOffers,Store,IProduct} from '../../models/store';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   discount:DiscountOffers;
   store:Store;
   clientName:string;
   product:IProduct;
  // discount:DiscountOffers

 constructor(){
  this.discount=DiscountOffers.noDiscount;
  this.store=new Store("Logo",["Damanhur","Cairo","Alex"],"assets/images/4.jpg");
  this.clientName="";
  this.product = {
 id:1,
    name:"Logo",
    quantity:1,
    price:1,
    img:"string",
    catId:1,
  }
   
  
  
 }

}
