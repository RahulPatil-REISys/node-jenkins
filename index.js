//test
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/v1', (req, res) => {
  res.send('Hello from /api/v1');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
