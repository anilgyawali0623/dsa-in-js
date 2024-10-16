let data = [1, 2, 3, 4, 5];
console.log(data);

// for (let i = 0; i < Math.floor(data.length / 2); i++) {

//       let temp=data[i];
//       data[i]=data[data.length-1-i]
//       data[data.length-1-i]= temp
// }

//  console.log(data)

// reverse the string using the recursion fuction
function customReverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
