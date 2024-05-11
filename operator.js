//Spread Operator
const details = ["Manish", 25];
const userDetails = ["maharjanm96", ...details, "Gongabu"];

console.log(userDetails);

//Rest operator

const numbers = (...rest) => {
  return console.log(rest.length);
};
numbers();
numbers(2, 3);
numbers(1, 2, 5);
