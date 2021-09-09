<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <h1>验证身份信息</h1>
      </div>
      <el-row class="modal-body">
        <h2>{{sendData['hideVerifyPhone']}}</h2>
        <el-input v-model="input" placeholder="请输入验证码" style="width: 60%;margin-top: 5px" size="small"></el-input>
        <el-button type="info" style="width: 30%;margin-left: 20px" size="small" @click="onClickSendVerify">{{hint}}
        </el-button>
      </el-row>
      <div class="modal-footer">
        <el-button type="danger" @click="closeSelf" size="small">关闭</el-button>
        <el-button type="primary" @click="confirm" size="small">确认</el-button>

      </div>
    </div>

  </div>
</template>

<script>
import { getVerifyCode, bindRoom } from '@/api/user'

export default {
  name: 'DialogModal',
  props: ['sendData'],
  data() {
    return {
      input: '',
      hint: '发送验证码',
      totalTime: 60
    }
  },

  mounted() {

  },

  methods: {
    closeSelf() {
      this.$emit('closeme')
    },

    confirm() {
      console.log('验证码', this.sendData)
      bindRoom(
        {
          roomId: this.sendData['roomId'],
          mobile: this.sendData['verifyPhone'],
          codes: this.input
        }
      ).then(succeed => {
        this.$message('房产绑定成功')
        this.$emit('bindSucceed')
      }).catch(error => {
        this.$message(error)
      })
    },

    onClickSendVerify() {
      getVerifyCode(
        {
          mobile: this.sendData['verifyPhone'],
          type: 0
        }
      ).then(succeed => {
        if (succeed.code === 0) {
          this.$message('验证码已发送到您手机，60秒后将过期')
          if (this.totalTime === 60) {
            const interval = setInterval(() => {
              console.log('计时器：', this.totalTime)
              if (this.totalTime === 0) {
                clearInterval(interval)
                this.totalTime = 60
                this.hint = '发送验证码'
              } else {
                this.totalTime--
                this.hint = this.totalTime + 's重新获取'
              }
            }, 1000)
          }
        } else {
          this.$message('验证码发送失败')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>

  /*对话窗*/
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 700px;
    margin-right: 20px;
    margin-left: 20px;

  }

  .modal-header {
    border-bottom: 1px solid #eee;
    color: #313131;
    justify-content: space-between;
    padding: 5px 0 5px 15px;
    display: flex;
  }

  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
    padding: 15px;
    display: flex;
  }

  .modal-body {
    position: relative;
    padding: 15px 10px 20px 15px;
  }
</style>
