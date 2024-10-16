/*
 underastand the queue
  understand enqueue and dequeue operation
   implement enqueue and dequeue for operations

*/

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
function display() {
  console.log(queue);
}
function front() {
    if(!isEmpty()){
         console.log(queue[0])
    }else{
          console.log("queue is already empty");
    }
}

 function rear(){
     if(!isEmpty()){
         console.log(queue[currentSize-1])
     } else{
         console.log("queue is already empty")
     }
 }
function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}
enqueue(2);
enqueue(20);
enqueue(30);
enqueue(40);

display();
dequeue();
dequeue();
dequeue();
dequeue();

display();
