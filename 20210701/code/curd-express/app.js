/*
 * @Description  : 入口文件
 * @Author       : pacino
 * @Date         : 2021-06-09 11:34:22
 * @LastEditTime : 2021-06-09 15:55:36
 * @LastEditors  : pacino
 */

/**
 * app.js 入口模块
 * 职责：
 *     创建服务
 *     服务器相关配置
 *          模板引擎
 *          body-parser 解析表单 post 请求
 *          提供静态资源服务
 *      挂载路由
 *      监听端口启动服务
 */
var express = require("express");
var router = require("./router");

var app = express();

// 解析 post 表单数据
// 配置解析
// bodyParser 已弃用，直接使用 express 调 body-parser 的api
// 注意：需要放在挂载路由之前
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 把路由容器挂载到 app 服务实例
app.use(router);

// 开放 node_modules、public目录
app.use("/node_modules", express.static("./node_modules/"));
app.use("/public", express.static("./public/"));

app.engine("html", require("express-art-template"));

app.listen(3000, function () {
  console.log("running at port 3000 !");
});

module.exports = app;
