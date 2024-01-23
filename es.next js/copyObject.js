// function copyObject(obj) {
//     // let newObj = JSON.parse(JSON.stringify(obj));
//     // return newObj;
// }

function copyObject(obj) {
    if (Array.isArray(obj)) {
        return obj.map(copyObject);
    }

    return { ...obj };
}


var obj = {
    name: "Mohamed",
    age: 22,
    skills: [1, 2, 3, 5]
}
// let newObj = JSON.parse(JSON.stringify(obj));
var obj1 = obj; // shallow
var obj2 = copyObject(obj); // deep
obj1.name = "ali"
obj2.age = 20
obj.name = "Ahmed"
obj.skills=[2,4,6]
obj1.skills=[2,4,6]
console.log( obj1,obj2, obj);




