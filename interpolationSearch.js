// Function to perform interpolation search on a sorted array
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the potential position using linear interpolation formula
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const targetValue = 50;
const result = interpolationSearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index: ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
