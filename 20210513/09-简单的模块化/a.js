/*
 * @Description  : a.js
 * @Author       : pacino
 * @Date         : 2021-05-13 17:06:53
 * @LastEditTime : 2021-05-13 17:21:35
 * @LastEditors  : pacino
 */

// 模块作用于
// 外部访问不到内部
// 内部访问不到外部
// 想使用其他模块的功能，需要require导入，其他模块的功能exports导出
console.log("a start");

var bExports = require("./b.js");

console.log(bExports.foo);
console.log("a end");
