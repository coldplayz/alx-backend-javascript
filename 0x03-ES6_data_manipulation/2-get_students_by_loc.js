export default function getStudentsByLocation(objArr, city) {
  if (!(objArr instanceof Array) || typeof city !== 'string') {
    return [];
  }

  return objArr.filter((obj) => obj.location === city);
}
