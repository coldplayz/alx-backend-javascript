export default function getStudentIdsSum(objArr) {
  if (!(objArr instanceof Array)) {
    return [];
  }

  return objArr.reduce((a, x) => a + x.id, 0);
}
