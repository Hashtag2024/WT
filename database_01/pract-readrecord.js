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
var sql = "SELECT * FROM Visitors";
con.query(sql, function (err, result) {
if (err) throw err;
console.log(result);
});
});
