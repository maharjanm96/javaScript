//Object Destructuring

const user = {
  fullname: "Manish Maharjan",
  address: "Gongabu",
  isStudent: true,
};
const { fullname, address: location, isStudent } = user; //allows variable renaming also
console.log("Fullname is ", fullname, "lives in", location);

//Array Destructuring
const diet = ["Banana", "Chicken", "Egg"];
const [fruit, meat, protein] = diet;
console.log(
  "Fruit is ",
  fruit,
  "For meal eat",
  meat,
  "and get protein in",
  protein
);
