function acceptTwoParameters(param1, param2) {
    if (arguments.length !== 2)
        throw new Error('Function accepts exactly 2 parameters.');
    console.log('Parameters accepted');
}

acceptTwoParameters(10, 20);
// acceptTwoParameters(10);
// acceptTwoParameters(10, 20, 30);

function addNumbers() {
    if (arguments.length === 0) {
        throw new Error('Please provide numbers to add.');
    }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) {
            throw new Error('All parameters must be numbers.');
        }
        sum += arguments[i];
    }
    return sum;
}

try {
    console.log(addNumbers(5, 10, 15));
    // console.log(addNumbers(5, '10', 15)); 
    // console.log(addNumbers()); 
} catch (error) {
    console.error(error.message);
}




function reverseParams() {
    return Array.prototype.splice.call(arguments, 0).reverse();
}

console.log(reverseParams(1, 2, 3, 4));
console.log(reverseParams('a', 'b', 'c'));


function reverse2() {
    return Array.from(arguments).reverse();
}

console.log(reverse2('a', 'b', 'c'));


const myObj = {
    getSetGen: function () {
        const self = this;
        const props = Object.keys(self);
        for (const prop of props) {
            if (typeof self[prop] !== 'function') {
                self[`get${prop}`] = function () {
                    return self[prop];
                };
                self[`set${prop}`] = function (value) {
                    self[prop] = value;
                };
            }
        }
    }
};

const user = { name: "Ali", age: 10 };

myObj.getSetGen.call(user);

console.log(user.getname()); 
console.log(user.getage());

user.setname("Ahmed");
user.setage(20);

console.log(user.getname());
console.log(user.getage());
