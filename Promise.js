const myPromise = new Promise((resolve, reject) => {
  let name = "Manish";

  if (name == "Manish") resolve(`Promise is resolved. Name is ${name} `);
  else reject("Promise is rejected");
});
myPromise
  .then((message) => {
    console.log("Code is working fine.", message);
  })
  .catch((error) => {
    console.log(error);
  });