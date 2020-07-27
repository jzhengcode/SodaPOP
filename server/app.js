const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(DIST_DIR));
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.post('/api/new', (req, res) => {
  console.log(req.body)
})

module.exports = app;
