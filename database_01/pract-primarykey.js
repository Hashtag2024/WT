//creating table in database
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "MCA_STUDENTS"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE Visitors2 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),address VARCHAR(255),mobileno VARCHAR(255))"; 
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});