/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-07 14:36:52
 * @LastEditTime : 2021-06-07 17:11:22
 * @LastEditors  : pacino
 */
const querystring = require("querystring"); // 引用querystring
var obj = querystring.parse(
  "/pinglun?name=物管费我汪峰阿萨德人额放入".split("?"[1])
);

console.log(obj);
console.log(obj.query);
