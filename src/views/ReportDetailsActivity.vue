<template>
  <van-row>
    <!--    标题-->
    <van-row>
      <van-image class='image-bg' src='https://image.lawxp.com/webimg.aspx?ImgId=104292' />
      <van-row class='row-title'>
        <van-row class='row-hint-1'>电商品牌保护法</van-row>
        <van-row class='row-hint-2'>汇法双11电商品牌保护月</van-row>
      </van-row>
    </van-row>
    <!--    基础版-->
    <van-row class='row-base'>
      <van-row class='row-hint-3'>《 电商品牌保护诊断可视化报告 》基础版</van-row>
      <van-row class='row-hint-4'>汇法基于10大电商平台的公开数据，并出具统计周期（三个月）内的品牌保护诊断分析。</van-row>
      <van-row class='row-hint-5'>
        <van-col class='col-list' :span='8' v-for='(item,index) in baseList'>{{ item.text }}</van-col>
      </van-row>
      <van-row class='row-hint-6'>搜索链接对应卖家：XXXXXX 平台：XXXX</van-row>
      <van-row class='row-hint-7'>搜索关键词/对应商品：iPhone12s plus 256g 国行 全网通</van-row>
    </van-row>

    <!--    完整版-->
    <van-row class='row-content'>
      <van-row class='row-hint-8'>商品价格体系</van-row>
      <van-row class='row-hint-9'>商品（手机类）销售热度（10大平台综合）：</van-row>
      <van-row class='row-hint-9'>第XX位  销售：12052242件</van-row>
      <van-row class='row-hint-9'>热度top10：</van-row>
      <van-row class='row-hint-13' v-for='(item,index) in 10'>
        <van-col :span='6' :class='index === 0 ? "one" : index === 1 ? "two" : index === 2 ? "three" : "" '>{{ index + 1}}、天猫商城</van-col>
        <van-col :span='18' :class='index === 0 ? "one" : index === 1 ? "two" : index === 2 ? "three" : "" '>销售：148852件</van-col>
      </van-row>
    </van-row>


    <!--    前往认证-->
    <van-row class='row-statement'>
      <van-col :span='12'>
        <van-row class='row-hint-10'>汇法 | HUIFA CREDITEOH</van-row>
        <van-row class='row-hint-11'>智信合一 天下无欺</van-row>
        <van-row class='row-hint-12'>免责声明</van-row>
      </van-col>
      <van-col :span='12'>
        <van-button class='btn-statement' color="linear-gradient(to right, #3EA8FF, #1684FF)" text='前往认证' round/>
      </van-col>
    </van-row>

  </van-row>
</template>

<script>

  export default {
    name: 'ReportDetailsActivity',
    data() {
      return {
        baseList: [
          {
            id: 1,
            text: '商品价格体系'
          },
          {
            id: 2,
            text: '关联商家'
          },
          {
            id: 3,
            text: '竞品情况'
          },
          {
            id: 4,
            text: '消费者偏好'
          },
          {
            id: 5,
            text: '舆情监测'
          },
          {
            id: 6,
            text: '用户增长策略'
          }
        ],
      }
    },
    created() {
    },
    mounted() {

    },
    methods: {

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

.row-content {
  background: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 200px;
  padding: 15px 12px 15px 12px;
}

.row-hint-3 {
  text-align: center;
  color: #333333;
  font-size: 16px;
  font-weight: bold;
}

.row-hint-4 {
  margin-top: 10px;
  color: #333333;
  font-size: 14px;
}

.row-hint-5 {
  margin-top: 10px;
}

.col-list {
  margin-left: 7px;
  margin-top: 8px;
  width: 120px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #EEF5FD;
  color: #247FFD;
  font-size: 12px;
  text-align: center;
}

.row-hint-6 {
  margin-top: 20px;
  font-size: 13px;
  color: #999999;
}

.row-hint-7 {
  margin-top: 10px;
  font-size: 13px;
  color: #333333;
  font-weight: bold;
}


.row-hint-8 {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  padding-left: 5px;
  margin-top: 5px;
  border-left: #3D96FF solid 4px;
}

.row-hint-9 {
  color: #333333;
  font-size: 13px;
  margin-top: 5px;
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

.row-hint-13{
  margin-top: 5px;
  color: #666666;
  font-size: 13px;
}

.one{
  color: #F03333;
}

.two{
  color: #FF7E00;
}

.three{
  color: #FFAE00;
}

.btn-statement {
  height: 40px;
  width: 170px;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 20px;
}
</style>
