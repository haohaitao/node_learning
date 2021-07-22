<!--
 * @Description  : 说明
 * @Author       : pacino
 * @Date         : 2021-07-21 15:53:28
 * @LastEditTime : 2021-07-22 11:23:28
 * @LastEditors  : pacino
-->

## 创建本项目的命令过程
```
    $ npm i --save sequelize
    $ npm i sequelize-cli -d
    $ npm i sequelize-cli -s
    $ npx sequelize-cli init

    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```