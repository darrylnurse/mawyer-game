
function add1(a,b){
  return a + b;
}

const add2 = function(a,b){
  return a + b;
}
const add3 = (a,b) => {
  return a + b;
}

const add4 = (a,b) => a + b;

const log = console.log.bind();

log(add1(5,19));
log(add2(6,7));
log(add3(5,8));
log(add4(9,12));

const fruits = ["apple", "banana", "peach", "jackfruit", "pineapple"];

for(const fruit of fruits){
  console.log(fruit);
}

function my_print(item){ //.forEach has void return type; used for functions that take functions as params
  console.log("Delcious ", item);
}
fruits.forEach(my_print);

let plural_fruits = fruits.map((f) => f + "s");

console.log(plural_fruits);

//.filter is useful too

let myObject = {
  name: "John",
  age: 45,
  size: "all"
};