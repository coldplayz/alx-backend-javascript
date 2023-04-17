export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const arrayCopy = array.slice(0);
  for (const val of array) {
    arrayCopy[idx] = appendString + val;
    idx += 1;
  }

  return arrayCopy;
}
