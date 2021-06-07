/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-07 14:36:52
 * @LastEditTime : 2021-06-07 15:15:59
 * @LastEditors  : pacino
 */
var url = require("url");

var obj = url.parse("/pinglun?name=物管费我汪峰阿萨德人额放入", true);

console.log(obj);
console.log(obj.query);
