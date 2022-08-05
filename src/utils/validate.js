/*
 * @Author: your name
 * @Date: 2021-08-18 11:00:04
 * @LastEditTime: 2021-08-18 14:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mes\src\utils\validate.js
 */
export default {
  // 中文校验
  validateNoChi: (rule, value, callback) => {
    if (value) {
      if (/[\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error('不能为中文!'))
      } else {
        callback()
      }
    }
    callback()
  },
  // 密码校验
  validatePsdReg: (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请输入密码'))
    }
    if (
      !/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(
        value
      )
    ) {
      callback(
        new Error(
          '请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'
        )
      )
    } else {
      callback()
    }
  }
}
