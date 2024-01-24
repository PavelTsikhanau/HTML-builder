const { readFile } = require('node:fs');
const { resolve } = require('node:path');

readFile(resolve(__dirname, 'text.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
