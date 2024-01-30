const person = {
  name: "Manish",
  food: "Burger",
  sayHello: function () {
    console.log(`Hello, I am ${this.name}`);
  },
  eat: function () {
    console.log(`I am ${this.name} and i am eating ${this.food}`);
  },
};

person.sayHello();
person.eat();
