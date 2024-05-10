const numbers = [1, 2, 3, 4, 5];
//Map
const newArray = numbers.map((num) => {
  return num + 1;
});
console.log("Old Array", numbers);
console.log("New Array", newArray);


//Filter
const evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log("Even numbers:", evenNumbers);


//Reduce 
const reduce = numbers.reduce((prev, curr) => {
    return prev+curr
})
console.log("Total Sum:" , reduce)