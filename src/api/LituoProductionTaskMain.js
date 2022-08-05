/*
 * @Author: your name
 * @Date: 2021-12-30 10:09:32
 * @LastEditTime: 2022-03-24 19:29:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MaterialProcess\src\api\LituoProductionTaskMain.js
 */
import request from '@/utils/request'

// 获取订单完成三要素 总数 完成数 未完成数
export function GetNumbersOfOrder(ProcessNbm) {
  return request({
    url: '/LituoProductionTaskMain/GetNumbersOfOrder',
    method: 'post',
    // data,
    params: {
      ProcessNbm: ProcessNbm
    }
  })
}
// 获取今日订单
export function getTodayTaskOrders(ProcessNbm) {
  return request({
    url: '/LituoProductionTaskMain/getTodayTaskOrdersRep',
    method: 'post',
    // data,
    params: {
      ProcessNbm: ProcessNbm
    }
  })
}
