class Node {
  constructor(val) {
    this.left = null
    this.right =null
    this.val = val
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // find the successor node, means find the min value begin from target node's right
  getSuccessor(delNode) {

    // save the successor
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    // find the right tree of children in while loop
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // if the successor is the delNode's right
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
  insert(val) {
    const newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return
    }

    let currentNode = this.root
    // in while loop to find the last node
    while(true) {
      // when currentNode.right is null and currentNode.val < val , currentNode is our target
      if(currentNode.val < val) {
        if(!currentNode.right) {
          currentNode.right = newNode
          return newNode
        }
        // still owns right node , continue to looping
        currentNode = currentNode.right
      } else if (currentNode.val > val) {
        if(!currentNode.left) {
          currentNode.left = newNode
          return newNode
        }
        currentNode = currentNode.left
      } else {
        // if the currentNode.val equals the val it is dumplicated data, can not insert into tree
        return
      }
    }
  }
  remove(val) {
    let currentNode = this.root;
    let parentNode = null;
    // the removed node is default left child node
    let isLeftChild = true;
    // while looping is to find parentNode isLeftChild and currentNode
    while (currentNode.val !== val) {
      parentNode = currentNode;
      // if val is less than node.val，find the left child
      if (val < currentNode.val) {
        isLeftChild = true;
        currentNode = currentNode.left;
      } else {  // otherwise find the right child
        isLeftChild = false;
        currentNode = currentNode.right;
      }
      // not find same val node, return false
      if (currentNode === null) {
        return false;
      }
    }
    // 1. the situation that target node is leaf node
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
      // 2. target node have one child node
    } else if (currentNode.right === null) { // currentNode only has left node
      //-- 2.1. currentNode only has right node
      //---- 2.1.1. currentNode equals root
      //---- 2.1.2. parentNode.left equals currentNode
      //---- 2.1.3. parentNode.right equals currentNode

      if (currentNode === this.root) {
        this.root = currentNode.left;
      } else if (isLeftChild) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }

    } else if (currentNode.left === null) { // currentNode only has right node
      //-- 2.2. currentNode only has right node
      //---- 2.1.1. currentNode equals root
      //---- 2.1.1. parentNode.left equals currentNode
      //---- 2.1.1. parentNode.right equals currentNode

      if (currentNode === this.root) {
        this.root = currentNode.right;
      } else if (isLeftChild) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }
      // 3. the target node we want to delete has 2 child nodes
    } else {
      // 1. find the successor node
      let successor = this.getSuccessor(currentNode);
      // 2. if  currentNode is root node
      if (currentNode === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }
      // 3、change successor left Node into the left of node that we want to remove
      successor.left = currentNode.left;
    }
  }
  search(val) {
    if(!this.root) return null
    let currentNode = this.root
    // if the val is greater than node's val, then  traversal the right branch
    // if the val is less than node's val, then  traversal the left branch
    // otherwise val equals node's val return this node
    while(currentNode) {
      if(currentNode.val < val) {
        currentNode = currentNode.right
      } else if (currentNode.val > val) {
        currentNode = currentNode.left
      } else {
        return currentNode
      }
    }
    // not find same val node ,then return null
    return null
  }
  // root -> left child -> right child
  preorderTraversal() {
    const result = []
    this.preorderTraversalNode(this.root, result)
    return result
  }
  preorderTraversalNode(node, result) {
    if(!node) return result
    result.push(node.val)
    this.preorderTraversalNode(node.left, result)
    this.preorderTraversalNode(node.right, result)
  }

  // left child -> root -> right child
  inorderTraversal() {
    const result = []
    this.inorderTraversalNode(this.root, result)
    return result
  }
  inorderTraversalNode(node, result) {
    if(!node) return result
    this.inorderTraversalNode(node.left, result)
    result.push(node.val)
    this.inorderTraversalNode(node.right, result)
  }
  // left child -> right child -> root
  postorderTraversal() {
    const result = []
    this.postorderTraversalNode(this.root, result)
    return result
  }
  postorderTraversalNode(node, result) {
    if(!node) return result
    this.postorderTraversalNode(node.left, result)
    this.postorderTraversalNode(node.right, result)
    result.push(node.val)
  }
}

export default BinarySearchTree
