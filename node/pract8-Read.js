var fs = require('fs');
fs.readFile('operation.txt', function (err, data) {
if (err) throw err;
console.log(data.toString());
});
