export let x:Boolean=true;

let y:String=""
console.log(x,y);

let union:(String|number);

function fun(x:String):Boolean {
    return true;
}

enum e{
    name,
    address,
    jobTitle
}

function gen<T>(arg: T): T {
    return arg;
}

// function logDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
//      originalMethod = descriptor.value;
//     return originalMethod;
// }
function logDecorator(target, key, descriptor) {
    // console.log(descriptor);
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`this first arg is ${args[0]} and the second ${args[1]}`);
        console.log(`the result is ${originalMethod(args[0], args[1])}`);
    };
}
class MyClass {
    // @logDecorator
    myMethod(param: string): string {
        console.log(`Hello, ${param}`);
        return `Hello, ${param}!`;
    }
}

let instance = new MyClass();
instance.myMethod("World");


// // module1.ts
// export const message = "Hello from Module 1!";
// // module2.ts
// import { message } from "./module1";

// export function greet() {
//     console.log(message);
// }
// // main.ts
// import { greet } from "./module2";

// greet();
 
class point2D{
    x:number;
     y:number;
    constructor(_x,_y)
    {
        this.x=_x;
        this.y=_y;
    }
    calcLength(p2:point2D):void{
        let l = this.x - p2.x;
        // abs >> >> pow of two
        l=Math.pow(l,2);
        let r = p2.y - this.y;
        r=Math.pow(r,2);
        // let l = Math.pow(this.x,2);
        // let r = Math.pow(this.y,2); 
        let res = l+r;
        res = Math.sqrt(res);
        console.log(res);
    }
}

let p = new point2D(2,4)
let p2 = new point2D(2,4)
p.calcLength(p2);

class point3D extends point2D{
     z:number;
     constructor(x,y,_z)
     {
        super(x,y);
        this.z=_z;
     }
     calcLength(p2:point3D):void{
        let l = this.x - p2.x ;
        // abs >> >> pow of two
        l=Math.pow(l,2);
        let m = p2.y - this.y;
        m=Math.pow(m,2);
        let r = p2.z - this.z;
        r=Math.pow(r,2);
        // let l = Math.pow(this.x,2);
        // let r = Math.pow(this.y,2); 
        let res = l+r+m;
        res = Math.sqrt(res);
        console.log(res);

        // let l = Math.pow(this.x,2);
        // let m = Math.pow(this.y,2); 
        // let r = Math.pow(this.z,2); 
        // let res = l+m+r;
        // res = Math.sqrt(res);
        // console.log(res);
     }
}

let pp = new point3D(1,2,3);
let pp2 = new point3D(1,2,6);

pp.calcLength(pp2)