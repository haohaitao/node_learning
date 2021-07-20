/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-20 10:36:16
 * @LastEditTime : 2021-07-20 14:16:52
 * @LastEditors  : pacino
 */

const express = require("express");
// const http = require("http");

// 是一个 express 实例
const app = express();

// 引入路由
const memberRouter = require("./member.router");
const skuRouter = require("./sku.router");

// 注册路由(前面可以增加前缀来区分不同方法)
app.use("/api1", memberRouter);
app.use("/api2", skuRouter);

// app.use((req, res) => {
//   res.json({
//     name: "张三",
//   });
// });

// app.get("/name", (req, res) => {
//   res.json({
//     name: "tom",
//     age: 123,
//   });
// });

// app.post("/name", (req, res) => {
//   res.send("tom post");
// });

// 1.通过请求的方法类型，get/post/put/delete
// app.get("/demo", (req, res) => {
//   // req:请求对象
//   // res:服务响应对象
// });

// 2.通过url
// app.get("/user/byname", (req, res) => {
//   let { name } = req.query;
//   res.json({
//     name,
//     age: 999,
//   });
// });
// const server = http.createServer((req, res) =>[
//     res,json({})
// ])

app.listen(3000, () => {
  console.log("---server 启动成功，端口：3000 ---");
});
