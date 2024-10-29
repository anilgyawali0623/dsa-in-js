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
  traversing() {
    let counter = 0;
    let currentNode = this.head; // first node

    while (counter < this.size) {
      currentNode = currentNode.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
    }
  }

 
}

let list = new List(23);
list.appendNode(200);
list.appendNode(400);

console.log(list);
