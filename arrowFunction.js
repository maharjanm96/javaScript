//ARROW FUNCTION
const myFunction = () => {
  console.log(`This is  a arrow function.`);
};
myFunction();

const numbers = [1, 2, 3, 4, 5, -8, 0, 45, 12, 9, 100];

const square = numbers.map((element) => Math.pow(element, 2));
const sum = numbers.reduce((prev, curr) => prev + curr);
const evenNumber = numbers.filter((element) => element > 0 && element % 2 == 0);

console.log(square);
console.log(`Total Sum = ${sum}`);
console.log(evenNumber);
