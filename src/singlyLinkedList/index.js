import singlyLinkedList from './singlyLinkedList'


const linkedList = new singlyLinkedList()

linkedList.append(2)
linkedList.append(1)

linkedList.append(12)

// linkedList.prepend(10)
// linkedList.prepend(13)

// linkedList.insert(1, 100)

// console.log(linkedList.removeAt(0))
// console.log(linkedList.indexOf(1))
// console.log(linkedList.getData(-1))
// console.log(linkedList.isEmpty())
// console.log(linkedList.size())
console.log(linkedList.update(-1,111))
console.log(linkedList.toString())
// console.log(linkedList.reverse().toString())
// console.log(linkedList.toString())
