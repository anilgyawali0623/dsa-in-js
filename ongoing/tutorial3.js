let data = [1, 3, 34, 4, 5];
let newVal = 23;
let position = 2;
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i === position) {
      data[i] = newVal;
    }
  }
}
console.log(data);
