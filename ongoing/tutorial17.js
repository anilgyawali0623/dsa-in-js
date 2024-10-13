/*
 understand logic to impleement stack with class

  make stack class
   make push and pop both function for operations
    test stack operation with console
     task for you
     

*/

class Stack {
  item = [];
  currentSize;
  maxSize;

  constructor(size) {
    console.log(" class is called inside the constructor");
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("stack is already empty");
    }
  }

  display() {
    console.log(this.item);
  }
}

st1 = new Stack();
// st1.push(123);
st1.push(123);
st1.push(123);

st1.display();
st1.pop()
st1.display();
