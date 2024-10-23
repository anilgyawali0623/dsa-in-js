class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
 let list= new LinkedList(400);
  list.appendNode(300)
  list.appendNode(100)
  list.appendNode(200)
  list.appendNode(500)

   console.log(list)