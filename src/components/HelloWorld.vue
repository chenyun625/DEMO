<!--
 * @Author: your name
 * @Date: 2021-12-07 17:02:00
 * @LastEditTime: 2022-03-24 19:07:53
 * @LastEditors: Please set LastEditors
 * @Description: 贴边生产看板
 * @FilePath: \VisualScreen\src\components\HelloWorld.vue
-->
<template>
  <body class="body" style="overflow: hidden">
    <div class="header">
      <header class="screen-header">
        <img class="headImage" src="@/assets/slicesorder/head.png" />
        <span class="title">贴边生产看板</span>
      </header>
    </div>
    <!-- 主体部分 -->
    <div class="mainbox">
      <el-row class="rowlayer">
        <el-col :span="12">
          <kuang
            :total="temp.TotalOrderNumber"
            :orderfinish="temp.CompleteOrderNumber"
            :orderunfinish="temp.IncompleteOrderNumber"
            :percent="percent"
          />
        </el-col>
      </el-row>
      <div class="list">
        <!-- 将一维数据转换成二维数组 -->
        <vue-seamless-scroll
          :data="dataList"
          :class-option="optionHover"
          class="seamless-warp"
        >
          <div class="rowdescrip" v-for="item in computedList">
            <div class="des" v-for="(cell, i) in item" :key="i">
              <descriptionlist
                :class="
                  cell.process3_finish_time == '0001-01-01 00:00:00'
                    ? ''
                    : 'shadow'
                "
                :ordercode="cell.DHDH"
                :worktime="cell.PGRQ"
                :processnum="cell.SL"
                :finishtime="cell.process3_finish_time"
              />
            </div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
  </body>
</template>

<script>
import kuang from './kuang.vue'
import descriptionlist from './descriptionlist.vue'
import Pagination from '@/components/Pagination'
import vueSeamlessScroll from 'vue-seamless-scroll'
import * as LituoProductionTaskMain from '@/api/LituoProductionTaskMain'

export default {
  name: 'HelloWorld',
  components: {
    kuang,
    descriptionlist,
    Pagination,
    vueSeamlessScroll
  },
  data() {
    return {
      ProcessNbm: 3,
      temp: {
        TotalOrderNumber: 0, // 接收的时number类型，不可设置成字符串类型
        CompleteOrderNumber: 0,
        IncompleteOrderNumber: 0
      },
      percent: '0',
      pageSize: 45, // 所有页面的数据
      pageNum: 1, // 共几页
      dataShow: '', // 当前显示的数据
      currentPage: 0, // 默认当前显示第一页
      dataList: []
    }
  },
  computed: {
    computedList() {
      let index = 0
      let num = 9 // 每行几个元素
      let arr = []
      for (let i = 0; i < this.dataList.length; i++) {
        index = parseInt(i / num)
        if (arr.length <= index) {
          arr.push([])
        }
        arr[index][i % num] = this.dataList[i]
      }
      // console.log(arr)
      return arr
    },
    optionHover() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)};
      }
    }
  },
  created() {
    this.fun1()
  },
  mounted() {
    this.getList()
    this.getTodayList()
  },
  methods: {
    getList() {
      //需要从后台获取列表数据
      LituoProductionTaskMain.GetNumbersOfOrder(this.ProcessNbm).then(
        response => {
          this.temp = response.Result
          this.temp.TotalOrderNumber = response.Result.TotalOrderNumber
          this.temp.CompleteOrderNumber = response.Result.CompleteOrderNumber
          if (this.temp.TotalOrderNumber == 0) {
            this.percent = '0'
          } else {
            var percent =
              (this.temp.CompleteOrderNumber / this.temp.TotalOrderNumber) * 100
            this.percent = percent.toFixed(0)
          }
        }
      )
    },
    getTodayList() {
      //需要从后台获取列表数据
      LituoProductionTaskMain.getTodayTaskOrders(this.ProcessNbm).then(
        response => {
          this.dataList = response.Result
        }
      )
    },
    fun1() {
      let timer = setInterval(() => {
        //需要做的事情
        this.getList(), this.getTodayList()
      }, 12000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
        timer = null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 14, 41, 1);
  overflow: hidden;
  justify-content: flex-end;
  // padding-bottom: 0.0125rem;
  align-items: flex-start;
  left: 0;
  top: 0;
  // padding-left: 0.0625rem;
  font-family: SourceHanSansSC-Medium;
}
.headImage {
  z-index: 576;
  position: absolute;
  left: 0;
  top: 11px;
  width: 1920px;
  height: 72px;
}
.header {
  width: 1920px;
  font-size: 0.25rem;
  position: relative;
  .title {
    position: absolute;
    // left: 50%;
    // top: 50%;
    // font-size: 20px;
    // transform: translate(-50%, -50%);
    left: 792px;
    top: 0;
    width: 336px;
    height: 70px;
    display: block;
    overflow-wrap: break-word;
    color: rgba(63, 255, 246, 1);
    font-size: 48px;
    white-space: nowrap;
    line-height: 70px;
    text-align: center;
    text-shadow: 0px 0px 36px rgba(56, 117, 119, 0.84);
  }
}
.shadow {
  box-shadow: inset 0px 0px 20px 0px rgba(106, 255, 168, 0.9);
}
.mainbox {
  display: flex;
  flex-wrap: wrap;
  width: 1910px;
  height: 1001px;
  margin: 78px 5px 0 0;
  color: rgba(255, 255, 255, 1);
  .rowlayer {
    position: relative;
    width: 1902px;
    height: 311px;
    justify-content: space-between;
  }
  .list {
    position: relative;
    width: 1906px;
    height: 685px;
    margin: 10px 0 0 12px;
    .rowdescrip {
      position: relative;
      width: 1700px;
      height: 121px;
      justify-content: space-between;
      // justify-content: center;
      // margin: 0 0 0 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 6px;
      // margin-bottom: 12px;
      // .des {
      //   // position: absolute;
      //   height: 121px;
      //   background: url('~@/assets/slicesorder/finish.png') no-repeat center
      //     center;
      //   width: 16.6%;
      // }
    }
    .seamless-warp {
      width: 100%;
      height: calc(100% - 16px);
      overflow: hidden;
    }
  }
}
</style>
