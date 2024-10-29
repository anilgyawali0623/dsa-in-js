// make class for bst
// define empty tree
// bst is empty
//make node class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  // by default root is null

  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }
}
