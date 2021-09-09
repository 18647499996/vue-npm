<template>
  <el-row>
    <van-row class='app-shadow'>
      <van-field v-model='roomNum' label='居民楼号' readonly />
      <van-field v-model='hownerName' label='姓名' readonly />
      <van-field v-model='phone' label='手机号码' type='number' maxlength='13' placeholder='请输入联系电话' clearable />
    </van-row>

    <van-row class='app-shadow'>
      <van-field
        v-model='description'
        rows='2'
        autosize
        label='报修描述'
        type='textarea'
        maxlength='50'
        placeholder='请简单描述您的报修内容'
        show-word-limit />
    </van-row>

    <van-row class='app-shadow'>
      <van-uploader v-model='fileList' multiple :max-count='2' />
    </van-row>

    <el-row class='row-submit'>
      <el-button class='btn-submit' type='primary' @click='onClickSubmit()'>提交</el-button>
    </el-row>


  </el-row>
</template>

<script>
import { addRepairs } from '@/api/user'

export default {
  name: 'add_repairs',
  data() {
    return {
      roomId: '',
      roomNum: '',
      hownerName: '',
      phone: '',
      description: '',
      fileList: []
    }
  },
  created() {
  },
  mounted() {
    this.roomId = this.$route.query.roomId
    this.roomNum = this.$route.query.roomNum
    this.hownerName = this.$route.query.hownerName
  },
  methods: {
    onClickSubmit() {
      console.log(this)
      let fromData = new FormData()
      fromData.append('describe', this.description)
      fromData.append('roomId', this.roomId)
      fromData.append('name', this.hownerName)
      fromData.append('phone', this.phone)
      fromData.append('roomNum', this.roomNum)
      this.fileList.map(v => {
        fromData.append('file', v.file)
      })
      addRepairs(fromData).then(succeed => {
        this.$router.push(
          {
            path: '/repairs_record',
            query: {
              roomId: this.roomId,
              roomNum: this.roomNum,
              hownerName: this.hownerName
            }
          })
      }).catch(error => {

      })

    }
  }
}
</script>

<style scoped>
.btn-submit {
  width: 300px;
}

.row-submit {
  margin-top: 40px;
  text-align: center
}
</style>
