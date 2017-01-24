const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      describe: 'Address to fetch weather for.',
      alias: 'address',
      string: true,
    },
})
  .help()
  .alias('help', 'h')
  .argv;

  const place = encodeURIComponent(argv.address);
  const geocodeUrl= `https://maps.googleapis.com/maps/api/geocode/json?address=${place}`;

  axios.get(geocodeUrl)
    .then((response) => {
      if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
      }
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      const weatherUrl = `https://api.darksky.net/forecast/0f48f14a2478df23f2ea57fa481e7904/${lat},${lng}`;
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
    })
    .then((response) => {
      const temperature = response.data.currently.temperature;
      const apparentTemperature = response.data.currently.apparentTemperature;
      console.log(`The temperature is ${temperature}F.`);
      console.log(`It feels like ${apparentTemperature}F.`);
    })
    .catch((e) => {
      if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to servers.');
      } else {
          console.log(e.message);
      }
    });
