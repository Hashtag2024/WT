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
var sql = "INSERT INTO visitors (name,address,mobileno) VALUES ('Sayali','Virar',435678399),('Sakshi','Malad',5678493576),('Pratibha','Borivali',456970845),('Maya','Boisar',5678943578)";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 record inserted");
});
});