// selection sort

let items = [2, 22, 4, 6, 2, 4, 5, 56, 23, 52];
function selectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

selectionSort(items);
console.log(items);
