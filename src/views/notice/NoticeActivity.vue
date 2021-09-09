<template>
  <van-row>
    <van-row class='app-shadow row-list' v-for='(item,index) in 10' :key='index' @click='onClickItem(item)'>
      <van-col :span='4' style='text-align: center'>
        <van-icon style='margin-top: 8px' name='volume-o' size='35' dot />
      </van-col>

      <van-col :span='20'>
        <span class='span-title'>关于本小区天然去暂停供应通知</span>
        <van-row style='margin-top: 15px'>
          <van-col :span='12'>
            <van-icon name='underway-o' size='15' style='float: left' />
            <span class='span-date'>2021/08/18 12:20</span>
          </van-col>
          <van-col :span='12'>
            <span class='span-address'>挹江户小区</span>
            <van-icon name='location-o' size='15' style='float: right' />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </van-row>
</template>

<script>
export default {
  name: 'NoticeActivity',
  data() {
    return {

    }
  },
  mounted() {

  },

  methods:{
    onClickItem(item){
      this.$router.push('/notice_details_activity')
    }
  }
}
</script>

<style scoped>
.row-list {
  height: 50px;
}

.span-title {
  font-size: 14px;
  color: #333333;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.span-date {
  float: left;
  margin-left: 5px;
  font-size: 12px;
  color: #999999;
}

.span-address {
  float: right;
  margin-left: 5px;
  font-size: 12px;
  color: #999999;
}
</style>
