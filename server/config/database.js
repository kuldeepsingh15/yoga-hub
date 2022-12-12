import mysql from 'mysql';
import { Sequelize } from "sequelize";
// var connection = mysql.createConnection({
//   host: "85.10.205.173",
//   port: 3306,
//   user: 'kuldeepsingh8437',
//   password: 'P@ssword00',
//   database: 'yogadb'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected to the database!');
// });
// export default connection;

const db = new Sequelize('yogadb', 'kuldeepsingh8437', 'P@ssword00', {
    host: "85.10.205.173",
    port: 3306,
    dialect: "mysql"
});
export default db;