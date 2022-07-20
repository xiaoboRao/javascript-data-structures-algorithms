class QueueElement {
  constructor(item, priority) {
    this.item = item
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(item, priority) {
    const queueElement = new QueueElement(item, priority)

    if(this.items.length === 0) {
      this.items.push(queueElement)
      return
    }

    let added = false
    // traverse the items
    for (let index = 0; index < this.items.length; index++) {
      // find the item position according to the priority
      if(priority < this.items[index].priority) {
        this.items.splice(index, 0, queueElement)
        added = true
        // when insert the item into items, exit the if statement
        break
      }
    }
    // when not find the item in the loop of items, meams item's priority is lowest, so call push method
    if(!added) {
      this.items.push(queueElement)
    }
  }

  dequeue() {
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
    this.items.forEach((queueElement)=>{
      result = result + queueElement.item + '-' + queueElement.priority + ' '
    })
    return result
  }
 }

 export default PriorityQueue
