import Queue from "./queue"
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(3)
queue.enqueue(2)
console.log(queue.size());
console.log(queue.toString());






