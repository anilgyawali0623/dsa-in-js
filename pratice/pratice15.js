let data = [45, 82, 17, 63, 29, 94, 11, 56, 38, 70];
let i, j, midId;
for (i = 0; i < data.length; i++) {
  midId = i;
  for (j = i + 1; j < data.length; j++) {
    if (data[j] < data[midId]) {
      midId = j;
    }
  }
  let temp = data[i];
  data[i] = data[midId];
  data[midId] = temp;
}

console.log(data);
