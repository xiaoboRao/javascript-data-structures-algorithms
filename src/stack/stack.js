class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    if(this.items.length === 0) {
      return new Error('Stack is empty')
    }
    return this.items.pop()
  }
  peek() {
    if(this.items.length === 0) {
      return new Error('Stack is empty')
    }
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    let result = ''
    this.items.forEach((item) => {
      result = result + item + ' '
    })
    return result
  }
}
export default Stack
