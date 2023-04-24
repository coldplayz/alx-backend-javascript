export default function updateStudentGradeByCity(objArr, city, newGrades) {
  return objArr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const objCpy = obj;
      for (const newGrade of newGrades) {
        if (newGrade.studentId === objCpy.id) {
          objCpy.grade = newGrade.grade;
          return objCpy;
        }
      }
      // No newGrades object corresponding to objCpy.id
      objCpy.grade = 'N/A';
      return objCpy;
    });
}
