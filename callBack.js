const message = function () {
  console.log("Displaying after 5 seconds.");
};
setTimeout(message, 5000);

setTimeout(() => {
  console.log("Displaying after 3 seconds.");
}, 3000);

console.log("Displaying first");
