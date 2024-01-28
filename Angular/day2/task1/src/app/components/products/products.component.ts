import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/Forms";
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { ProductCardDirective } from '../../directives/product-card.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: Iproduct[];
  categories: Icategory[];
  selectedId: number = 1;
  myClass: string = "card";
  constructor() {
    this.product = [
      {
        id: 100, name: "Iphone", quantity: 1, price: 5000, imgUrl: "assets/images/iphonePic.jpg", catId: 1
      },
      {
        id: 200, name: "Dell Laptop", quantity: 5, price: 6000, imgUrl: "assets/images/lapPic.jpg", catId: 2
      },
      {
        id: 300, name: "Samsung Tablet", quantity: 4, price: 7000, imgUrl: "assets/images/samTab.jpg", catId: 3
      }
    ];
    this.categories = [
      {
        id: 1, name: "Mobiles"
      },
      {
        id: 2, name: "Laptop"
      },
      {
        id: 3, name: "Tablet"
      }
    ];
  }
  buy(Id: number) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].id == Id) {
        this.product[i].quantity--;

        break;
      }
    }
  }
  changeCat() {
    // this.selectedId=2;
  }
}
