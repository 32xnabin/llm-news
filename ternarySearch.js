/**
 * Ternary Search
 * Time: O(log₃ n) | Space: O(1)
 * Works on sorted arrays
 * Divides array into 3 parts instead of 2 (like Binary Search)
 */

function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid1 = Math.floor(left + (right - left) / 3);
    const mid2 = Math.floor(right - (right - left) / 3);

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) {
      right = mid1 - 1;
    } else if (target > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1;
}

// --- Example ---
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log("Array:", arr);
console.log("Search 7:", ternarySearch(arr, 7)); // 3
console.log("Search 15:", ternarySearch(arr, 15)); // 7
console.log("Search 100:", ternarySearch(arr, 100)); // -1
