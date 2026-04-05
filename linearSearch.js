// Linear Search Algorithm Implementation

/**
 * Performs a linear search to find the index of a target value in an array.
 * @param {Array} arr - The array to search through.
 * @param {*} target - The value to search for in the array.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
const numbers = [34, 7, 23, 32, 5, 62];
const targetValue = 5;
const indexFound = linearSearch(numbers, targetValue);

if (indexFound !== -1) {
    console.log(`Element found at index: ${indexFound}`);
} else {
    console.log('Element not found in the array.');
}
