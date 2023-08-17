let meatList = ["chicken", "beef", "Morrence"];
let letterList = ["a","b","c"];

function transformArrayToUpper(listOfStrings) {
  let upperCaseStrings = listOfStrings.map((string => string.toUpperCase()));

  return upperCaseStrings;
}

let upperChicken = transformArrayToUpper(meatList);

console.log(upperChicken);
console.log(transformArrayToUpper(letterList));

let personFirst = {
  name: "Mary",
  age: 31
};

let personSecond = {
  name: "Jen",
  age: 20
};

let personThird = {
  name: "Ford"
}

let personFourth = {
  name: "Sendou",
  age: 19
};

let personArray = [];
personArray.push(personFirst);
personArray.push(personSecond);
personArray.push(personThird);
personArray.push(personFourth);
personArray.push({});

console.log(personArray);

/*let arrayOfAge = personArray.map(person => person.age);
let ageSum = 0;
for(const ageValue of arrayOfAge){
  if(ageValue !== undefined){
    ageSum += ageValue;
  }
}*/

//console.log(ageSum);

/*const personWithAgeArray = personArray.filter((person) => "age" in person);
let ageSum = 0;
for(const person of personWithAgeArray){
  ageSum += person.age;
}*/

let ageSum = 0;
for(const person of personArray){
  ageSum += (person.age || 0);
}

//console.log(personWithAgeArray);
console.log(ageSum);
