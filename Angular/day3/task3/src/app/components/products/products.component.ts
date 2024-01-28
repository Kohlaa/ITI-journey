import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../modals/i-product';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../modals/i-category';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { NationlIdPipe } from '../../pipes/nationl-id.pipe';
import { CreditcardPipe } from '../../pipes/creditcard.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardDirective,
    NationlIdPipe,
    CreditcardPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[];
  filteredProduct: IProduct[];
  counter: number = 0;
  totalquant: any = 0;

  totalOrderPrice: number = 0;
  selectedCategoryId: number = 1;
  nationalID: string = '30105171402256';
  credit: string = '0123456789123456';
  todaydate: Date = new Date();

  @Input() receivedSelectedCatId: number = 1;

  @Output() onObjCreated: EventEmitter<IProduct>;
  @Output() onquantityChanged: EventEmitter<number>;

  @ViewChild('itemCount') itemCount!: ElementRef;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'oppo',
        imgUrl: 'assets/mob.jpeg',
        catId: 1,
        quantity: 1,
        price: 10000,
      },
      {
        id: 3,
        name: 'nokia',
        imgUrl: 'assets/lap.jpeg',
        catId: 2,
        quantity: 0,
        price: 15000,
      },
      {
        id: 4,
        name: 'samsung',
        imgUrl: 'assets/tap.jpeg',
        catId: 3,
        quantity: 20,
        price: 8000,
      },
      {
        id: 5,
        name: 'samsung',
        imgUrl: 'assets/mob.jpeg',
        catId: 1,
        quantity: 27,
        price: 8000,
      },
      {
        id: 6,
        name: 'samsung',
        imgUrl: 'assets/lap.jpeg',
        catId: 2,
        quantity: 27,
        price: 8000,
      },
    ];

    this.onObjCreated = new EventEmitter<IProduct>();
    this.onquantityChanged = new EventEmitter<number>();

    this.filteredProduct = this.products;
  }

  buy(quan: IProduct) {
    quan.quantity--;
    console.log(quan);
    this.totalquant = this.itemCount.nativeElement.value;
    console.log(this.totalquant);
    
    let obj: IProduct = {
      name: quan.name,
      price: quan.price,
      quantity: quan.quantity,
      id: quan.id,
      catId: quan.catId,
      imgUrl: quan.imgUrl,
      totalQuan:this.totalquant
    };

    this.onObjCreated.emit(obj);
   

    console.log(this.totalquant);

    return obj;
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProduct = this.products.filter(
      (prd) => prd.catId == this.receivedSelectedCatId
    );
    console.log(this.filteredProduct);
  }

  // ngAfterViewInit() {
  //   console.log(this.itemCount.nativeElement.value);
  // }
}
