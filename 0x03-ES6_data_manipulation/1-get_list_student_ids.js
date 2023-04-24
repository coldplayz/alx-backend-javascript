export default function getListStudentIds(objArr) {
  if (!(objArr instanceof Array)) {
    return [];
  }

  return objArr.map((obj) => obj.id);
}
