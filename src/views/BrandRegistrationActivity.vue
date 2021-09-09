<template>
  <van-row>
    <van-tabs v-model='active' @change='onChange' color='#409EFF' sticky>
      <van-tab title='企业用户' name='1'>
        <!--        企业信息-->
        <van-row class='row-content'>
          <van-field v-model='value1' label='企业属性' placeholder='请选择企业属性' is-link />
          <van-field v-model='value1' label='公司名称' placeholder='请填写公司名称' />
          <van-field v-model='value1' label='公司所在地' placeholder='请填写公司所在地' />
          <van-field v-model='value1' label='详细地址' placeholder='请填写详细地址' />
          <van-field v-model='value1' label='营业执照有效期' placeholder='请选择营业执照有效期' is-link />
        </van-row>

        <!--        上传执照-->
        <van-row class='row-upload'>
          <van-cell title='营业执照' :border='false' />
          <van-uploader class='upload' v-model='fileList' multiple :max-count='6' />
        </van-row>

        <!--        运营信息-->
        <van-row class='row-content'>
          <van-field v-model='value1' label='运营联系人' placeholder='请填写运营联系人' />
          <van-field v-model='value1' label='运营人电话' placeholder='请填写运营人电话' />
          <van-field v-model='value1' label='平台推荐人' placeholder='请填写平台推荐人' is-link />
          <van-field v-model='value1' label='店铺名称' placeholder='请填写店铺名称' />
          <van-field v-model='value1' label='统一信用代码' placeholder='请填写统一信用代码' />
        </van-row>

        <!--    提交按钮-->
        <van-row class='row-submit'>
          <van-button class='btn-submit' color='#1970F3' round>提交</van-button>
        </van-row>

      </van-tab>
      <van-tab title='个人用户' name='2'>
        <!--        身份证信息-->
        <van-row class='row-content'>
          <van-field v-model='value1' label='运营联系人' placeholder='请填写运营联系人姓名' />
          <van-field v-model='value1' label='运营人电话' placeholder='请填写运营人电话号码' />
          <van-field v-model='value1' label='身份证' placeholder='请填写身份证' />
        </van-row>
        <!--        上传身份证-->
        <van-row class='row-upload'>
          <van-cell title='上传身份证' :border='false' />
          <van-uploader class='upload' v-model='fileList' multiple :max-count='6' />
        </van-row>

        <!--        运营信息-->
        <van-row class='row-content'>
          <van-field v-model='value1' label='平台推荐人' placeholder='请填写平台推荐人' is-link />
          <van-field v-model='value1' label='店铺名称' placeholder='请填写店铺名称' />
        </van-row>

        <!--    提交按钮-->
        <van-row class='row-submit'>
          <van-button class='btn-submit' color='#1970F3' round>提交</van-button>
        </van-row>
      </van-tab>
    </van-tabs>

    <StatementComponents />
  </van-row>
</template>

<script>
import StatementComponents from '../components/StatementComponents'

export default {
  name: 'BrandRegistrationActivity',
  components: { StatementComponents },
  data() {
    return {
      active: '1',
      fileList: []
    }
  },

  mounted() {
  },

  methods: {
    onChange(e) {
      console.log(e)
      this.active = e
    }
  }
}
</script>

<style scoped>
.row-content {
  margin-top: 10px;
}

.row-upload {
  margin-top: 10px;
  background: #FFFFFF;
}

.upload {
  padding: 5px 10px 10px 10px;
}

.row-submit {
  margin-top: 60px;
  text-align: center;
  margin-bottom: 120px;
}

.btn-submit {
  width: 285px;
  height: 45px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
}
</style>
