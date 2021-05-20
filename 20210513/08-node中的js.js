/*
 * @Description  :  node中的js
 * @Author       : pacino
 * @Date         : 2021-05-13 16:32:45
 * @LastEditTime : 2021-05-13 17:04:09
 * @LastEditors  : pacino
 */
var os = require("os");

//获取当前及其的cpu信息
console.log(os.cpus());

//获取当前机器的内存
console.log(os.totalmem());
