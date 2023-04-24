export default function createInt8TypedArray(length, position, value) {
  // Create the array buffer
  const ab = new ArrayBuffer(length);
  // Create a view for it
  const dv = new DataView(ab);

  try {
    dv.setInt8(position, value);
    return dv;
  } catch (err) {
    // Very likely RangeError
    throw new Error('Position outside range');
  }
}
