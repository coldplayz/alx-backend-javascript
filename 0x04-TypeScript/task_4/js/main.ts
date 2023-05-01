/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />

// Create subject objects
const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

// Teacher object
const cTeacher: Subjects.Teacher = {
  firstName: 'Greenbel',
  lastName: 'Eleghasim',
  experienceTeachingC: 10,
}

//for cpp subject
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

//for java subject
console.log('Java');
cpp.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

//for react subject
console.log('React');
cpp.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/*
const subjectC: Subjects.Cpp = new Subjects.Cpp();

// Create a Cpp teacher object
const teacherC: Subjects.Teacher = {
  firstName: 'Greenbel',
  lastName: 'Eleghasim',
  experienceTeachingC: 5,
}

// Assign teacher to subject
subjectC.setTeacher = teacherC;
console.log(subjectC.getAvailableTeacher());
*/
