const readDatabase = require('./utils');

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((objs) => {
      const orderedObjsKeys = {};
      for (const k in objs) {
        // map lower case form of objs keys to the actual key, for sorting
        if (objs) {
          orderedObjsKeys[k.toLowerCase()] = k;
        }
      }
      // prepared ordered array of keys into objs
      const orderedKeys = Object.keys(orderedObjsKeys).sort();
      let res = 'This is the list of our students';
      for (const key of orderedKeys) {
        if (objs) {
          const namesJoin = objs[orderedObjsKeys[key]].join(', ');
          res += `\nNumber of students in ${orderedObjsKeys[key]}: ${objs[orderedObjsKeys[key]].length}. List: ${namesJoin}`;
        }
      }
      response.send(res);
    }).catch((err) => {
      response.status(500).send(err.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(path).then((objs) => {
      const { major } = request.params;
      if (!['CS', 'SWE'].includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        let res = '';
        const namesJoin = objs[major].join(', ');
        res += `List: ${namesJoin}`;
        response.send(res);
      }
    }).catch((err) => {
      response.status(500).send(err.message);
    });
  }
}

module.exports = StudentsController;

// StudentsController.getAllStudents(null, null);
