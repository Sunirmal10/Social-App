import mysql from "mysql"
import dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:process.env.PASS,
  database:"social_app"
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'enter your mysql pass' in a sql file in mysql workbench;
