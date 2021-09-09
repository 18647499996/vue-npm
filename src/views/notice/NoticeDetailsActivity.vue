<template>
  <van-row>
    <van-row class='app-shadow'>
      <!--        标题-->
      <van-row>
        <van-col :span='18'>
          <span class='span-title'>关于本小区天然去暂停供应通知</span>
        </van-col>
        <van-col :span='6' style='text-align: right'>
          <van-button color='linear-gradient(to right, #ff6c7a, #ff0000)' size='mini'>紧急通知</van-button>
        </van-col>
      </van-row>
      <!--      时间 小区名称-->
      <van-row style='margin-top: 8px'>
        <van-col :span='12'>
          <van-icon name='underway-o' size='18' style='float: left' color='#999999' />
          <span class='span-date'>2021/08/18 12:20</span>
        </van-col>
        <van-col :span='12'>
          <span class='span-address'>挹江户小区</span>
          <van-icon name='location-o' size='18' style='float: right' color='#999999' />
        </van-col>
      </van-row>
      <!--      内容详情-->
      <van-row style='margin-top: 8px'>
        <span class='span-content'>各位住户好，接天然气公司通知，现定于4月15日对本小区天然气管道进行施工改造，受此影响21号楼将于4月15日9:00-12:00暂停供应天然气。</span>
        <van-row class='row-image' />
        <span class='span-content'>各位住户好，接天然气公司通知，现定于4月15日对本小区天然气管道进行施工改造，受此影响21号楼将于4月15日9:00-12:00暂停供应天然气。</span>
      </van-row>
    </van-row>
  </van-row>
</template>

<script>
export default {
  name: 'NoticeDetailsActivity'
}
</script>

<style scoped>
.span-title {
  font-size: 17px;
  font-weight: bold;
  color: #333333;
}

.span-date {
  float: left;
  margin-left: 5px;
  font-size: 15px;
  color: #999999;
}

.span-address {
  float: right;
  margin-left: 5px;
  font-size: 13px;
  color: #999999;
}

.span-content {
  font-size: 14px;
  color: #333333;
}

.row-image {
  background-image: url("https://image.lawxp.com/webimg.aspx?ImgId=104207");
  height: 220px;
  margin-top: 8px;
}

</style>
