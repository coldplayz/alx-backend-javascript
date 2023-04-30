/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />

// Create a Cpp subject
const subjectC: Subjects.Cpp = new Subjects.Cpp();

// Create a Cpp teacher object
const teacherC: Subjects.Teacher = {
  firstName: 'Greenbel',
  lastName: 'Eleghasim',
  experienceTeachingC: 5,
}

// Assign teacher to subject
subjectC.teacher = teacherC;

console.log(subjectC.getAvailableTeacher());
