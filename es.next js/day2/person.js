class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    printData() {
        console.log(this.name, this.age);
    }
    static whoAmI() {
        console.log("I'm a person");
    }
}


class Student extends Person {
    constructor(_uni, _fa ,_fg,_name,_age) {
        super(_name,_age);
        this.uni=_uni;
        this.fa=_fa;
        this.fg=_fg;
    }
    printData(){
        console.log(`${this.name} is a student in faculty of ${this.fa} in university ${this.uni}and his final grad is ${this.fg}`);
    }
    static whoAmI() {
        console.log("I'm a student");
    }
}


let myMixin={
    printName(){
        console.log(this.name);
    },
    printAge(){
        console.log(this.age);
    }
}

Object.assign(Student.prototype,myMixin)
let s1 = new Student("m","m","m","m","m");
p1=new Person("mm",20)
p1.printData()
s1.printData()
// s1.name="Mohamed"
s1.printName()




let obj = { name: "mohamed", age: 22, email: "df@gmail.com" };




let handler = {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw prop + " is not exist";
    }
  },
  set: function (target, prop, value) {
    if (prop == "name") {
      if (typeof value != "string") {
        throw "name is not valid, must be string";
      } else if (value.length !=7) {
        throw "name must be only 7 chars";
      }
    } else if (prop == "age") {
      if (typeof value != "number") { 
        throw "age must be integer";
      } else if (value < 25 || value >60) {
        throw "age must be between 25,60";
      }
    } else if (prop == "address") {
      if (typeof value != "string") {
        throw "address must be string";
      }
    }

    target[prop] = value;
  },
};

let prox = new Proxy(obj, handler);
prox.name = "asdjhdj";
console.log(prox.name);
console.log(prox.age);
// prox.age = 13;
// console.log(prox.age);
// console.log(prox.email);
prox.email = "17657@hgf";
console.log(prox.email);
// console.log(prox.address);
// console.log(prox.role);