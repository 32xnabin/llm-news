/**
 * Jump Search
 * Time: O(√n) | Space: O(1)
 * Works on sorted arrays
 * Jumps ahead by fixed steps instead of checking all elements
 */

function jumpSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  // Find the block where target may be
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  // Linear search in the block
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  return arr[prev] === target ? prev : -1;
}

// --- Example ---
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log("Array:", arr);
console.log("Search 55:", jumpSearch(arr, 55)); // 10
console.log("Search 1:", jumpSearch(arr, 1)); // 1 or 2
console.log("Search 1000:", jumpSearch(arr, 1000)); // -1
