var fs = require('fs');
fs.writeFile('Myfile.txt', 'This is my file @VIVA Institute of Technolgy!!!', function (err) 
{
if (err)
console.log(err);
else
console.log('Write operation complete.');
});
