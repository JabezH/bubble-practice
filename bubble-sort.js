
function bubbleSort(arr) {

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {

      let swapped = false;

       for (let j = 0; j < arr.length - 1; j++) {
      // If the current value is greater than its neighbor to the right
      if (arr[j] > arr[j + 1]) {
        // Swap those values
       let temp = arr[j]
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;       
      

      swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return
        }
    // Otherwise, repeat from the beginning
      }

      if (!swapped) {
        return arr;

  }
}

    return arr;

}

module.exports = bubbleSort;