<template>
  <van-row>
    <van-row class='row-icon'>
      <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104291' />
    </van-row>
    <van-row class='row-hint'>您已提交认证完成</van-row>
    <van-row class='row-hint-1'>感谢您的认证，我们会尽快通知您审核结果，请留意短信或邮件</van-row>
    <van-row class='row-hint-2'>提交时间：2021-09-09  13:59:50</van-row>
    <van-row class='row-back'>
      <van-button class='btn-back' color='#409EFF' text='返回查看报告' />
    </van-row>

    <van-row class='row-hint-3'>联系我们</van-row>
    <van-row class='row-hint-4'>平台：九不欺</van-row>
    <van-row class='row-hint-4'>邮箱：430050</van-row>
    <van-row class='row-hint-4'>电话：021-61311883</van-row>
    <van-row class='row-hint-4'>邮箱：liyingbao@cuitx.cn</van-row>


    <StatementComponents />
  </van-row>
</template>

<script>
import StatementComponents from '../components/StatementComponents'
export default {
  name: 'AttestationSucceedActivity',
  components: { StatementComponents }
}
</script>

<style scoped>
.row-icon{
  text-align: center;
  margin-top: 50px;
}

.image-icon{
  width: 60px;
  height: 60px;
}

.row-hint{
  margin-top: 20px;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  text-align: center;
}

.row-hint-1{
  margin-top: 5px;
  font-size: 13px;
  color: #7c7c7c;
  text-align: center;
  padding: 0 70px 0 70px;
  font-weight: bold;
}

.row-hint-2{
  margin-top: 20px;
  font-size: 12px;
  color: #999999;
  text-align: center;
}

.row-back{
  text-align: center;
  margin-top: 50px;
}

.btn-back{
  height: 38px;
  width: 120px;
}

.row-hint-3{
  margin-top: 120px;
  text-align: center;
  color: #409EFF;
  font-size: 14px;
  font-weight: bold;
}

.row-hint-4{
  margin-top: 3px;
  text-align: center;
  color: #409EFF;
  font-size: 12px;
}
</style>
