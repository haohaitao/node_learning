/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-21 15:51:52
 * @LastEditTime : 2021-07-22 10:08:20
 * @LastEditors  : pacino
 */
const express = require("express");
const app = express();
const memberRouter = require("./member_router");
const skuRouter = require("./sku_router");

const models = require("../models");

// 注册路由
app.use("/member", memberRouter);
app.use(skuRouter);

// models.User
// models.Sequlize

app.get("/create", async (req, res) => {
  const { name } = req.query;
  // promise user --> sequlize 对象
  if (name) {
    await models.User.create({
      name,
    });
    res.json({
      message: "创建成功",
    });
  } else {
    res.status(400).json({
      err_code: 400,
      msg: "缺少name参数",
    });
  }
});

// 查询列表
app.get("/list", async (req, res) => {
  const list = await models.User.findAll();
  res.json({
    list,
  });
});

// 查询指定id详情
app.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.User.findOne({
    where: {
      id,
    },
  });
  res.json({
    user,
  });
});

app.listen(3010, () => {
  console.log("---服务启动成功---");
});
