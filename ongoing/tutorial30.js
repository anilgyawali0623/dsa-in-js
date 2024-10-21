// linked list
// node is in the form of the object

// first make the head which is basically an object
// value and next
// value ma value hunxa next ma address hunxa

class List {
  constructor(data) {
    this.head = {
      next: null,
      value: data,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
}

let list = new List(23);
list.appendNode(200);
list.appendNode(400);

console.log(list);
