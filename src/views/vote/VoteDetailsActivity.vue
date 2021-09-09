<template>
  <van-row>
    <!--    标题-->
    <van-row style='font-size: 17px;color: #333333;margin:8px;font-weight: bold'>
      <span>【标题】小区门禁是否更换人脸识别投票？</span>
    </van-row>
    <!--    副标题-->
    <van-row style='margin: 5px 15px 5px 15px;color: #999999;font-size: 14px'>
      <van-icon name='manager-o' style='float: left;' size='17' />
      <span style='float: left;margin-left: 5px'>匿名</span>
      <van-icon name='passed' style='margin-left: 18px;float: left' size='17' />
      <span style='float: left;margin-left: 5px'>单选</span>
      <span style='float: right;margin-left: 5px'>100人已参与</span>
      <van-icon name='eye-o' style='float: right' size='17' />
    </van-row>

    <!--    投票-->
    <van-row class='app-shadow'>
      <span style='font-size: 15px;color: #333333'>投票选项</span>
      <van-radio-group v-model='radio' style='margin-top: 12px'>
        <van-radio :name='item.id' style='padding: 8px' checked-color='#e71120' v-for='(item,index) in radioArray'
                   :key='index'><span style='font-size: 14px;color: #333333'>{{ item.name }}</span>
        </van-radio>
      </van-radio-group>
      <!--      提供意见-->
      <van-row style='margin: 15px 8px 15px 8px'>
        <van-field style='background: #f8f8f8;' v-model='description' rows='5' autosize type='textarea' maxlength='200'
                   placeholder='请提供您宝贵的意见' show-word-limit />
      </van-row>

      <!--      截止时间-->
      <van-row style='margin: 5px 10px 5px 10px;color: #999999'>
        <van-icon name='underway' style='float: left;' size='17' />
        <span style='float: left;margin-left: 5px;font-size: 14px'>截止时间：2021-08-09 18:00</span>
      </van-row>

      <!--      发起人-->
      <van-row style='margin: 5px 10px 5px 10px;color: #999999'>
        <van-icon name='manager' style='float: left;' size='17' />
        <span style='float: left;margin-left: 5px;font-size: 14px'>发起人：**物业</span>
      </van-row>
    </van-row>

    <!--    提交按钮-->
    <van-row style='text-align: center;margin-top: 40px'>
      <van-button style='width: 325px' color='#e71120' round>提交</van-button>
    </van-row>
  </van-row>
</template>

<script>
export default {
  name: 'VoteDetailsActivity',
  data() {
    return {
      radio: '1',
      description: '',
      radioArray: [
        {
          id: 1,
          name: '同意跟换人脸识别'
        },
        {
          id: 2,
          name: '不同意跟换人脸识别'
        },
        {
          id: 3,
          name: '无所谓'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
