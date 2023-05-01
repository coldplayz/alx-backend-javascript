export interface MajorCredits {
  majorC: void; // branding
  credits: number;
}

export interface MinorCredits {
  minorC: void; // branding
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Test code
const mj1: MajorCredits = { majorC: void('major'), credits: 89 };
const mj2: MajorCredits = { majorC: void('major'), credits: 98 };
const mn1: MinorCredits = { minorC: void('minor'), credits: 51 };
const mn2: MinorCredits = { minorC: void('minor'), credits: 15 };

console.log(sumMajorCredits(mj1, mj2).credits);
console.log(sumMinorCredits(mn1, mn2).credits);


