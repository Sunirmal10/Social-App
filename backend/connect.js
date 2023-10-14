import mysql from "mysql"
import dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER,
  password:process.env.PASS,
  database:process.env.DATABASE
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'enter your mysql pass' in a sql file in mysql workbench;
