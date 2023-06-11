const fs = require('fs');
const express = require('express');

function countStudentsAsync(path) {
  const promise = new Promise((resolve, reject) => {
    try {
      // read contents as utf-8 strings; no encoding defaults to Buffer object
      fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          // process content
          const lines = data.split('\n'); // make an array of lines
          const headers = lines[0].split(','); // csv headers
          const contentData = lines.slice(1); // get csv data minus header
          const dataObjsList = [];
          for (const datum of contentData) {
            // compose a list of datum objects where the
            // headers are keys for corresponding data of all data lines
            if (!(datum instanceof String) && datum.length !== 0) {
              // does not admit empty datum
              const datumFields = datum.split(',');
              const datumObj = {
                firstname: null,
                lastname: null,
                age: null,
                field: null,
              };
              for (const fieldIdx in datumFields) {
                if (datumObj) {
                  datumObj[headers[fieldIdx]] = datumFields[fieldIdx];
                }
              }
              dataObjsList.push(datumObj); // push the data object for further processing
            }
          }
          let response = `This is the list of our students\nNumber of students: ${dataObjsList.length}`;
          const fieldsStat = {};
          for (const dataObj of dataObjsList) {
            // push the students in each field to a list keyed by corresponding field name
            if (!fieldsStat[dataObj.field]) {
              // initialize the student firstnames array
              fieldsStat[dataObj.field] = [];
            }
            fieldsStat[dataObj.field].push(dataObj.firstname);
          }

          for (const key in fieldsStat) {
            if (fieldsStat) {
              const namesJoin = fieldsStat[key].join(', ');
              response += `\nNumber of students in ${key}: ${fieldsStat[key].length}. List: ${namesJoin}`;
            }
          }
          resolve(response);
          // console.log(fieldsStat);
        }
      });
    } catch (ENOENT) {
      reject(new Error('Cannot load the database'));
    }
  });

  return promise;
}

const path = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudentsAsync(path).then((response) => {
    res.send(response);
  }).catch((err) => {
    res.status(500).send(err.message);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
