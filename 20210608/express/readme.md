<!--
 * @Description  : 说明文件
 * @Author       : pacino
 * @Date         : 2021-06-09 11:02:50
 * @LastEditTime : 2021-06-09 11:22:25
 * @LastEditors  : pacino
-->

- 在 Express 获取表单 GET 请求提数据

  - 在 Expess 中内置了一个 API，可以直接通过 `req.query` 来获取

- 在 Express 获取表单 POST 请求提数据
  - 在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用一个第三方包， `body-parser`
- 安装
  `npm i --save body-parser`
- 配置

  ```
  // 引包
  var bodyParser = require('body-parser')
  // 配置 body-parser
  // 只要加入这个配置，则在 req 请求对象上会多出一个属性：body
  // 也就是说可以通过 req.body 来获取表单 POST 请求体数据
  ```
