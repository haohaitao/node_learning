/*
 * @Description  : 读取目录
 * @Author       : pacino
 * @Date         : 2021-05-20 11:06:50
 * @LastEditTime : 2021-05-20 11:08:36
 * @LastEditors  : pacino
 */
var fs = require("fs");

fs.readdir("D:/all_projects/20210519/app/www", function (err, files) {
  if (err) {
    return console.log("目录不存在");
  }
  console.log(files);
});
