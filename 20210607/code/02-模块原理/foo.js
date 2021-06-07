/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-07 17:21:39
 * @LastEditTime : 2021-06-07 17:43:30
 * @LastEditors  : pacino
 */

// 在 node 中，每个模块内部有一个自己的 module 对象
// 该 module 对象中，有一个成员叫：exports 也是一个对象
// 如果你需要对外导出成员，只需要把导出的成员挂载到 modules 上面

// var module = {
//     exports: {
//         foo: 'bar'
//     }
// }

exports.a = 123;

exports = {};

console.log(exports);

exports.foo = "bar";

console.log("module..", module.exports);

module.exports.b = 456;

// 谁来 require 我，谁就得到 module.exports
// 默认在代码的最后有一句
// return module.exports
