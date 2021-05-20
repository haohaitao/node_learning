/*
 * @Description  : 写文件
 * @Author       : pacino
 * @Date         : 2021-05-13 14:29:56
 * @LastEditTime : 2021-05-13 14:34:27
 * @LastEditors  : pacino
 */
var fs = require("fs");

fs.writeFile(
  "./data/你好.md",
  "大家好，给大家介绍一下，我是nodejs",
  function (data, error) {
    console.log(data, "文件写入成功 ");
  }
);
