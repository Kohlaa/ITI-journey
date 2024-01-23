import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myStore:Store;
  myProduct:Iproduct

  constructor(){
    this.myStore =new Store("No Name","https://picsum.photos/200",["cairo","sohag","alex"])
    this.myProduct={id:1,name:"iphone",price:1000}
  }

}
