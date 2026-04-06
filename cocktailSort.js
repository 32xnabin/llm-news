/**
 * Cocktail Sort (Bidirectional Bubble Sort)
 * Time: O(n²) | Space: O(1)
 * Improvement over Bubble Sort - sorts in both directions
 */

function cocktailSort(arr) {
  const n = arr.length;
  let swapped = true;
  let start = 0;
  let end = n - 1;

  while (swapped) {
    swapped = false;

    // Forward pass (left to right)
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) break;

    swapped = false;
    end--;

    // Backward pass (right to left)
    for (let i = end; i > start; i--) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }

    start++;
  }

  return arr;
}

// --- Example ---
const arr = [5, 1, 4, 2, 8, 0, 2];
console.log("Before:", arr);
console.log("After: ", cocktailSort(arr));
