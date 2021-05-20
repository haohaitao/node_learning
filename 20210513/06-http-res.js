/*
 * @Description  : http-res
 * @Author       : pacino
 * @Date         : 2021-05-13 16:03:36
 * @LastEditTime : 2021-05-13 16:27:42
 * @LastEditors  : pacino
 */
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

  //response 对象有一个方法：write 可以用来给客户端发送相应数据
  response.setHeader("Content-type", "text/html;charset=utf-8"); //html 文本
  response.write("404 notFound");

  //告诉客户端，我的话说完了，你可以呈现给用户了
  response.end();
});

//4、绑定端口号、启动服务器
server.listen(3000, () => {
  console.log("服务器启动成功，可以通过3000端口访问");
});
