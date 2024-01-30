//Object in JS

const person = {
  name: "Manish",
  address: "Gongabu",
  age: "22",
  isStudent: true,
};

console.log(person.name);
console.log(person.address);
console.log(person.age);
console.log(person.isStudent);


//this keyword in JS 
const userDetails = {
  name: "Manish",
  age: "22",
  isEmployed: true,
  email: "maharjanm96@gmail.com",

  myDetails: function(){
    console.log(`My name is ${this.name} and email is ${this.email}`)
  }

}

userDetails.myDetails();
