"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMinorCredits = sumMinorCredits;
// Test code
var mj1 = { majorC: void ('major'), credits: 89 };
var mj2 = { majorC: void ('major'), credits: 98 };
var mn1 = { minorC: void ('minor'), credits: 51 };
var mn2 = { minorC: void ('minor'), credits: 15 };
console.log(sumMajorCredits(mj1, mj2).credits);
console.log(sumMinorCredits(mn1, mn2).credits);
