import Queue from "./queue"
const queue = new Queue()
queue.enque(1)
queue.enque(2)

console.log(queue.deque());
console.log(queue.deque());
console.log(queue.isEmpty());
queue.enque(3)
queue.enque(2)
console.log(queue.size());
console.log(queue.toString());






