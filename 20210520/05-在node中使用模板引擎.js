/*
 * @Description  : 在node中使用模板引擎
 * @Author       : pacino
 * @Date         : 2021-05-20 11:46:15
 * @LastEditTime : 2021-05-20 14:57:45
 * @LastEditors  : pacino
 */

// art-template 不仅可以在浏览器使用，也可以在 node 中使用

// 安装&使用:
// 1.npm install art-template
// 该命令在哪块执行就会把包下载到哪里
// 2.在需要使用的文件模块中加载 art-template
// 只需要使用 require 方法加载就可以了：require('art-template')
// 3.差文档，使用模板引擎的 API

// 在 node 中使用 art-template 模板引擎
// 模板引擎最早诞生于服务器领域，后来才发展到了前端

var fs = require("fs");
var template = require("art-template");

fs.readFile("./tpl.html", function (err, data) {
  if (err) {
    return console.log("读取文件失败了");
  }
  var ret = template.render(data.toString(), {
    name: "Jack",
    age: 18,
    province: "北京市",
    hobbies: ["写代码", "唱歌", "打游戏"],
  });
  console.log(ret);
});
// 这里不是浏览器
