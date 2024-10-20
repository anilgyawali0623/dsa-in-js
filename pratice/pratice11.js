let data = [3, 2, 42, 12, 4, 1, 5, 14];
let i, j, current;
for (i = 1; i < data.length; i++) {
  current = data[i];
  j = i - 1;
  while (j >= 0 && arr[j] > current) {
    data[j + 1] = data[j];
    j--;
  }
  data[j + 1] = current;
}
