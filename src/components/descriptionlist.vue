<!--
 * @Author: your name
 * @Date: 2021-12-16 16:37:50
 * @LastEditTime: 2022-03-25 16:03:06
 * @LastEditors: Please set LastEditors
 * @Description: 订单数据
 * @FilePath: \OrderrSlices\src\components\descriptionlist.vue
-->
<template>
  <div class="description">
    <div class="ordercode">
      订货单号：
      <div style=" display: inline-block;">
        {{ ordercode }}
      </div>
    </div>
    <div class="date">
      派工日期：
      <div style=" display: inline-block;">
        {{ worktime }}
      </div>
    </div>
    <div class="num">
      生产数量：
      <div style=" display:inline-block; color:#00e4ff">
        {{ processnum }} 张
      </div>
    </div>
    <div class="finishtime">
      完成时间：
      <div
        style=" display:inline-block;color:#8B8B8B "
        v-if="finishtime == '0001-01-01 00:00:00'"
      >
        未完成
      </div>
      <div
        style=" display:inline-block; "
        v-if="finishtime != '0001-01-01 00:00:00'"
      >
        {{ finishtime }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'descriptionlist',
  props: {
    ordercode: {
      type: String,
      default: ''
    },
    worktime: {
      type: String,
      default: ''
    },
    processnum: {
      type: Number,
      default: 0
    },
    finishtime: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.description {
  position: absolute;
  height: 121px;
  background: url('~@/assets/slicesorder/finish.png') no-repeat center center;
  background-size: cover;
  // background-color: #004f20;
  width: 200px;
  font-size: 11px;
  font-family: SourceHanSansSC-Medium, SourceHanSansSC;
  font-weight: 500;
  margin-right: 2px !important;
  .ordercode {
    color: #00e4ff;
    line-height: 15px;
    margin: 14px 0 0 7px;
  }
  .date {
    line-height: 15px;
    margin: 10px 0 0 7px;
  }
  .num {
    line-height: 15px;
    margin: 10px 0 0 7px;
  }
  .finishtime {
    line-height: 15px;
    margin: 10px 0 0 7px;
  }
}
</style>
