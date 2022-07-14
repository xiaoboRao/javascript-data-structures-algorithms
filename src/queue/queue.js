class Queue {
  constructor() {
    this.items = []
  }
  enque(item) {
    this.items.push(item)
  }
  deque() {
    return this.items.shift() || ''
  }
  front() {
    return this.items[0] || ''
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length 
  }
  toString() {
    let result = ''
    this.items.forEach((item)=>{
      result = result + item + ' '
    })
    return result
  }
 }

 export default Queue
