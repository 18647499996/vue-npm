<template>
  <van-row class='row-body'>

    <van-row class='row-search'>
      <van-col span='18'>
        <van-row class='row-input'>
          <van-col class='col-icon' span='5'>
            <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104304' />
          </van-col>
          <van-col class='col-hint' span='19'>输入商品链接 或 商品名</van-col>
        </van-row>
      </van-col>
      <van-col class='col-submit' span='6'>
        <van-button class='btn-submit' color='#FFB42C' text='查询' round @click='onClickQuery'/>
      </van-col>
    </van-row>

    <van-row class='row-hint-1'>建议输入完整商品名，例如：iphone12 128G 蓝色</van-row>
    <van-row class='row-hint-2'>电商品牌护法</van-row>
    <van-row class='row-hint-3'>汇法双11电商品牌保护月</van-row>
    <van-row class='row-hint-4'>活动时间：10.20-11.11</van-row>
    <van-row class='row-hint-5'>复制您的店铺上架宝贝链接或名称</van-row>
    <van-row class='row-hint-6'>进行查询即刻获得——</van-row>
    <van-row class='row-hint-7'>《电商品牌保护诊断可视化报告》</van-row>

    <!--    前往认证-->
    <van-row class='row-statement'>
      <van-col :span='12'>
        <van-row class='row-hint-10'>汇法 | HUIFA CREDITEOH</van-row>
        <van-row class='row-hint-11'>智信合一 天下无欺</van-row>
        <van-row class='row-hint-12'>免责声明</van-row>
      </van-col>
      <van-col :span='12'>
        <van-button class='btn-statement' color="linear-gradient(to right, #FED757, #FF7000)" text='分享' round/>
      </van-col>
    </van-row>
  </van-row>
</template>

<script>
import { getUserInfo, getItemDetail, getActivityLink } from '@/api/UserApi'
import { Dialog, Notify, Toast } from 'vant'

export default {
  name: 'HomeActivity',
  data() {
    return {

    }
  },

  created() {

  },

  computed: {},

  mounted() {

  },

  methods: {
    onClickQuery(){
      this.$router.push('ReportDetailsUserActivity')
    }
  }
}

</script>

<style scoped>
.row-body{
  position: fixed;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom,#4A43FF,#BC5AFF,#FFFFFF);
}

.row-search{
  margin: 20px 15px 20px 15px;
}

.row-input{
  background: #FFFFFF;
  border-radius: 35px;
}

.col-icon{
  text-align: center;
  padding: 5px 0 5px 0;
}

.image-icon{
  height: 30px;
  width: 30px;
}

.col-hint{
  font-size: 14px;
  color: #888888;
  padding: 12px 0 12px 0;
}

.col-submit{
  text-align: center;
}

.btn-submit{
  width: 70px;
}

.row-hint-1{
  margin: 0 25px 0 25px;
  font-size: 12px;
  color: #FFFFFF;
}

.row-hint-2{
  margin: 20px 25px 0 25px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
}

.row-hint-3{
  margin: 2px 25px 0 25px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
}

.row-hint-4{
  margin: 8px 25px 0 25px;
  font-size: 12px;
  color: #FFFFFF;
}

.row-hint-5{
  margin: 15px 25px 0 25px;
  font-size: 12px;
  color: #FFFFFF;
}

.row-hint-6{
  margin: 2px 25px 0 25px;
  font-size: 12px;
  color: #FFFFFF;
}

.row-hint-7{
  text-align: center;
  margin: 20px 25px 0 25px;
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
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

.btn-statement {
  height: 40px;
  width: 170px;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 20px;
}

</style>
