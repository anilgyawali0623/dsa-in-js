/*

 reverse the array

*/

let data = [23, 4, 5, 2, 55, 60];
console.log(data);
let temp;
function customReverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
console.log(data);
