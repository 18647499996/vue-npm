<template>
  <van-row>
    <van-row class='app-shadow'>
      <van-row class='row-cell'>
        <span>来访时间：2021/07/08 - 2021/07/09</span>
      </van-row>
      <van-row class='row-cell'>
        <span>来访目的：-</span>
      </van-row>
      <van-row class='row-cell'>
        <span>来访人数：6人</span>
      </van-row>
      <van-row class='row-cell'>
        <span>来访成员：</span>
        <span class='span-add'>添加</span>
      </van-row>

      <van-row class='row-item'>
        <van-col class='col-item' v-for='(item,index) in memberList' :key='index'>
          <span>{{ item }}</span>
        </van-col>
      </van-row>

    </van-row>
    <van-row class='app-shadow'>
      <van-row class='row-qrcode'>
        <van-image src='https://image.lawxp.com/webimg.aspx?ImgId=104236' width='200' height='200' />
        <van-row class='row-qrcode-hint'>
          <span class='span-qrcode'>您的访客可凭此二维码进入小区</span>
        </van-row>
      </van-row>

    </van-row>

    <van-row class='row-botton'>
      <van-button class='button-share' round >分享</van-button>
    </van-row>
  </van-row>
</template>

<script>
export default {
  name: 'VisitorDetailsActivity',
  data() {
    return {
      memberList: ['刘冬涵', '张三', '李四', '王五', '王小虎', '陈明伟']
    }
  }
}
</script>

<style scoped>
.row-cell {
  font-size: 14px;
  color: #333333;
  margin-top: 5px;
  padding-left: 15px;
}

.span-add {
  font-size: 12px;
  color: #FFFFFF;
  float: right;
  padding: 3px 12px 3px 15px;
  background: #e71120;
  border-radius: 3px;
}

.row-item {
  padding: 8px;
}

.col-item {
  background: #f5f5f5;
  padding: 7px 20px 7px 20px;
  border-radius: 8px;
  margin: 5px;
  float: left;
  font-size: 13px;
  color: #808080;
}

.row-qrcode {
  margin-top: 40px;
  text-align: center;
}

.row-qrcode-hint{
  margin-top: 8px;
  text-align: center;
  margin-bottom: 40px;
}

.span-qrcode {
  font-size: 16px;
  color: #e71120;
}

.row-botton{
  margin-top: 20px;
  text-align: center;
  padding: 0 15px 0 15px;
}

.button-share{
  width: 100%;
  background: #e71120;
  color: #FFFFFF;
}
</style>
