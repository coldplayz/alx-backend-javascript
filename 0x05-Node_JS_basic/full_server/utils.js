const fs = require('fs');

function readDatabase(path) {
  const promise = new Promise((resolve, reject) => {
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
        const fieldsStat = {};
        for (const dataObj of dataObjsList) {
          // push the students in each field to a list keyed by corresponding field name
          if (!fieldsStat[dataObj.field]) {
            // initialize the student firstnames array
            fieldsStat[dataObj.field] = [];
          }
          fieldsStat[dataObj.field].push(dataObj.firstname);
        }

        resolve(fieldsStat);
        // console.log(fieldsStat);
      }
    });
  });

  return promise;
}

module.exports = readDatabase;
