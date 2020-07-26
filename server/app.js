const express = require('express');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(DIST_DIR));

module.exports = app;
