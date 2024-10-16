// let data = [];
// let currentSize = data.length;
// function push(newVal) {
//   data[currentSize] = newVal;
//   currentSize += 1;
// }

// push(233);
//  function pop(){
//      currentSize--;
//       data.length=currentSize;
//  }
//  console.log(data)
//  pop()
//   console.log(data)

class Stack {
  item = [];
  currentSize;
  constructor() {
    this.currentSize = this.item.length;
  }

  push(newVal) {
    this.item[this.currentSize] = newVal;
    this.currentSize++;
  }
  pop() {
    this.currentSize--;
    this.item.length = this.currentSize;
  }

  display() {
    console.log(this.item);
  }
}

st1 = new Stack();
st1.push(23);
st1.display();
st1.pop();
st1.display();
