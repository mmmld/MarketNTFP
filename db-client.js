import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
// var client = new pg.Client("postgres://trgmriei:yAkdKRF34F7nR6Hd-uzuSTW7-6_O1JmZ@horton.db.elephantsql.com/trgmriei");
var schema = "seller"
var createTableQuery = `
CREATE SCHEMA IF NOT EXISTS ${schema};
CREATE TABLE IF NOT EXISTS ${schema}.${process.env.TABLE_NAME} (
  product_id SERIAL PRIMARY KEY,
  product VARCHAR(255),
  phone_number VARCHAR(255),
  product_quantity VARCHAR(255),
  price VARCHAR(255),
  region VARCHAR(255)
);`

const pool = new pg.Pool({
  user: 'trgmriei',
  host: 'horton.db.elephantsql.com',
  database: 'trgmriei',
  password: 'yAkdKRF34F7nR6Hd-uzuSTW7-6_O1JmZ',
  port: 5432 // default PostgreSQL port

});

// Function to execute an SQL query
async function executeQuery(query) {
  const client = await pool.connect();

  try {
    const result = await client.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  } finally {
    client.release();
  }
}
export {executeQuery, createTableQuery }