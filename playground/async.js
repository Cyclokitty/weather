console.log('Starting app');

setTimeout(() => {
  console.log('Asynching...');
}, 1000);

setTimeout(() => {
  console.log('Still asynching');
},0);

console.log('Finishing up');
