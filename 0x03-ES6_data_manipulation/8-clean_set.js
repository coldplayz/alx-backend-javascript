export default function cleanSet(set, startString) {
  let str = '';

  if (typeof startString !== 'string') {
    return str;
  }

  for (const val of set) {
    if (startString && typeof val === 'string' && val.startsWith(startString) && val.length > startString.length) {
      const startIdx = 0;
      str += (str ? '-' : '') + val.slice(startIdx + startString.length);
    }
  }

  return str;
}
