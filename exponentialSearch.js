/**
 * Exponential Search
 * Time: O(log n) | Space: O(1)
 * Works on sorted arrays
 * Best for: Unbounded/infinite sorted arrays
 */

function exponentialSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  if (arr[0] === target) return 0;

  // Find range for binary search
  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  // Binary search in found range
  const left = Math.floor(i / 2);
  const right = Math.min(i, n - 1);

  return binarySearchInRange(arr, target, left, right);
}

function binarySearchInRange(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// --- Example ---
const arr = [3, 5, 7, 9, 10, 14, 18, 21, 25];
console.log("Array:", arr);
console.log("Search 14:", exponentialSearch(arr, 14)); // 5
console.log("Search 3:", exponentialSearch(arr, 3)); // 0
console.log("Search 100:", exponentialSearch(arr, 100)); // -1
