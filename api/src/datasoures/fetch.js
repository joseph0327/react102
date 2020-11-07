const fetch = require("node-fetch")

const url="https://example.com/profile/avatar";

fetch(url)
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});