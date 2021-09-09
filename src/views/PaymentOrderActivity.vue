<template>
  <van-row>
    <van-row class='row-top'>
      <van-row class='row-status'>待支付 · · ·</van-row>
      <van-row class='row-hint'>注意：购买成功后，平台将会以短信通知您服务开通通知提醒，请注意查收</van-row>
    </van-row>

    <van-row class='app-shadow row-content'>
      <!--      品牌描述-->
      <van-row>
        <van-col :span='9'>
          <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104284' />
        </van-col>
        <van-col :span='15'>
          <van-row class='row-hint-1'>汇法 I 品牌保护VIP服务</van-row>
          <van-row class='row-hint-2'>价值3999/年的品牌保护套餐</van-row>
          <van-row class='row-hint-3'>活动期间内每日可查</van-row>
          <van-row class='row-hint-3'>汇法大数据引擎提供实时动态结果</van-row>
        </van-col>
      </van-row>

      <van-row class='row-divider'></van-row>
      <!--      套餐功能-->
      <van-row class='row-hint-4'>本套餐包含以下服务功能:</van-row>
      <van-row class='row-hint-5'>全年九不欺平台信用认证</van-row>
      <van-row class='row-hint-5'>全年电商品牌保护诊断报告(周报、月报、季报)。</van-row>
      <van-row class='row-hint-5'>全年竞争监测:恶意违规竞争监测、促销动态等。</van-row>
      <van-row class='row-hint-5'>全年商家监测:冒牌山察店铺、宝贝。</van-row>
      <van-row class='row-hint-5'>全年差评错配管理:恶意差评、错位差评等。</van-row>
      <van-row class='row-hint-5'>全年舆情监测(部分功能)∶负面信息监测。</van-row>
      <van-row class='row-hint-5'>全年法务咨询:256分钟。</van-row>
    </van-row>

    <!--    描述提醒-->
    <van-row class='row-hint-6'>订购服务将以报告、图文等咨询内容进行推送</van-row>

    <!--    支付按钮-->
    <van-row class='row-back'>
      <van-button class='btn-back' text='支付￥1.00' color='#1970F3' round />
    </van-row>

    <StatementComponents />
  </van-row>

</template>

<script>

import StatementComponents from '../components/StatementComponents'
export default {
  components: { StatementComponents },
  data() {
    return {}
  },

  mounted() {

  },
  methods: {}
}
</script>

<style scoped>

.row-top {
  background: #1867EB;
  height: 400px;
  width: 100%;
}

.row-status {
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 50px 15px 20px 15px;
}

.row-hint {
  font-size: 16px;
  color: #FFFFFF;
  margin: 0 15px 0 15px;
}

.row-content {
  margin-top: -220px;
}

.image-icon {
  width: 105px;
  height: 105px;
}

.row-hint-1 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
}

.row-hint-2 {
  font-size: 13px;
  color: #333333;
  margin-top: 5px;
  margin-bottom: 13px;
}

.row-hint-3 {
  font-size: 11px;
  color: #666666;
  margin-top: 3px;
  padding: 3px 5px 3px 5px;
  background: #ebf1ff;
}

.row-divider {
  height: 5px;
  border-radius: 8px;
  width: 100%;
  background: #EBF1FF;
  margin: 10px 0px 10px 0px;
}

.row-hint-4 {
  font-size: 16px;
  color: #333333;
  padding: 8px;
  font-weight: 0.9;
}

.row-hint-5 {
  font-size: 14px;
  color: #333333;
  padding: 3px 8px 3px 8px;
}

.row-hint-6 {
  font-size: 13px;
  color: #666666;
  padding: 8px;
  text-align: center;
}

.row-back {
  text-align: center;
  margin-top: 20px;
}

.btn-back {
  height: 45px;
  width: 285px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
}
</style>
