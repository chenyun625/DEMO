/*
 * @Author: your name
 * @Date: 2021-12-09 14:54:41
 * @LastEditTime: 2021-12-30 09:57:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MaterialProcess\config\dev.env.js
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8081/api"' // 服务器的api路径
})
