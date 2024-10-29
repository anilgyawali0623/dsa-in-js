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
    let lead = this.head;
    while (counter < this.size) {
      console.log(lead);
      lead = lead.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let currentNode = this.head;
    if (index === this.size) {
      this.head = this.head.next;
    }
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
      console.log(currentNode);
    }
    let newNode = currentNode.next.next;
    currentNode.next = newNode;
  }
  insertNode(data, index) {
    let counter = 1;
    let lead = this.head;
    while (counter < index) {
      lead = lead.next;
      console.log(lead);
      counter++;
    }

    let newNode = lead.next;

    lead.next = {
      value: data,
      next: newNode,
    };
  }
  searchNode(data) {
    let result = undefined;
    let loop = true;
    let lead = this.head;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        result = lead;
        loop = false;
      }
    }
  }
}

let linkedList = new LinkedList(10);
linkedList.appendNode(20);
linkedList.appendNode(30);
linkedList.appendNode(40);
linkedList.appendNode(50);
linkedList.insertNode(700, 2);
// linkedList.traversing();
// linkedList.deleteNode(3)
// console.log(linkedList);
console.log(linkedList);
