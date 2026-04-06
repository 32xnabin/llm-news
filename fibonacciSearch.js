/**
 * Fibonacci Search
 * Time: O(log n) | Space: O(1)
 * Works on sorted arrays only
 * Alternative to Binary Search using Fibonacci numbers
 */

function fibonacciSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  // Initialize Fibonacci numbers
  let fib2 = 0; // (m-2)'th Fibonacci
  let fib1 = 1; // (m-1)'th Fibonacci
  let fib = fib1 + fib2; // m'th Fibonacci

  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  let offset = -1;

  while (fib > 1) {
    const i = Math.min(offset + fib2, n - 1);

    if (arr[i] < target) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      return i;
    }
  }

  if (fib1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}

// --- Example ---
const arr = [2, 3, 4, 10, 40, 52, 78, 91];
console.log("Array:", arr);
console.log("Search 10:", fibonacciSearch(arr, 10)); // 3
console.log("Search 78:", fibonacciSearch(arr, 78)); // 6
console.log("Search 100:", fibonacciSearch(arr, 100)); // -1
