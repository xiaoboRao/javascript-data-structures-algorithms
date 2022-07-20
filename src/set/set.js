class Set {

  constructor() {
    this.items = {}
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }

  remove(value) {
    if (!this.has(value)) return false
    delete this.items[value]
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.keys(this.items)
  }

  union(otherSet) {

    const unionSet = new Set()
    // add current set items into unionSet
    this.values().forEach((item) => {
      unionSet.add(item)
    })

    otherSet.values().forEach((item) => {
      unionSet.add(item)
    })

    return unionSet
  }

  intersection(otherSet) {

    const intersectionSet = new Set()
    // traverse the otherSet, find the element in both sets
    this.values((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })

    return intersectionSet
  }

  difference(otherSet) {

    const differenceSet = new Set()
    // if the element of current set is not included by otherSet, then add into differenceSet
    this.values().forEach((item) => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }

  subset(otherSet) {
    // find whether one item is not inclued by otherSet, if meet the condition, return true
    const result = this.values().some((item) => {
      return !otherSet.has(item)
    })
    // but we need the opposite result
    return !result
  }
}

export default Set
