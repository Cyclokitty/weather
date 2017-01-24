const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Bonquiqui'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
  console.log('Please wait...');
};

getUser(55, (user) => {
  console.log(user);
  console.log('Thank you');
});
