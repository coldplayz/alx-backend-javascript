interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [other1: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Interface for the printTeacher signature
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// studentClass definition
class studentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Interface for studentClass
interface studentClassType {
  firstName: string;
  lastName: string;
  workOnHomework(): string; // `workOnHomework: () => string;` also works
  displayName(): string;
}

// Constructor interface
interface studentClassConstructor {
  new (firstName: string, lastName: string): studentClassType;
}

/*
const std1: studentClassType = new studentClass('Greenbel', 'Eleghasim');

function f(callbk: printTeacherFunction, fName: string, lName: string): void {
  console.log(callbk(fName, lName));
}

f(printTeacher, 'John', 'Doe');
*/
