/**
 * Shell Sort
 * Time: O(n log² n) avg (depends on gap sequence) | Space: O(1)
 */

function shellSort(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// --- Example ---
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Before:", arr);
console.log("After: ", shellSort(arr));
