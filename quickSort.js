/**
 * Quick Sort
 * Time: O(n log n) avg, O(n²) worst | Space: O(log n)
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];

  for (const item of arr) {
    if (item < pivot) left.push(item);
    else if (item > pivot) right.push(item);
    else middle.push(item);
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// --- Example ---
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Before:", arr);
console.log("After: ", quickSort(arr));
