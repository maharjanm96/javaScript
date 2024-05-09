const myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition == true)
    resolve(`Promise is resolved. Condition is ${condition} `);
  else reject("Promise is rejected");
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
