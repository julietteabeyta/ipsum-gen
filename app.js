const express = require('express');
const app = express();

const routes = require('./router');

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static('public'));

app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening at http://${hostname}:${port}/`);
})