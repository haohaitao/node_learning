// function add(x, y) {
//   var ret
//   console.log(1)
//   setTimeout(() => {
//     console.log(2)
//     ret = x + y
//   }, 1000)
//   console.log(3)
// }

// console.log(add(10, 20))

/**
 * 拿到异步结果
 */
function add(x, y, callback) {
  console.log(1)
  setTimeout(() => {
    console.log(2)
    var ret = x + y
    callback(ret)
  }, 1000)
}

add(10, 20, (ret) => {
  console.log(ret)
})