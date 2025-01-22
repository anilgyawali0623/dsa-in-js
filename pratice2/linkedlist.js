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
  }

   traversing(){
     let counter=0;
     let currentNode= this.head;
      while(counter<this.size){
          currentNode=currentNode.next;
          counter++;

      }
   }
 deletingNode(index){
     let counter=1;
     let lead= this.head;
      if(index===1){
     this.head= this.head.next;
      }else{

          while(counter< index-1){
              lead=lead.next;
              counter++;
            }
  let nextNode= lead.next.next;
   lead.next= nextNode;

        }
 }

}
