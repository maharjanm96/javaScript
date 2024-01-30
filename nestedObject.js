const fruits = [
  { name: "Apple", color: "red", kg: 10 },
  { name: "Orange", color: "orange", kg: 5 },
  { name: "BlueBerry", color: "purple", kg: 2 },
  { name: "Mango", color: "yellow", kg: 1 },
];

// fruits.forEach((element) => console.log(element.name)); //element can be anything Eg:fruit.name, fruit.color, fruit.kg
// fruits.pop(); //removes the last element
// fruits.splice(0, 1); //starting after 0 remove 1 element
// fruits.push({ name: "Grapes", color: "green", kg: 5 }); //adds element
// console.log(fruits);

fruits.map((fruit) => console.log(fruit.color));
const redFruit = fruits.filter((fruit) => fruit.color === "yellow");
console.log(redFruit)

const maxKg = fruits.reduce((prev,curr) => curr.kg > prev.kg ? curr : prev)
console.log(maxKg)