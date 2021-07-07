/*
 * @Description  : 入口
 * @Author       : pacino
 * @Date         : 2021-07-07 16:07:58
 * @LastEditTime : 2021-07-07 17:53:02
 * @LastEditors  : pacino
 */
const express = require("express");
const path = require("path");

const app = express();

app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use(
  "/node_modules/",
  express.static(path.join(__dirname, "./node_modules/"))
);

app.engine("html", require("express-art-template"));
app.set("views", path.join(__dirname, "./views/")); // 默认就是 ./view

app.get("/", (req, res) => {
  res.render("index.html", {
    name: "张三",
  });
  res.send("hello");
});

app.listen(3000, () => {
  console.log("running on porn 3000...");
});
