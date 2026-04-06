/**
 * Counting Sort
 * Time: O(n + k) where k is range | Space: O(k)
 * Best for: Small range of integers
 */

function countingSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = new Array(range).fill(0);
  const output = new Array(arr.length);

  // Count occurrences
  for (const num of arr) {
    count[num - min]++;
  }

  // Cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}

// --- Example ---
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Before:", arr);
console.log("After: ", countingSort(arr));
