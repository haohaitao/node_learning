/*
 * @Description  : express入口
 * @Author       : pacino
 * @Date         : 2021-06-08 16:09:06
 * @LastEditTime : 2021-06-08 17:56:20
 * @LastEditors  : pacino
 */
/**
 *  1、安装
 *  2、引包
 */

var express = require("express");

// 2、创建你服务器应用程序
// 也就是原来的 heep.createServer

var app = express();

// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
// 在 express 中开放资源就是一个 API 的事儿
app.use("/public/", express.static("./public/"));

// Express 为 Response 响应对象提供了一个方法： render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的师徒文件放在 views 目录中

// 配置使用 art-template 模板引擎
// 第一个参数表示，当渲染以 .art 结尾的文件时，使用art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这哭不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template

app.engine("html", require("express-art-template"));

// 当服务器收到 get 请求 / 的时候，执行回调处理函数
app.get("/", function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="ur=tf-8" />
            <title>document</title>
        </head>
        <body>
            <h1> hello </h1>
        </body>
    </html>
  `);
});

app.get("/404", function (req, res) {
  res.render("404.html");
});

app.get("/about", function (req, res) {
  // 在Express 中可以直接通，req.query 来拿到查询字符串的参数
  console.log(req.query);
  res.send("你好，我是关于页面21");
});

// 相当于 server.listen
app.listen(3000, function () {
  console.log("app is running at port 3000~");
});
