class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
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
    let currentNode = this.head;

    while (counter < this.size) {
      currentNode = currentNode.next;
      counter++;
    }
  }
}

let list = new LinkedList(200);
