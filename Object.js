const myDetails = {
  fullname: "Manish Maharjan",
  age: 21,
  location: "Gongabu",
};

function user() {
  //returns object
  console.log(myDetails);
  //returns single value
  console.log(
    "Details of user: ",
    "Name: ",
    myDetails.fullname,
    "Age:",
    myDetails.age,
    "Location:",
    myDetails.location
  );
}
user();
