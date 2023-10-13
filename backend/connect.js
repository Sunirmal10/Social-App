import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"@sql-20A*&&@",
  database:"social_app"
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '@sql-20A*&&@';
