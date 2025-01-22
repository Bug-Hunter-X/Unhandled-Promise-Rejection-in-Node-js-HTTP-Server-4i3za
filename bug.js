const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  }).catch(error => {
    // Error handling is missing here! 
    console.error('Error:', error); // This will log the error, but the client will hang
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a potential failure
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});