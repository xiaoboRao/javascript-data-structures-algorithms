import PriorityQueue from "./priorityQueue"

const priorityQueue = new PriorityQueue()


priorityQueue.enqueue('A', 10)
priorityQueue.enqueue('B', 15)
priorityQueue.enqueue('C', 11)
priorityQueue.enqueue('D', 20)
priorityQueue.enqueue('E', 18)
console.log(priorityQueue.items)

priorityQueue.dequeue()
priorityQueue.dequeue()
console.log(priorityQueue.items)

console.log(priorityQueue.isEmpty())

console.log(priorityQueue.size())

console.log(priorityQueue.toString())
