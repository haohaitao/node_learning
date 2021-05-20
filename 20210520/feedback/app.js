/*
 * @Description  : application 应用程序
 * @Author       : pacino
 * @Date         : 2021-05-20 16:11:58
 * @LastEditTime : 2021-05-20 17:58:20
 * @LastEditors  : pacino
 */

// 把当前模块所有的依赖项都声明在文件模块上面
// public 整个目录中的资源都允许被访问

var http = require("http");
var fs = require("fs");

// 简写
http
  .createServer(function (req, res) {
    var url = req.url;
    console.log("---17---", url);
    if (url === "/") {
      fs.readFile("./views/index.html", function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.end(data);
      });
    } else if (url.indexOf("/public/") === 0) {
      fs.readFile("." + url, function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.end(data);
      });
    } else {
      res.setHeader("Content-Type", "text/plain;charset=utf-8;");
      fs.readFile("./views/404.html", function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.setHeader("Content-Type", "text/html;charset=utf-8;");
        res.end(data);
      });
    }
  })
  .listen(3000, function () {
    console.log("running...");
  });
