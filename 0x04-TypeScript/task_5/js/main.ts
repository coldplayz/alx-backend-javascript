export interface MajorCredits {
  _majorC: void; // branding
  credits: number;
}

export interface MinorCredits {
  _minorC: void; // branding
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Test code
const mj1: MajorCredits = { credits: 89 } as MajorCredits;
const mj2: MajorCredits = { credits: 98 } as MajorCredits;
const mn1: MinorCredits = { credits: 51 } as MinorCredits;
const mn2: MinorCredits = { credits: 15 } as MinorCredits; // seems to work as value -> { minorC: void('minor'), credits: 15 };

console.log(sumMajorCredits(mj1, mj2).credits);
console.log(sumMinorCredits(mn1, mn2).credits);

// console.log(sumMinorCredits(mn1, mn2)._minorC); // is undefined; not set


