// // let arr = [2, 6, 84, 27, 45];

// function objectIter(obj) {
//     obj[Symbol.iterator] = function () {
//         let counter = -1;
//         return {
//             next() {
//                 counter++;
//                 if (counter < obj.length) {
//                     return {
//                         value: obj[counter],
//                         done: false,
//                     };
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true,
//                     };
//                 }
//             },
//         };
//     };
// }

// objectIter(arr);
// // 

let oblec = {
    name: "ads",
    age: 13,
    
        [Symbol.iterator]() {
            let counter = -1;
            let keys = Object.keys(this)
            console.log(keys);
            let vals = Object.values(this)
            return {
                next() {
                    counter++;
                    if (counter < keys.length) {
                        return {
                            value: `${keys[counter]} ${vals[counter]} `,
                            done: false,
                        };
                    } else {
                        return {
                            value: undefined,
                            done: true,
                        };
                    }
                },
            };
        }
    }


for (const ele of oblec) {
    console.log(ele);
}