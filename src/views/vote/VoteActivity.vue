<template>
  <van-row>
    <!-- 选择绑定房产 -->
    <van-search
      v-model='inputSearchValue'
      placeholder='请输入投票标题'
      @search=''
      @input='onSearch()'
      shape='round'>
    </van-search>

    <van-row style='margin-top: 10px; padding:10px;background: #ffffff' v-for='(item,index) in 3' :key='index' @click='onItemClick(item)'>
      <span class='span-title'>小区门禁是否更换人脸识别投票</span>
      <van-image class='image-cover' src='https://image.lawxp.com/webimg.aspx?ImgId=104199'></van-image>
      <van-row style='margin-top: 5px'>
        <van-col :span='12'>
          <van-icon name='eye-o' size='15' style='float: left' color="#999999" />
          <span style='float: left;margin-left: 5px;color: #999999' >100人已投票</span>
        </van-col>
        <van-col :span='12'>
          <span style='float: right;margin-left: 5px;color: #999999'>截止:2021-08-17</span>
          <van-icon name='underway-o' style='float: right;' size='15'  color="#999999"/>
        </van-col>
      </van-row>
    </van-row>
  </van-row>
</template>

<script>
export default {
  name: 'VoteActivity',
  data() {
    return {
      inputSearchValue: ''
    }
  },
  mounted() {
  },
  methods: {

    /**
     * 搜索监听
     */
    onSearch() {

    },

    /**
     * 条目点击事件
     * @param item 条目数据
     */
    onItemClick(item){
      this.$router.push('vote_details_activity')
    }
  }
}
</script>

<style scoped>
.span-title {
  font-size: 15px;
  color: #333333;
}

.image-cover {
  margin-top: 8px;
  height: 160px;
  border-radius: 8px;
}
</style>
