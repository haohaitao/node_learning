let users = [
  { id: 1, name: '张三' },
  { id: 2, name: '张三' },
  { id: 3, name: '张三' },
  { id: 4, name: '张三' },
  { id: 5, name: '张三' },
  { id: 6, name: '张三' }
]

Array.prototype.myFind = function (conditionFunc) {
  for (let i = 0; i < this.length; i++) {
    if (conditionFunc(this[i], i)) {
      return this[i]
    }
  }
}

Array.prototype.myFindIndex = function (conditionFunc) {
  for (let i = 0; i < this.length; i++) {
    if (conditionFunc(this[i], i)) {
      return i
    }
  }
}

const ret = users.myFind(function (item, index) {
  return item.id === 4
})

const retIndex = users.myFindIndex(function (item, index) {
  return item.id === 4
})

console.log(ret, retIndex)