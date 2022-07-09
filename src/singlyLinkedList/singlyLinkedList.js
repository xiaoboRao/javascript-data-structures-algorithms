class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

export default class LinkedList {

  constructor(){
    this.length = 0
    this.head = null
  }
  // add node to the tail of linkedList
  append(val) {
    const node = new Node(val)
    if(this.length === 0) {
      this.head = node
      this.length++
      return
    }
    let currentNode = this.head
    while(currentNode.next){
        currentNode = currentNode.next
      }
    currentNode.next = node
    this.length++

  }
  // return the data of node at index position
  getData(index) {
    // limit the index between 0 ~ this.length - 1
    if(index > this.length - 1 || index < 0){
      return null
    }
    let currentNode = this.head
    let count = 0
    // find the node is the index of linkedlist
    while(count < index ){
      count++
      currentNode = currentNode.next
    }
    return currentNode.val
  }
  // return the index of the val from linkedList
  indexOf(val) {
    // when the linkedList length is 0, return -1
    if(this.length === 0) {
      return -1
    }
    let currentNode = this.head
    let index = 0
    // traversal the linkedList
    while(currentNode) {
      if(currentNode.val === val){
        // when node.val equals the val then break the loop
        break;
      }
      // record the node's current position
      index ++
      currentNode = currentNode.next
    }
    // if the currentNode is null,because val is not exist,  currentNode is a node, then,it's val equals val
    return currentNode ? index : -1
  }
  // insert the val to the linkedList , the position is index
  insert(index, val) {
    // create node
    const node = new Node(val)
    // if index is greater than the LinedList' size just appen the node into the last node
    if(index > this.length - 1) {
      this.append(val)
      return
    }
    // if the index < 0 append node into the first node
    if( index <= 0) {
      this.prepend(val)
      return
    }
    let currentNode = this.head
    let count = 0
    // find target node's previous node
    while(count < index - 1) {
      count++
      currentNode = currentNode.next
    }
    // save the node to which currentNode.next point
    let tempNode = currentNode.next
    // let the new node next point to currentNode.next node
    node.next = tempNode
    // last  currentNode.next  point to the new node , so the new node inserted to the linkedlist
    currentNode.next = node
    this.length++
  }
  // if the linkedList is empty
  isEmpty() {
    return this.length === 0
  }
  // add the node as the first node in the linkedList
  prepend(val) {
    const node = new Node(val);
    // if the head is null , the new node becomes head
    // else just let  node.next point to the head , and new node becomes head
    if(this.head){
      node.next = this.head
      this.head = node
      this.length++
    } else {
      this.head = node
      this.length++
    }
  }
  // remove the node at the index position return the removed node's val
  removeAt(index) {
    // limit the index between 0 ~ this.length - 1
    if(index > this.length - 1  || index < 0){
      return null
    }
    // the situation that index is 0
    if(index === 0) {
      // save the head val
      const val = this.head.val
      // let the head point to the head.next node, the result is same as removing current node
      this.head = this.head.next
      this.length--
      return val
    }

    let previousNode = this.head
    let count = 0
    // find the previous node is the index of linkedlist
    while(count < index - 1 ){
      count++
      previousNode = previousNode.next
    }
    // remove the target node
    let currentNode = previousNode.next
    previousNode.next = currentNode.next
    // dont forget decrease the length
    this.length--
    return currentNode.val

  }
  // reverse the linkedList
  reverse() {

    // if the linkedlist is null or just has one node
    if(!this.head || this.length === 1) {
      return this.head
    } else {

      let firstNode = this.head
      let secondNode = this.head.next
      firstNode.next = null
      // secondNode is the last node
      while(secondNode.next) {
        // save the node that directed by secondNode
        let tempNode = secondNode.next
        // reverse the direction between firstNode and secondNode
        secondNode.next = firstNode
        // let second node becomes the firstNode , so we can change the direction one by one
        firstNode = secondNode
        // let secondNode.next node becomes the second node
        secondNode = tempNode
      }
      // dont forget let the secondNode ponit the firstNode
      secondNode.next = firstNode
      // at the last head node is the  secondNode also is the last node in the origin Linkedlist
      this.head = secondNode
      return this
    }

  }
  // return the linkedList's length
  size() {
    return this.length
  }
  // transform the linkedList into string
  toString() {
      let currentNode = this.head
      let result =''
      // traversal the linkedlist until the currentNode is null
      while(currentNode){
        result = result + '  ' + currentNode.val
        currentNode = currentNode.next
      }
      return result
  }
  // update the data at the index position return the updated node
  update(index, val) {
    // limit the index between 0 ~ this.length - 1
    if(index < 0 || index > this.length - 1) {
      return null
    }
    if(this.length === 0 ) {
      return null
    }
    let currentNode = this.head
    let count = 0
    // traversal the linkedList, find the target node
    while(count < index) {
      // record the node's current position
      count ++
      currentNode = currentNode.next
    }
    currentNode.val = val
    return currentNode
  }
}
