export class Store{
    name:string,
    branches:string[],
    logo:string,
    constructor(_name:string,_branches:string[],
        _logo:string,){
        this.name=_name;
        this.branches=_branches;
        this.logo=_logo;
    }
}

export interface IProduct{
    id:number,
    name:string,
    quantity:number,
    price:number,
    img:string,
    catId:number
}

export interface ICategory{
    id:number,
    name:string,
}
export enum DiscountOffers{
    noDiscount="No Discount",
    tenPercent="0.1",
    fifteenPercent= "0.15"
}
