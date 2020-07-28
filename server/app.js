const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { pool } = require('../database')

const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/api/newBeverage', (req, res) => {
  const { beverage, numberServings, servingSize, date } = req.body;
  const totalOz = Number(servingSize) * Number(numberServings);
  let gramSugar = 0;
  let calorie = 0;

  if (beverage === 'Sprite') {
    gramSugar = Math.floor((38/12) * totalOz);
    calorie = gramSugar * 4;
  } else if (beverage === 'Coke') {
    gramSugar = Math.floor((39/12) * totalOz);
    calorie = gramSugar * 4;
  }
  
  const values = [date, 'masterTest', beverage, gramSugar, calorie];
  const text = `INSERT INTO 
    beverages(
      date,
      username,
      beverage,
      gramSugar,
      calorie
      ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5
    )` 
});

module.exports = app;
