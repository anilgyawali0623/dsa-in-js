/*

 push and pop in the array

 
 

*/

let data = [];
let currentSize = data.length;
let maxValue = 5;
function push(newVal) {
  if (!(currentSize >= 5)) {
    data[currentSize] = newVal;
    currentSize += 1;
  } else {
    console.log("stack is full");
  }
}
function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.log(" stack is empty");
  }
}

push(20);
push(20);
push(20);
push(20);
push(20);
pop();
pop();
pop();
pop();
pop();

pop();

console.log(data);
