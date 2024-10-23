// insertion sort

let arr = [2, 1, 9, 4, 3, 15, 11, 16];

for (let i = 1; i < arr.length; i++) {
  let j = i - 1;
  let current = arr[i];
  while (j >= 0 && current < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}
console.log(arr);
