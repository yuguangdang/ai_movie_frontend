function zipArrays(arr1, arr2) {
  const zipped = [];

  const length = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    zipped.push([arr1[i], arr2[i]]);
  }

  return zipped;
}

export default zipArrays

