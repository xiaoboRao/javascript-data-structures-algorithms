import DoublyLinkedList from "./doublyLinkedList"

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append(2)
doublyLinkedList.append(5)
doublyLinkedList.append(11)
doublyLinkedList.append(21)

// doublyLinkedList.append(31)


// doublyLinkedList.prepend(11)
// doublyLinkedList.prepend(2132)


// doublyLinkedList.update(0, 666)
// doublyLinkedList.insert(1,23)
// doublyLinkedList.removeAt(2)

// console.log(doublyLinkedList.indexOf(31))
// console.log(doublyLinkedList.getData(4));

console.log(doublyLinkedList.forwardToString());
console.log(doublyLinkedList.backTostring());

