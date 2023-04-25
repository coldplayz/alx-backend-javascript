export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // const mapCpy = new Map(map); // clone map
  const mapCpy = map;
  for (const [k, v] of mapCpy) {
    if (v === 1) {
      mapCpy.set(k, 100);
    }
  }

  return mapCpy;
}
