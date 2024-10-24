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

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        //  to find the lead node we do index-1;
        lead = lead.next;
        counter += 1;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
    }
  }

  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value,
      next: nextNode,
    };
  }
  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
  }
}

let list = new LinkedList(200);
list.appendNode(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.insertNode(2, 4000);
