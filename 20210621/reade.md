<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-06-21 16:33:33
 * @LastEditTime : 2021-06-21 17:40:40
 * @LastEditors  : pacino
-->
# 启动or关闭数据库
  - 启动
    ```  
    # mongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录
    # 所以在第一次执行该命令之前先自己手动新建一个 /data/db
    ```
  - 如果想要修改默认的数据存储目录，可以
     ```
    mongod --dbpath=数据存储目录路径
    ```
  - 停止：
    ```
    ctrl+c
     关闭开启服务的控制台
    ```
# 连接和退出数据库
  - 连接：
    ```
    #该命令默认连接主句的 MongoDB 服务
    mongo
  - 退出：
    ```
    #在连接状态输入 exit 退出连接
    exit
# 基本命令
  - ```show dbs```
    + 查看显示所有数据库
  - ```use 数据库名称```
    + 切换到指定的数据（如果没有会新建
  - ```db```
    + 显示当前所在的数据库
# 在 Node 中如何操作 MongoDB 数据
  - 使用官方的 mongodb 包来操作
    https://github.com/mongodb/node-mongodb-native
  - 使用第三方 mongoose 来操作 MongoDB 数据库
    +  第三方包：mongoose 基于 MongoDB 官方的 mongodb 包再一次做了封装。