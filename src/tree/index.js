import BinarySearchTree from "./tree"


//      19
//   16    22
// 13 18  20 25
const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(19)
binarySearchTree.insert(16)
binarySearchTree.insert(22)
binarySearchTree.insert(13)
binarySearchTree.insert(18)
binarySearchTree.insert(20)
binarySearchTree.insert(25)

// console.log(binarySearchTree);
// console.log(binarySearchTree.search(22));
// console.log(binarySearchTree.remove(19));
console.log(binarySearchTree);
console.log(binarySearchTree.preorderTraversal());
console.log(binarySearchTree.inorderTraversal());
console.log(binarySearchTree.postorderTraversal());





