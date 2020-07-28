require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'janetzheng',
  host: process.env.HOST || 'localhost',
  database: process.env.DB || 'sodapop',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT,
  max: 20,
  keepAliveInitialDelayMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports.pool = pool;
