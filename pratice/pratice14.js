// let data = [1, 2, 3, 4, 5];
// let temp;
// function reverse(start, end) {
//   if (start <= end) {
//     temp = data[start];
//     data[start] = data[end];
//     data[end] = temp;
//     reverse(start+1, end-1)
//   }
// }

// reverse(0, data.length-1);
//  console.log(data)

// pop and push

// let data = [1, 2, 3, 4, 5];
// let position = 3;
// let value = 42;
// data.length +=1;
// for(let i=data.length-1;i>position;i--){
//     data[i]=data[i-1];

// }

// data[position]=value
//  console.log(data)

let data = [];
let size = 5;
let currentSize = data.length;
function pop(value) {
  if (currentSize != size) {
    data[currentSize] = value;
    currentSize++;
  } else {
    console.log("array size is full");
  }
}

function push() {
  if (currentSize != 0) {
      currentSize--;
    data.length = currentSize;
  } else {
    console.log("array is empty");
  }
}
pop(12);
pop(13);
pop(14);
pop(15);
pop(16);
push()
console.log(data);

 