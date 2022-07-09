
class Node {
  constructor(val) {
    this.val = val
    this.previous = null
    this.next = null
  }
}

export default class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  append(val) {
    const newNode = new Node(val)
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return
    }
    let currentNode = this.head
    // find the last node
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
    newNode.previous = currentNode
    this.tail = newNode
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
  // if the linkedList is empty
  isEmpty() {
    return this.length === 0
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
  insert(index, val) {
    const newNode = new Node(val)
    if(index > this.length - 1) {
      this.append(val)
      return true
    }
    if(index <= 0) {
      this.prepend(val)
      return true
    }
    let currentNode = this.head
    let count = 0
    // find target node's previouse node
    while(count < index - 1) {
      count++
      currentNode = currentNode.next
    }
    // find the currentNode next node
    const tempNode = currentNode.next
    // let currentNode next point to the newNode
    currentNode.next = newNode
    // let newNode previous point to the currentNode
    newNode.previous = currentNode
    // newNode next point to tempNode
    newNode.next = tempNode
    // if the  tempNode is not null, then tempNode previous point to the  newNode
    this.length++
    if(tempNode) {
      tempNode.previous = newNode
    }
    return true
  }
  prepend(val) {
    const newNode = new Node(val)
    // if the linkedList is empty
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return
    }
    // let newNode.next point to the head
    newNode.next = this.head
    // let the head.previous point to the newNode
    this.head.previous = newNode
    // newNode become head
    this.head = newNode
    // dont forget length + 1
    this.length++
  }
  removeAt(index) {
    // if the linkedList is empty
    if(this.length === 0) {
      return null
    }
    // when index is beyond the 0 ~ this.length - 1
    if(index < 0 || index > (this.length - 1)) {
      return null
    }
    // when linkedList just own 1 node
    else if(this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return this
    } else {
      // remove the head node
      if(index === 0) {
        const currentNode = this.head
        this.head = currentNode.next
        currentNode.next = null
        this.head.previous = null
        this.length--
        return this
        // remove the tail node
      } else if (index === this.length - 1) {
        const currentNode = this.tail
        this.tail = currentNode.previous
        this.tail.next = null
        currentNode.previous = null
        this.length--
        return this
        // this is situation that linkedList owns at least 3 nodes, and index is between 0 ~ this.length - 1
      } else {
        let previousNode = this.head
        let count = 0
        // find the previuos node ahead of the target node
        while(count < index - 1 ) {
          count++
          previousNode = previousNode.next
      }
          // swap the position
          const currentNode = previousNode.next
          previousNode.next = currentNode.next
          currentNode.next.previous = previousNode
          // dont forget set the currentNode next and previous to be null
          currentNode.next = null
          currentNode.previous = null
          this.length--
          // at last tail node is previousNode.next
          return this
      }
    }
  }
  // return the linkedList's length
  size() {
    return this.length
  }
  // transform the linkedList into string
  forwardToString() {
      let currentNode = this.head
      let result =''
      // traversal the linkedlist until the currentNode is null
      while(currentNode){
        result = result + '  ' + currentNode.val
        currentNode = currentNode.next
      }
      return result
  }
  // return the string formed by the node val back to head
  backTostring() {
    let currentNode = this.tail
      let result =''
      // traversal the linkedlist until the currentNode is null
      while(currentNode){
        result = result + '  ' + currentNode.val
        currentNode = currentNode.previous
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
