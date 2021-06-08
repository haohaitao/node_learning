<!--
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-08 10:50:58
 * @LastEditTime : 2021-06-08 11:04:42
 * @LastEditors  : pacino
-->

- exports 和 module.exports 的区别
  - 每个模块都有一个 module 对象
  - module 对象中有一个 exports 对象
  - 我们可以把需要导出的成员都挂在到 module.exports 接口对象中
  - 也就是：`module.exports.xxx = xxx` 的方式
  - 但是每次都 `module。exports.xxx = xxx` 比较麻烦
  - 所以 Node 为了用户方便，同时在每一个模块中都提供了一个成员叫：`exports`
  - `exports === module.exports` 结果为 `true`
  - 所以对于：`module。exports.xxx = xxx` 的方式 完全可以：`exports.xxx = xxx`
  - 当一个模块需要导出单个成员的时候，这个时候必须使用：`module.exports = xxx` 的方式
  - 不要使用 `exports = xxx` 不管用
  - 因为每个模块最终向外 `return` 的是 `module.exports`
  - 而 `exports` 只是 `module.exports` 的一个引用
  - 所以即便你为 `exports = xx` 重新赋值，也不会影响 `module.exports`
  - 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的

```javascript
module.exports = {};
exports = module.exports;

exports.foo = "bar";
```
