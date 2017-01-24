// promises ES6
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(10, 20).then((result) => {
  console.log('Here is your answer: ', result);
  return asyncAdd(result, 100);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
}).then((result) => {
  console.log('New Answer: ', result);
}, (errorMessage) => {
  console.log(errorMessage);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey! It worked!');
//     // reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
