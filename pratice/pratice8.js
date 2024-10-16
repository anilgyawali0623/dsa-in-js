let queue = [];
let currentSize = queue.length;
let maxSize = 5;
function enqueue(newValue) {
  if (currentSize >= maxSize) {
    console.log("queue is full");
  } else {
    queue[currentSize] = newValue;
    currentSize++;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("queue is empty");
  }
}

function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}

 function front(){
     if(!isEmpty()){
         console.log(" queue is already empty")
     }
 }
