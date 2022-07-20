import Set from "./set"

const set = new Set()

// set.add('abc')
// set.add('abc')
// set.add('123')
// set.add('zxc')
// console.log(set)

// console.log(set.has('123'))
// console.log(set.has('456'))

// set.remove('abc')
// console.log(set)

// console.log(set.size())

// console.log(set.values())

// set.clear()
// console.log(set.values())


const setA = new Set()
setA.add('111')
setA.add('222')
setA.add('333')

const setB = new Set()
setB.add('111')
setB.add('222')
setB.add('bbb')
setB.add('ccc')


console.log(setA.union(setB).values())

console.log(setA.difference(setB).values())

console.log(setA.subset(setB))
