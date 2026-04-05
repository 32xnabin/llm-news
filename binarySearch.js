/**
 * Binary Search Algorithm Implementation
 * @param {Array} arr - The sorted array to search through
 * @param {*} target - The value to search for
 * @returns {number|null} - The index of the target if found, otherwise null
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);
console.log(`Target ${targetValue} found at index: ${result}`);
