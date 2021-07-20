<!--
 * @Description  :  说明文件
 * @Author       : pacino
 * @Date         : 2021-07-20 10:52:04
 * @LastEditTime : 2021-07-20 14:18:41
 * @LastEditors  : pacino
-->

## web 服务，如何处理一个请求
url-->网络-->dns解析-->目标服务器

## 1.定义一个 api路由，需要满足客户端无论使用什么请求方法都有响应
- app.all
  + app.all('/xxx', (req, res)=>{})

## 2.无论客户端使用任何的url，我们的服务都可以响应-->日志
- app.use --> 使用中间件

## 3.如何做路由的拆分
 -- 使用express的router方法