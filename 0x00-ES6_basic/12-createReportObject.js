export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(empData) {
      return Object.keys(empData).length;
    },
  };
}
