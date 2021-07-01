/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-01 15:24:37
 * @LastEditTime : 2021-07-01 16:15:58
 * @LastEditors  : pacino
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/itCast", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
  },
});

// 直接导出模型构造函数
module.exports = mongoose.model("Student", studentSchema);
