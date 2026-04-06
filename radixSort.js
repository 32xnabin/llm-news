/**
 * Radix Sort
 * Time: O(d * n) where d is max digits | Space: O(n + k)
 * Best for: Large integers with fixed digit length
 */

function radixSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSortByDigit(arr, exp);
    exp *= 10;
  }

  return arr;
}

function countingSortByDigit(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// --- Example ---
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Before:", arr);
console.log("After: ", radixSort(arr));
