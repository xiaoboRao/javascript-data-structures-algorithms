import Stack from "./stack"

const stack = new Stack()
stack.push(2)
stack.push(3)

stack.push(1)
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.toString());


