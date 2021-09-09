<template>
  <van-row>
    <van-row class='row-content'>
      <van-field v-model='value' label='邮箱' placeholder='请填写认证邮箱' />
      <van-field v-model='value' label='手机号' placeholder='请填写手机号码' />
      <van-field v-model='value' label='验证码' placeholder='请填写验证码'>
        <template #button>
          <van-button class='btn-verfity' color='#3EA8FF' size='small'>获取验证码</van-button>
        </template>
      </van-field>
      <van-field v-model='value' label='设置密码' placeholder='请设置登录密码' />
      <van-field v-model='value' label='确认密码' placeholder='请确认登录密码' />
    </van-row>

    <!--    登录按钮-->
    <van-row class='row-register'>
      <van-button class='btn-register' color='#409EFF' round>注册</van-button>
      <van-row class='row-login'>已有账号，点击登录</van-row>
      <van-row class='row-clause'>
        <van-checkbox checked-color='##F59D2A' v-model='checkout'>
          <span>我已阅读并同意</span>
          <span style='color: #F59D2A'>《九不欺开放平台入驻协议》</span>
          和
          <span style='color: #F59D2A'>《隐私政策》</span>
        </van-checkbox>
      </van-row>
    </van-row>

    <StatementComponents />

  </van-row>

</template>

<script>

import StatementComponents from '../components/StatementComponents'
export default {
  name: 'BrandRegisterActivity',
  components: { StatementComponents },
  data() {
    return {}
  },
  mounted() {
    // this.isLogin()
    console.log('商城标识：', getSkipShop())
  },
  methods: {}
}
</script>

<style scoped>
.row-content {
  margin-top: 10px;
  background: #FFFFFF;
}

.btn-register {
  width: 285px;
  height: 45px;
}

.btn-verfity {
  height: 30px;
  width: 90px;
}

.row-register{
  margin-top: 10px;
  background: #FFFFFF;
  text-align: center;
  padding: 50px 0 200px 0;
  height: 100%;
  width: 100%;
  position: fixed;
}

.row-login{
  color: #409EFF;
  font-size: 13px;
  padding: 15px;
}

.row-clause{
  font-size: 12px;
  color: #333333;
  padding: 0 5px 0 8px;
}
</style>
