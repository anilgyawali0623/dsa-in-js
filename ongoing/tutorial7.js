/*

 make three arrays
  use while loop to merge element

   comapre this logic wiht last one




*/

let data1 = [23, 43, 24, 15, 25, 65];
let data2 = [4, 5, 2, 4, 5, 2, 4, 4];
let data3 = [];
let d1 = 0,
  d2 = 0,
  d3 = 0;
while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d3++;
    d1++;
  } else {
    data3[d3] = data2[d2];
    d3++;
    d2++;

  }



}

while (d1< data1.length) {
  data3[d3] = data1[d1];
  d1++;
  d3++;
}

console.log(data3);
