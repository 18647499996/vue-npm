<template>
  <van-row>
    <!--    标题-->
    <van-row>
      <van-image class='image-bg' src='https://image.lawxp.com/webimg.aspx?ImgId=104292' />
      <van-row class='row-title'>
        <van-row class='row-hint-1'>双11来CHAJIA</van-row>
        <van-row class='row-hint-2'>汇法双11消费者保护行动</van-row>
      </van-row>
    </van-row>
    <van-row class='row-base'>
      <van-row class='row-hint-3'>您搜索的商品名称为：<span class='span-name'>可口可乐300ML 1瓶</span></van-row>
      <van-row class='row-hint-4'>智能优选模型</van-row>
      <van-row class='row-hint-5'>汇法基于各大电商平台的公开数据，并出具统计周期（一个月）的消费者权益保护诊断分析。</van-row>
      <van-divider dashed />
      <van-row class='row-charts'>
        <div class='div-charts' id='main' ref='mainRadar' />
      </van-row>
    </van-row>

    <!--    列表-->
    <van-row class='row-content'>
      <van-row class='row-hint-6'>优选商家/商品</van-row>
      <van-row class='row-list' v-for='(item,index) in 10' :key='index'>
        <van-row>
          <van-col :span='2'>
            <van-row class='app-center'>
              <van-image class='image-icon' :src='index === 0 ? "https://image.lawxp.com/webimg.aspx?ImgId=104293" :
                               index === 1 ? "https://image.lawxp.com/webimg.aspx?ImgId=104294" :
                               index === 2 ? "https://image.lawxp.com/webimg.aspx?ImgId=104295" : "https://image.lawxp.com/webimg.aspx?ImgId=104296" ' />
            </van-row>
            <van-row class='app-center'>
              <van-image class='image-icon'
                         :src='index === 0 ? "https://image.lawxp.com/webimg.aspx?ImgId=104297" :
                               index === 1 ? "https://image.lawxp.com/webimg.aspx?ImgId=104298" :
                               index === 2 ? "https://image.lawxp.com/webimg.aspx?ImgId=104299" : "https://image.lawxp.com/webimg.aspx?ImgId=104300" ' />
              <van-row
                :class='index === 0 ? "row-item-one" : index === 1 ? "row-item-two" : index === 2 ? "row-item-three" : "row-item-four"'>
                9.6
              </van-row>
            </van-row>
          </van-col>
          <van-col :span='16'>
            <van-row class='row-item-title'>京东-店铺一号</van-row>
            <van-row class='row-item-name'>可口可乐300ML1瓶</van-row>
            <van-row class='row-item-price'>
              <van-col :span='12'>总价：<span class='span-item-price-1'><span class='span-item-price-3'>￥</span>2.5</span>
              </van-col>
              <van-col :span='12'>券后价：：<span class='span-item-price-2'><span
                class='span-item-price-4'>￥</span>1.5</span></van-col>
            </van-row>
          </van-col>
          <van-col :span='6'>
            <van-button class='btn-item-copy' text='复制链接' round color='#247FFD' />
          </van-col>
        </van-row>
        <van-divider :style="{ borderColor: '#eaeaea', padding: '5px 0 5px 0',margin:'5px 0 5px 0'}" />
      </van-row>
    </van-row>

    <!--    解锁-->
    <van-row class='row-statement' v-if='isLock'>
      <van-col :span='12'>
        <van-row class='row-hint-10'>汇法 | HUIFA CREDITEOH</van-row>
        <van-row class='row-hint-11'>智信合一 天下无欺</van-row>
        <van-row class='row-hint-12'>免责声明</van-row>
      </van-col>
      <van-col :span='12'>
        <van-button class='btn-statement' icon='https://image.lawxp.com/webimg.aspx?ImgId=104303'
                    color='linear-gradient(to right, #3EA8FF, #1684FF)' text='保存报告' round />
      </van-col>
    </van-row>

    <!--    未解锁-->
    <van-row class='row-statement' v-if='!isLock'>
      <van-col :span='4'>
        <van-row class='row-hint-13'>今日查询</van-row>
        <van-row class='row-hint-14'>剩余<span style='color: #e71120'> 2 </span>次</van-row>
      </van-col>
      <van-col :span='10'>
        <van-button class='btn-query' icon='https://image.lawxp.com/webimg.aspx?ImgId=104302'
                    color='linear-gradient(to right, #3EA8FF, #1684FF)' text='永久查询' round />
      </van-col>
      <van-col :span='10'>
        <van-button class='btn-query' icon='https://image.lawxp.com/webimg.aspx?ImgId=104303'
                    color='linear-gradient(to right, #3EA8FF, #1684FF)' text='保存报告' round />
      </van-col>
    </van-row>

  </van-row>
</template>

