<!--
 * @Description  : 说明
 * @Author       : pacino
 * @Date         : 2021-06-09 14:22:56
 * @LastEditTime : 2021-06-09 14:39:26
 * @LastEditors  : pacino
-->

# Express - crud

## 起步

- 初始化
- 模板处理

## 路由设计

| 请求方法 | 请求路径         | get参数 | post参数                       | 备注         |
| -------- | ---------------- | ------- | ------------------------------ | ------------ |
| GET      | /students        |         |                                | 渲染首页     |
| GET      | /students/new    |         |                                | 渲染添加     |
| POST     | /students        |         | name、age、gender、hobbies     | 处理添加     |
| GET      | /students/edit   | id      |                                | 渲染编辑页面 |
| POST     | /students/edit   |         | id、name、age、gender、hobbies | 处理编辑请求 |
| GET      | /students/delete | id      |                                | 处理删除请求 |