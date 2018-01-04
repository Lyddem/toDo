
const PORT = 3000 || PROCESS.ENV.PORT;
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const classNames = require('classnames');

const express = require('express');
const app = express();

//helps for server-side rendering
const ReactDOMServer = require('react-dom/server');


//serve static files
app.use(express.static('dist'));
app.use(bodyParser.json());


//Server setup with express -- see lines 6 & 7
app.listen(3000, () => {
  console.log('listening on port ' + PORT);
})
