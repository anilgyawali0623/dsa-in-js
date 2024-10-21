console.log("sorting the array");

let data = [2, 3, 1, 3, 4, 5, 6, 7, 3, 12, 4, 5, 6, 2, 1, 34, 5, 51, 31];
let i;
for (i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j + 1];
      data[j + 1] = data[j];
      data[j] = temp;
    }
  }
}

console.log(data);
