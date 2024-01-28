import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {
  // renderer: any;
  @Input() defCol:string="yellow";
  constructor(public eleRef: ElementRef) {
    // console.log("hugvdhfjkm");

    // this.eleRef.nativeElement.style.borderRadius = '50%';
    this.eleRef.nativeElement.style.border = `10px solid ${this.defCol}`;
  }
  @HostListener('mouseover') fun1(){
    this.eleRef.nativeElement.style.border = '19px solid blue';
  }
  
  @HostListener('mouseout') fun2(){
    this.eleRef.nativeElement.style.border = '10px solid red';
  }

}
