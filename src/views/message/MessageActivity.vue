<template>
  <van-row>
    <van-row class='app-shadow' v-for='(item,index) in 5' :key='index' @click='onItemClick(item)'>
      <van-row>
        <van-icon style='float: left' size='25' dot
                   name='https://image.lawxp.com/webimg.aspx?ImgId=104223'></van-icon>
        <span style='float: left;margin: 2px 0 0 5px;font-size: 15px;color: #333333;'>系统消息</span>
        <span style='float: right;margin: 6px 0 0 5px;font-size: 12px;color: #666666;'>17:23</span>
      </van-row>
      <van-row style='margin: 3px 5px 5px 35px'>
        <van-col :span='22'>
          <span style='font-size: 14px;color: #333333'>您已经6个月没有经行缴费操作了，为了您能正常使用生活电器，请确保缴...</span>
        </van-col>
        <van-col :span='2'>
          <van-icon style='float: right;margin: 5px 5px 0 0;' name='arrow' size='15' />
        </van-col>
      </van-row>
    </van-row>

  </van-row>
</template>

<script>
export default {
  name: 'MessageActivity',
  data() {
    return {}
  },
  mounted() {

  },
  methods: {
    /**
     * 条目点击
     * @param item 条目数据
     */
    onItemClick(item) {
      console.log(item)
      this.$router.push('/message_details_activity')
    }
  }
}
</script>

<style scoped>

</style>
