export default function createIteratorObject(report) {
  const allEmployees = [];
  // console.log(report);
  for (const employeesList of Object.values(report.allEmployees)) {
    // console.log(employeesList, allEmployees);
    allEmployees.push(...employeesList);
  }

  return allEmployees[Symbol.iterator]();
}
