var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "MCA_STUDENTS"
});
con.connect(function(err) {
if (err) throw err;
var sql = "UPDATE visitors SET address ='Churchgate' WHERE address = 'Virar'";
con.query(sql, function (err, result) {
if (err) throw err;
console.log(result.affectedRows + " record(s) updated");
});
});