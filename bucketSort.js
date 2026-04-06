/**
 * Bucket Sort
 * Time: O(n + k) avg, O(n²) worst | Space: O(n + k)
 * Best for: Uniformly distributed floating-point numbers
 */

function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (const num of arr) {
    const bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // Sort each bucket and concatenate
  const result = [];
  for (const bucket of buckets) {
    if (bucket.length > 0) {
      result.push(...bucket.sort((a, b) => a - b));
    }
  }

  return result;
}

// --- Example ---
const arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log("Before:", arr);
console.log("After: ", bucketSort(arr));
