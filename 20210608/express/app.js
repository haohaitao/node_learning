/*
 * @Description  : express入口
 * @Author       : pacino
 * @Date         : 2021-06-08 16:09:06
 * @LastEditTime : 2021-06-09 11:17:48
 * @LastEditors  : pacino
 */
/**
 *  1、安装
 *  2、引包
 */

var express = require("express");

// 已弃用，可直接使用 express 调 body-parser 的api
// var bodyParser = require("body-parser");
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

// 配置解析
// bodyParser 已弃用，直接使用 express 调 body-parser 的api
// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var comments = [
  {
    name: "张三",
    message: "今天下雨",
    dateTime: "2021-05-20",
  },
  {
    name: "张三",
    message: "今天下雨",
    dateTime: "2021-05-20",
  },
  {
    name: "张三",
    message: "今天下雨",
    dateTime: "2021-05-20",
  },
  {
    name: "张三",
    message: "今天下雨",
    dateTime: "2021-05-20",
  },
  {
    name: "张三",
    message: "今天下雨",
    dateTime: "2021-05-20",
  },
];

// 当服务器收到 get 请求 / 的时候，执行回调处理函数
app.get("/", function (req, res) {
  res.render("index.html", {
    comments: comments,
  });
});

app.get("/post", function (req, res) {
  res.render("post.html");
});

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 因为路由可以一样，请求方式不一样
app.post("/post", function (req, res) {
  // 1.处理表单 POST 请求提数据
  // 2. 处理
  // 3. 发送响应
  // req.query 只能拿 get 请求参数
  req.query.dateTime = new Date().valueOf();
  console.log("---req.body---", req.body);
  comments.push(req.body);
  res.render("index.html", {
    comments: comments,
  });
});

// app.post("/pinglun", function (req, res) {
//   req.query.dateTime = new Date().valueOf();
//   comments.push(req.query);
//   res.render("index.html", {
//     comments: comments,
//   });
// });

app.get("/404", function (req, res) {
  res.render("404.html", {
    content: "您访问的页面失联了！",
  });
});

// 如果希望修改默认的 views 师徒渲染存储目录，可以
// app.set("views", "pages");

app.get("/about", function (req, res) {
  // 在Express 中可以直接通，req.query 来拿到查询字符串的参数
  console.log(req.query);
  res.send("你好，我是关于页面21");
});

// 相当于 server.listen
app.listen(3000, function () {
  console.log("app is running at port 3000~");
});
