/*
 understand solution with whiteboard

 sorting


*/

let data = [1, 3, 523, 53, 1, 3, 55, 3, 53, 1, 463, 3, 7, 8, 42];

for (i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);
