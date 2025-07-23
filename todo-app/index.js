const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const appHash = uuidv4();

app.get('/', (req, res) => {
  const requestHash = uuidv4();
  const htmlPath = path.join(__dirname, 'index.html');
  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    html = html.replace('<span id="appHash"></span>', `<span id="appHash">${appHash}</span>`)
               .replace('<span id="requestHash"></span>', `<span id="requestHash">${requestHash}</span>`);
    res.send(html);
  });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
}); 