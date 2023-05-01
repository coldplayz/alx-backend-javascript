var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path='Teacher.ts' />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingC > 0) {
                return 'Available Teacher: ' + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return 'Available Teacher: ' + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingJava > 0) {
                return 'Available Teacher: ' + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />
// Create subject objects
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
// Teacher object
var cTeacher = {
    firstName: 'Greenbel',
    lastName: 'Eleghasim',
    experienceTeachingC: 10,
};
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
