// circular queue
class Queue {
  constructor(size) {
    this.max = size;
    this.item = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(val) {
    if (this.currentSize != this.max) {
      if (this.rear === this.max - 1) {
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

  dequeue() {
    if (this.currentSize != 0) {
      this.item[this.front] = null;

      if (this.front === this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
    } else {
      this.front = -1;
      this.rear = -1;
      console.log("queue is empty");
    }
  }
}

let queue = new Queue(5);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);

console.log(queue);

queue.dequeue();
console.log(queue);