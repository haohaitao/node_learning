/*
 * @Description  : 搭建node服务
 * @Author       : pacino
 * @Date         : 2021-05-13 14:41:11
 * @LastEditTime : 2021-05-13 16:25:26
 * @LastEditors  : pacino
 */

// 使用node构建web服务器
//1、加载http模块
var http = require("http");

//2、使用 http.createSproducterver() 方法创建一个web服务器
var server = http.createServer();

//3、服务器的作用( 提供服务、处理请求)
/**
 * request 请求对象，获取客户端请求信息
 * response 相应对象，给客户端发送响应消息
 */
server.on("request", function (request, response) {
  console.log("收到客户端的请求了,请求路径是：" + request.url);


//4、绑定端口号、启动服务器
server.listen(3000, () => {
  console.log("服务器启动成功，可以通过3000端口访问");
});
