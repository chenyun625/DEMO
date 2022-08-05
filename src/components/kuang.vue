<!--
 * @Author: your name
 * @Date: 2021-12-15 11:22:20
 * @LastEditTime: 2022-03-30 10:46:44
 * @LastEditors: Please set LastEditors
 * @Description: 订单数据
 * @FilePath: \CutMachine\src\components\kuang.vue
-->
<template>
  <div class="kuang">
    <div class="cutname">贴边台</div>
    <!-- <span class="state">设备状态</span>
    <span class="process"> 加工中</span> -->
    <div class="rightarea">
      <div class="area1">
        <div class="txt1">订单总数</div>
        <div class="total" ref="total">{{ total }}</div>
      </div>
      <div class="area2">
        <div class="txt2">完成订单</div>
        <div class="finish">{{ orderfinish }}</div>
      </div>
      <div class="area3">
        <div class="txt3">未完成订单</div>
        <div class="unfinish">{{ orderunfinish }}</div>
      </div>
      <div class="area4">
        <div class="txt4">加工进度</div>
        <div class="per">{{ percent }}%</div>
        <div class="progress">
          <div class="progress1" :style="lineProgress" ref="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kuang',
  props: {
    total: {
      type: Number,
      default: 0
    },
    orderfinish: {
      type: Number,
      default: 0
    },
    orderunfinish: {
      type: Number,
      default: 0
    },
    percent: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      linePercentage: 20
    }
  },
  created() {},
  mounted() {},
  computed: {
    // 计算进度条的宽度
    lineProgress() {
      let floatVal = parseFloat(this.percent)
      if (isNaN(floatVal)) {
        return 0
      }
      floatVal = (Math.round(this.percent * 100) / 10000) * 270 // Number
      this.linePercentage = floatVal
      const style = {}
      style.width = this.linePercentage + 'px'
      return style
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '../styles/mixin.scss';
.kuang {
  position: relative;
  height: 311px;
  width: 1901px;
  background: url('~@/assets/slicesorder/kuang.png') no-repeat center center;
  background-size: cover;
  font-size: 14px;
  margin-left: 10px;
  .cutname {
    position: absolute;
    margin: 5px 0 0 187px;
    font-size: 20px !important;
    font-family: SourceHanSansSC-Medium, SourceHanSansSC;
    font-weight: 500;
    color: #00e3fc;
  }
  .state {
    position: absolute;
    margin: 79px 0 0 82px;
    font-size: 13px;
    font-family: SourceHanSansSC-Bold, SourceHanSansSC;
    font-weight: bold;
  }
  .process {
    position: absolute;
    width: 72px;
    height: 20px;
    background: #0f9d47;
    border-radius: 16px;
    margin: 79px 0 0 154px;
    text-align: center;
  }
  .rightarea {
    position: absolute;
    height: 311px;
    width: 1437px;
    margin-left: 455px;
    .area1 {
      display: inline-block;
      height: 172px;
      width: 256px;
      margin: 79px 0 0 0;
      background: url('~@/assets/slicesorder/sum.png') no-repeat center center;
      background-size: cover;
      .txt1 {
        position: absolute;
        line-height: 29px;
        font-size: 20px;
        font-family: SourceHanSansSC-Regular, SourceHanSansSC;
        margin: 39px 0 0 88px;
        text-align: center;
      }
      .total {
        width: 105px;
        height: 59px;
        position: absolute;
        color: #14e065;
        font-size: 48px;
        font-family: DIN-Regular;
        font-weight: bold;
        text-align: center;
        margin: 74px 0 0 72px;
      }
    }
    .area2 {
      display: inline-block;
      margin: 79px 0 0 15px;
      height: 172px;
      width: 256px;
      background: url('~@/assets/slicesorder/sum.png') no-repeat center center;
      background-size: cover;
      .txt2 {
        position: absolute;
        line-height: 29px;
        font-size: 20px;
        font-family: SourceHanSansSC-Regular, SourceHanSansSC;
        margin: 39px 0 0 86px;
        text-align: center;
      }
      .finish {
        width: 105px;
        height: 59px;
        position: absolute;
        color: #14e065;
        font-size: 48px;
        font-family: DIN-Regular;
        font-weight: bold;
        text-align: center;
        margin: 74px 0 0 64px;
      }
    }
    .area3 {
      display: inline-block;
      margin: 79px 0 0 15px;
      height: 172px;
      width: 256px;
      background: url('~@/assets/slicesorder/sum.png') no-repeat center center;
      background-size: cover;
      .txt3 {
        position: absolute;
        line-height: 29px;
        font-size: 20px;
        font-family: SourceHanSansSC-Regular, SourceHanSansSC;
        margin: 39px 0 0 84px;
        text-align: center;
      }
      .unfinish {
        width: 105px;
        height: 59px;
        position: absolute;
        color: #f73232;
        font-size: 48px;
        font-family: DIN-Regular;
        font-weight: bold;
        text-align: center;
        margin: 74px 0 0 78px;
      }
    }
    .area4 {
      display: inline-block; // div显示在同一行
      margin: 79px 0 0 0;
      height: 172px;
      width: 538px;
      .txt4 {
        position: absolute;
        line-height: 29px;
        font-size: 20px;
        font-family: SourceHanSansSC-Regular, SourceHanSansSC;
        margin: 30px 0 0 30px;
      }
      .per {
        position: absolute;
        margin: 15px 0 0 460px;
        font-size: 48px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #14e065;
        line-height: 68px;
      }
      .progress {
        position: absolute;
        // width: 37%;
        margin: 89px 0 0 30px;
        width: 540px;
        height: 51px;
        // box-shadow: 0px 0px 6px 4px rgba(37, 148, 255, 0.5);
        border-radius: 6px;
        border: 2px solid #44d8ff;
        display: flex;
        justify-content: space-between;
        .progress1 {
          position: absolute;
          // width: 37%;
          // margin: 59px 0 0 30px;
          // width: 520px;
          height: 48px;
          // box-shadow: 0px 0px 6px 4px rgba(37, 148, 255, 0.5);
          border-radius: 6px;
          // border: 2px solid #44d8ff;
          display: flex;
          justify-content: space-between;
          background: linear-gradient(270deg, #14e065 0%, #00415c 100%);
        }
      }
    }
  }
}
</style>
