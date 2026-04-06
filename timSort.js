/**
 * Tim Sort
 * Time: O(n log n) | Space: O(n)
 * Hybrid of Merge Sort and Insertion Sort
 * Used by Python's sorted() and Java's Arrays.sort() for objects
 */

const MIN_RUN = 32;

function timSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;

  // Sort individual runs
  for (let i = 0; i < n; i += MIN_RUN) {
    insertionSort(arr, i, Math.min(i + MIN_RUN - 1, n - 1));
  }

  // Merge runs
  for (let size = MIN_RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += size * 2) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + size * 2 - 1, n - 1);
      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
  }

  return arr;
}

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

function merge(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    arr[k++] = leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++];
  }

  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// --- Example ---
const arr = [5, 21, 7, 23, 19, 4, 15, 1, 8, 3];
console.log("Before:", arr);
console.log("After: ", timSort(arr));