<script>
var option = {
  title: {
    text: ''
  },
  legend: {
    data: ['店铺1号', '店铺2号', '店铺3号']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '品控1评分', max: 6500 },
      { name: '品控2评分', max: 16000 },
      { name: '品控3评分', max: 30000 },
      { name: '品控4评分', max: 38000 },
      { name: '品控5评分', max: 52000 },
      { name: '品控6评分', max: 25000 },
      { name: '品控7评分', max: 25000 },
      { name: '品控8评分', max: 25000 },
      { name: '品控9评分', max: 25000 }

    ]

  },
  series: [{
    name: '',
    type: 'radar',

    data: [
      {
        value: [4200, 3000, 20000, 35000, 50000, 18000, 4200, 3000, 20000],
        name: '店铺1号'
      },
      {
        value: [5000, 14000, 28000, 26000, 42000, 21000, 5000, 11000, 21000],
        name: '店铺2号'
      },
      {
        value: [2000, 16000, 30000, 22000, 52000, 24000, 25000, 21000, 24000],
        name: '店铺3号'
      }
    ]
  }]
}

export default {
  name: 'ReportDetailsUserActivity',
  data() {
    return {
      isLock: false
    }
  },
  computed: {},

  updated() {

  },

  mounted() {
    this.initEcharts()
  },
  methods: {

    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.mainRadar)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

.image-bg {
  position: absolute;
  float: left;
  width: 410px;
  height: 100px;
}

.row-title {
  position: absolute;
}


.row-hint-1 {
  color: #FFFFFF;
  font-size: 18px;
  margin-left: 150px;
  margin-top: 25px;
  font-weight: bold;
}

.row-hint-2 {
  color: #FFFFFF;
  font-size: 15px;
  margin-left: 130px;
  margin-top: 5px;
}

.row-base {
  background: #FFFFFF;
  margin-top: 100px;
  padding: 15px 12px 15px 12px;
}

.row-hint-3 {
  color: #333333;
  font-size: 14px;
}

.span-name {
  color: #2177FF;
}

.row-hint-4 {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.row-hint-5 {
  margin-top: 8px;
  color: #666666;
  font-size: 12px;
}

.row-charts {

}

.div-charts {
  width: 360px;
  height: 320px;
}

.row-content {
  background: #FFFFFF;
  margin-top: 10px;
  padding: 15px 12px 15px 12px;
  margin-bottom: 120px;
}

.row-hint-6 {
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
}

.row-list {
  margin-top: 5px;
}

.image-icon {
  width: 30px;
  height: 30px;
  margin: 2px 0 2px 0;
}

.row-item-one {
  position: absolute;
  color: #FF5353;
  font-size: 10px
}

.row-item-two {
  position: absolute;
  color: #FFC749;
  font-size: 10px
}

.row-item-three {
  position: absolute;
  color: #5BC9F4;
  font-size: 10px
}

.row-item-four {
  position: absolute;
  color: #333333;
  font-size: 10px
}

.row-item-title {
  font-size: 13px;
  color: #333333;
  font-weight: bold;
  margin: 0 10px 0 10px;
}

.row-item-name {
  font-size: 12px;
  color: #666666;
  margin: 2px 10px 0 10px;
}

.row-item-price {
  font-size: 11px;
  color: #333333;
  margin: 8px 10px 0 10px;
}

.span-item-price-1 {
  font-size: 17px;
  color: #FA0000;
  font-weight: bold;
}

.span-item-price-2 {
  font-size: 17px;
  color: #FF7E00;
  font-weight: bold;
}

.span-item-price-3 {
  font-size: 11px;
  color: #FA0000;
  font-weight: bold;
}

.span-item-price-4 {
  font-size: 11px;
  color: #FF7E00;
  font-weight: bold;
}

.btn-item-copy {
  height: 28px;
  width: 90px;
}

.row-statement {
  position: fixed;
  width: 100%;
  height: 55px;
  float: left;
  bottom: 0;
  background: #FFFFFF;
}

.row-hint-10 {
  font-size: 10px;
  color: #000000;
  margin: 5px 20px 0 20px;
  font-weight: bold;
}

.row-hint-11 {
  font-size: 10px;
  color: #000000;
  margin: 1px 20px 0 20px;
  font-weight: bold;
}

.row-hint-12 {
  font-size: 10px;
  color: #2568FF;
  margin: 2px 20px 0 20px;
}

.row-hint-13 {
  margin: 10px 0 0 15px;
  font-size: 12px;
  color: #000000;
  font-weight: bold;
}

.row-hint-14 {
  margin: 3px 0 0 15px;
  font-size: 12px;
  color: #000000;
  font-weight: bold;
}

.btn-statement {
  height: 40px;
  width: 170px;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 20px;
}

.btn-query {
  height: 40px;
  width: 140px;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 10px;
}
</style>
