/**
 * Comb Sort
 * Time: O(n²) worst, O(n log n) avg | Space: O(1)
 * Improvement over Bubble Sort with shrinking gap
 */

function combSort(arr) {
  const n = arr.length;
  let gap = n;
  const shrink = 1.3;
  let swapped = true;

  while (gap > 1 || swapped) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) gap = 1;

    swapped = false;

    for (let i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

// --- Example ---
const arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0];
console.log("Before:", arr);
console.log("After: ", combSort(arr));
