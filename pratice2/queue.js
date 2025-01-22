class CircularQueue {
  //  define all the values here

  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.rear = -1;
    this.front = -1;
  }
  isEmpty() {
    return this.front === -1;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log("queue is full cannot insert more values");
      return false;
    }
    // while inserting if the front is -1 make it 0
    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size; // this is done to increment the rear

    this.queue[this.rear] = val;
    return true;
  }
}

   const queue= new CircularQueue(4)
   queue.enqueue(23)
   queue.enqueue(23)
   queue.enqueue(23)
   queue.enqueue(23)


    console.log(queue)