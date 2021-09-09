<template>
  <van-row>
    <van-row class='row-top'>
      <van-image class='image-cover' src='https://image.lawxp.com/webimg.aspx?ImgId=104290' />
      <span class='span-hint'>支付成功</span>
    </van-row>

    <!--    订单信息-->
    <van-row class='app-shadow row-order'>
      <van-cell title='订单编号：' value='0551230000132' />
      <van-cell title='订单名称：' value='汇法 | 品牌保护VIP服务' />
      <van-cell title='成交单价：' value='￥：1.00' />
      <van-cell title='实际支付：' value='￥：1.00' />
      <van-cell title='服务开始时间：' value='2021-11-10：00' />
      <van-cell title='服务结束时间：' value='2022-11-10：00' />
    </van-row>

    <!--    返回按钮-->
    <van-row class='row-back'>
      <van-button class='btn-back' text='返回查看' color='#1970F3' round />
    </van-row>

    <StatementComponents/>
  </van-row>
</template>

<script>

import StatementComponents from '../components/StatementComponents'
export default {
  name: 'PropertyPaymentActivity',
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
  height: 300px;
  width: 100%;
  text-align: center;
}

.image-cover {
  width: 60px;
  height: 60px;
  float: left;
  margin-left: 130px;
  margin-top: 50px;
}

.span-hint {
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  float: left;
  margin-top: 70px;
  margin-left: 10px;
}

.row-order {
  margin-top: -120px;
}

.row-back {
  text-align: center;
  margin-top: 40px;
}

.btn-back {
  height: 45px;
  width: 285px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
}


</style>
