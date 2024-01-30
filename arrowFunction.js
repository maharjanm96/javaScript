//ARROW FUNCTION
const myFunction = () => {
  console.log(`This is  a arrow function.`);
};
myFunction();

const numbers = [1, 2, 3, 4, 5, -8, 0, 45, 12, 9, 100];

//map() applies function to each item in iterable in a loop and returns a new iterator that yields transformed items on demand.
const square = numbers.map((element) => Math.pow(element, 2));

//.reduce method takes two parameters and returns single element.
const sum = numbers.reduce((prev, curr) => prev + curr);

//returns the array with filtered data.
const evenNumber = numbers.filter((element) => element > 0 && element % 2 == 0);

console.log(square);
console.log(`Total Sum = ${sum}`);
console.log(evenNumber);
