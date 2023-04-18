export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let idx = 0;
  // console.log(reportWithIterator);
  for (const employee of reportWithIterator) {
    // console.log(employee);
    // console.log(reportWithIterator[idx]);
    if (idx === 0) {
      string += `${employee}`;
    } else {
      string += ` | ${employee}`;
    }
    idx += 1;
  }

  return string;
}
