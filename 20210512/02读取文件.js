/*
 * @Description  : 读取文件
 * @Author       : pacino
 * @Date         : 2021-05-12 17:52:10
 * @LastEditTime : 2021-05-13 10:56:47
 * @LastEditors  : pacino
 */
// 使用require方法加载 fs 核心模块
var fs = require("fs");

fs.readFile("./data/hello.txt", function (error, data) {
  console.log(data.toString());
});
