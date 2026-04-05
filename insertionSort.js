// Function to perform Insertion Sort on an array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

// Example usage
let exampleArray = [12, 11, 13, 5, 6];
console.log("Original array:", exampleArray);
insertionSort(exampleArray);
console.log("Sorted array:", exampleArray);
