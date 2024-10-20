// insertion sort

let arr = [2, 9, 4, 3, 15, 11, 16];
function insertionSort(arr) {
  let i, current, j;
  for (i = 1; i < arr.length; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

insertionSort(arr);
