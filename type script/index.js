"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = true;
var y = "";
console.log(exports.x, y);
var union;
function fun(x) {
    return true;
}
var e;
(function (e) {
    e[e["name"] = 0] = "name";
    e[e["address"] = 1] = "address";
    e[e["jobTitle"] = 2] = "jobTitle";
})(e || (e = {}));
function gen(arg) {
    return arg;
}
// function logDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
//      originalMethod = descriptor.value;
//     return originalMethod;
// }
function logDecorator(target, key, descriptor) {
    // console.log(descriptor);
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("this first arg is ".concat(args[0], " and the second ").concat(args[1]));
        console.log("the result is ".concat(originalMethod(args[0], args[1])));
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    // @logDecorator
    MyClass.prototype.myMethod = function (param) {
        console.log("Hello, ".concat(param));
        return "Hello, ".concat(param, "!");
    };
    return MyClass;
}());
var instance = new MyClass();
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
var point2D = /** @class */ (function () {
    function point2D(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    point2D.prototype.calcLength = function (p2) {
        var l = this.x - p2.x;
        // abs >> >> pow of two
        l = Math.pow(l, 2);
        var r = p2.y - this.y;
        r = Math.pow(r, 2);
        // let l = Math.pow(this.x,2);
        // let r = Math.pow(this.y,2); 
        var res = l + r;
        res = Math.sqrt(res);
        console.log(res);
    };
    return point2D;
}());
var p = new point2D(2, 4);
var p2 = new point2D(2, 4);
p.calcLength(p2);
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(x, y, _z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = _z;
        return _this;
    }
    point3D.prototype.calcLength = function (p2) {
        var l = this.x - p2.x;
        // abs >> >> pow of two
        l = Math.pow(l, 2);
        var m = p2.y - this.y;
        m = Math.pow(m, 2);
        var r = p2.z - this.z;
        r = Math.pow(r, 2);
        // let l = Math.pow(this.x,2);
        // let r = Math.pow(this.y,2); 
        var res = l + r + m;
        res = Math.sqrt(res);
        console.log(res);
        // let l = Math.pow(this.x,2);
        // let m = Math.pow(this.y,2); 
        // let r = Math.pow(this.z,2); 
        // let res = l+m+r;
        // res = Math.sqrt(res);
        // console.log(res);
    };
    return point3D;
}(point2D));
var pp = new point3D(1, 2, 3);
var pp2 = new point3D(1, 2, 6);
pp.calcLength(pp2);
