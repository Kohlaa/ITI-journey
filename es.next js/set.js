// a) Try to add repeated names, will the set accept it?
// No


let s = new Set();
let s2 = new Set();
s.add("mohamed")
s.add("ali")
s2.add("ahmed")
s2.add("kohla")

for (const ele of s) {
    console.log(ele);
}
for (const ele of s2) {
    console.log(ele);
}

s=[...s,...s2]
console.log(s);
