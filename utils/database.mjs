import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

const pool = mysql.createPool(config);

export default pool;
