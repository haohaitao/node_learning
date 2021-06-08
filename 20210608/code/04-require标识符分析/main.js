/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-08 11:40:27
 * @LastEditTime : 2021-06-08 14:21:06
 * @LastEditors  : pacino
 */
/**
 *  1、路径形式的模块:
 *  ./ 当前目录
 *  ../ 上一级目录
 *  /xxx 几乎不用
 *  d:/a/foo.js 几乎不用
 *  首位的 / 在这里表示的是当前文件模块所属磁盘根路径
 *  .js 后缀名可以省略
 *  require('./foo.js)
 */

/**
 *  核心模块的本质也是文件
 *  核心模块文件已经被编译到了二进制文件中，我们只需按名字进行加载
 *  require('fs)
 */

/**
 * 第三方模块
 * 凡是第三方模块都必须通过 npm 来下载
 * 使用的时候可以通过 require('包名') 的方式来进行加载才可以使用
 * 不可能有任何一个第三方包和核心模块的名字是一样的
 * 既不是核心模块、也不是路径形式的模块
 *  先找到当前文件所在目录中的 node_modules 目录
 *  例：node_modules/art-template
 *     node_modules/art-template/package.json 文件
 *     node_modules/art-template/package.json 文件中的 main 属性
 *     main 属性中记录了 art-template 的入口模块
 *     然后加载使用这个第三方包
 *     使用 require('art-template') 引入模块
 *     实际上最终加载的还是文件
 *
 *     如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_module 目录查找
 *     如果上一级还没有，则继续往上上以及查找
 *     ---
 *     如果直到当前磁盘根目录还找不到，最后报错：
 *     can not find module xxx
 */

// var template = require("art-template");

require("a");
