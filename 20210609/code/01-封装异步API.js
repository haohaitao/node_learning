/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-09 16:34:02
 * @LastEditTime : 2021-06-09 16:41:39
 * @LastEditors  : pacino
 */
function fn(callback) {
  setTimeout(() => {
    var data = "hello";
    callback(data);
  }, 1000);
}

fn(function (data) {
  console.log(data);
});
