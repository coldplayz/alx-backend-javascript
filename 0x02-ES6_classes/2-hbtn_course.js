export default class HolbertonCourse {
  constructor(name, length, students) {
      this.name = name;

      this.length = length;

      this.students = students;
  }

  // Implement a getter for each [public instance] field
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Implement setters
  set name(nm) {
    if (nm instanceof String || typeof nm === 'string') {
      this._name = nm;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(len) {
    if (len instanceof Number || typeof len === 'number') {
      this._length = len;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(stu) {
    if (stu instanceof Array) {
      this._students = stu;
    } else {
      throw TypeError('Students must be an Array');
    }
  }
}
