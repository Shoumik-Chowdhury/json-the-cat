const request = require('request');

let url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;

request(url, (error, response, body) => {
  if (error) return console.log('error: ', error);
  console.log('status code: ', response && response.statusCode);
  const data = JSON.parse(body);
  if (!data[0]) return console.log('Breed not found!');
  console.log(data[0].description);
});