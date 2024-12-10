// class Stack {
//   item = [];
//   currentSize;
//   maxSize;

//   constructor(size) {
//     console.log(" class is called inside the constructor");
//     this.maxSize = size;
//     this.currentSize = this.item.length;
//   }

//   push(newVal) {
//     if (this.currentSize >= this.maxSize) {
//       console.log(" stack si full");
//     } else {
//       this.item[this.currentSize] = newVal;
//       this.currentSize += 1;
//     }
//   }
//   pop() {
//     if (this.currentSize > 0) {
//       this.currentSize--;
//       this.item.length = this.currentSize;
//     } else {
//       console.log("stack is alreay empty");
//     }
//   }

//    display(){
//      console.log(this.item)
//    }
// }
