<template>
  <van-row>
    <van-row class='row-top'>
      <van-image class='image-bg' src='https://image.lawxp.com/webimg.aspx?ImgId=104283' />
    </van-row>

    <van-row class='app-shadow row-user-info'>
      <!-- 品牌描述语 -->
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
      <!--      一元抢购-->
      <van-row class='row-submit-rush'>
        <van-button class='btn-submit-rush' color='linear-gradient(to top, #f16331, #fcdbc6)' round>一元抢购</van-button>
      </van-row>
    </van-row>


    <!--    二维码-->
    <van-row class='row-qrcode'>
      <van-col :span='8'>
        <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104236' />
      </van-col>
      <van-col :span='16'>
        <van-row class='row-hint-4'>识别二维码参与活动</van-row>
        <van-row class='row-hint-5'>正式抢购：2021-11-11-11：00</van-row>
        <van-row class='row-hint-5'>未尽事宜可电话咨询：021-61311883</van-row>
      </van-col>
    </van-row>

    <!--    免责声明-->
    <StatementComponents />

  </van-row>
</template>

<script>

import StatementComponents from '../components/StatementComponents'
export default {
  name: 'mine',
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


.image-bg {
  position: absolute;
  float: left;
  width: 410px;
  height: 450px;
}

/* 卡片样式 */
.app-shadow {
  padding: 15px 12px 20px 12px;
  background: #ffffff;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
  margin: 20px 3%;
  border-radius: 8px;
}

.row-user-info {
  position: absolute;
  border: #003EA4 solid 3px;
  width: 300px;
  top: 315px;
  left: 15px;
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

.row-submit-rush {
  margin-top: 15px;
  text-align: center;
}

.btn-submit-rush {
  width: 285px;
}

.row-qrcode {
  position: absolute;
  width: 350px;
  bottom: 35px;
  left: 20px;
  margin: 20px 3%;
}

.row-hint-4 {
  font-size: 15px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 20px;
}

.row-hint-5 {
  font-size: 12px;
  color: #333333;
  margin-top: 3px;
}

</style>
