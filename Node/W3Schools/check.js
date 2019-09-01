var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'Hello content! Hopefully there is more now!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});