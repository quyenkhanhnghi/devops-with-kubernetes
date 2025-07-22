const { v4: uuidv4 } = require('uuid');

const randomString = uuidv4();

function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

// Log immediately, then every 5 seconds
displayRandomString();
setInterval(logRandomString, 5000);

function displayRandomString() {
  logRandomString();
} 