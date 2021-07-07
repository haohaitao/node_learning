/*
 * @Description  : promise
 * @Author       : pacino
 * @Date         : 2021-07-07 11:39:03
 * @LastEditTime : 2021-07-07 15:00:41
 * @LastEditors  : pacino
 */

const fs = require("fs");
// 创建 Promise 容器
// 1. 给别人一个承诺 I promise you.
console.log(1);
const p1 = new Promise((resolve, reject) => {
  console.log(2);
  fs.readFile("./data/a.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      console.log(3);
      resolve(data);
    }
  });
});

console.log(4);

p1.then((res) => {
  console.log("---success---", res);
}).catch((err) => {
  console.log("---err---", err);
});
