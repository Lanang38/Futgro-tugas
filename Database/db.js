import mysql2 from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const db = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Connection to Database Success :)');
    connection.release();
  } catch (error) {
    console.error('Database Connection Failed', error);
  }
}

async function query(command, values) {
  try {
    const [value] = await db.query(command, values ?? []);
    return value;
  } catch (error) {
    console.error(error);
  }
}

export { db, testConnection, query };
