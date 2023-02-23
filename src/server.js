const express = require('express');
const app = express();
const fs = require('fs');
app.post('/updateJsonFile', (req, res) => {
  // Read the contents of the JSON file
  const data = fs.readFileSync('./logo.svg');

  // Parse the contents of the file into an object
  const obj = JSON.parse(data);

  // Modify the object as needed
  obj.someProperty = 'new value';

  // Convert the modified object back to JSON
  const newData = JSON.stringify(obj);

  // Write the updated JSON data back to the file
  fs.writeFileSync('data.json', newData);

  res.send('JSON file updated');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
