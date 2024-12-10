class Queue {
  constructor(size) {
    this.rear = -1;
    this.front = -1;
    this.item = new Array(size);
    this.maxSize = size;
    this.currentSize = 0;
  }
  enqueue(val) {
    if (this.currentSize != this.maxSize) {
      if (this.rear === this.maxSize - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.item[this.rear] = val;
      this.currentSize++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue(){
     if(this.currentSize!=0){
 this.item[this.front]=null;
  if(this.front === this.maxSize-1){
     this.front=0
  }else{
     this.front++;
  }
   this.currentSize--;
     } else{
       this.front=-1;
       this.rear=-1;
       console.log("queue is empty")
     }
  }
}
let queue = new Queue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue()
queue.dequeue()
queue.enqueue(6)
queue.dequeue()
queue.enqueue(7)
queue.enqueue(7)
queue.enqueue(7)


console.log(queue);
