export default function cleanSet(set, startString) {
  let str = '';

  for (const val of set) {
    if (startString && val.startsWith(startString)) {
      const startIdx = 0;
      str += (str ? '-' : '') + val.slice(startIdx + startString.length);
    }
  }

  return str;
}
