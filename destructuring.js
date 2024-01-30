//Swap values of two variables

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(`Value of x = ${x}`);
console.log(`Value of y = ${y}`);

//Swap two elements in array
const colors = ["red", "blue", "black", "white", "pink"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//Assign array elements to variable
const names = ["Manish", "Gojo", "Yuji", "Megumi", "Sukuna"];

const [firstName, secondName, thirdName, ...restNames] = names;

console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(restNames);

//Object destructuring

const person1 = {
  name: "Manish",
  age: "22",
  isStudent: true,
  userName: "maharjanm",
};

const { name, age, isStudent, userName } = person1;
console.log(name);
console.log(age);
console.log(isStudent);
console.log(userName);

//Destructure in Function Parameters

const animeDetails = {
  name: "Jujutsu Kaisen",
  genere: "Action",
  mainCharacter: "Sukuna",
  ratings: 10,
};

const displayDetails = ({ name, genere, mainCharacter, ratings }) => {
  console.log(`Anime name is ${name}.`);
  console.log(`Anime genere is ${genere}.`);
  console.log(`Anime mainCharacter is ${mainCharacter}.`);
  console.log(`Anime ratings is ${ratings}.`);
};

displayDetails(animeDetails);
