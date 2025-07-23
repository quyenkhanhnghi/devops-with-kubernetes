const express = require('express');
const { v4: uuidv4 } = require('uuid');

const randomString = uuidv4();
const app = express();
const port = process.env.PORT || 3000;

function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

// Log immediately, then every 5 seconds
logRandomString();
setInterval(logRandomString, 5000);

app.get('/status', (req, res) => {
  const timestamp = new Date().toISOString();
  res.json({ timestamp, randomString });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
}); 