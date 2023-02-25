<template>
  <van-row class='app'>
    <van-row class='row-tab'>
      <van-col :class='index === 0 ? "col-tab" : "col-tab on"' @click='index = 0'>密码登录</van-col>
      <van-col :class='index === 1 ? "col-tab" : "col-tab on"' @click='index = 1'>验证码登录</van-col>
    </van-row>

    <!--    用户名-->
    <van-row class='row-input'>
      <van-col :span='3' class='col-image'>
        <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104285'></van-image>
      </van-col>
      <van-col :span='21'>
        <van-field class='field-name' v-model='username' clearable placeholder='请输入用户名' />
      </van-col>
    </van-row>

    <!--    密码-->
    <van-row class='row-input'>
      <van-col :span='3' class='col-image'>
        <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104288'></van-image>
      </van-col>
      <van-col :span='21'>
        <van-field class='field-name' v-model='passwrod' clearable placeholder='请输入密码' />
      </van-col>
    </van-row>
    <!--  图形验证码-->
    <van-row class='row-input'>
      <van-col :span='3' class='col-image'>
        <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104286'></van-image>
      </van-col>
      <van-col :span='21'>
        <van-field class='field-name' v-model='passwrod' clearable placeholder='请输入图形验证码'>
          <template #button>
            <van-button class='btn-verfity' color='#cccccc' size='small'>TPZN</van-button>
          </template>
        </van-field>
      </van-col>
    </van-row>
    <!--  手机验证码-->
    <van-row class='row-input'>
      <van-col :span='3' class='col-image'>
        <van-image class='image-icon' src='https://image.lawxp.com/webimg.aspx?ImgId=104287'></van-image>
      </van-col>
      <van-col :span='21'>
        <van-field class='field-name' v-model='passwrod' clearable placeholder='请输入手机验证码'>
          <template #button>
            <span class='btn-verfity-code'>获取验证码</span>
          </template>
        </van-field>
      </van-col>
    </van-row>

    <!--    登录按钮-->
    <van-row class='row-login'>
      <van-button class='btn-login' color='#1970F3' round @click='onClickLogin'>登录</van-button>
    </van-row>


    <!--    底部背景-->
    <van-row class='row-bottom'>
      <van-image class='image-cover' src='https://image.lawxp.com/webimg.aspx?ImgId=104289'></van-image>
      <!--    免责声明-->
      <van-row class='row-statement'>
        <van-col :span='16'>
          <van-row class='row-hint-6'>汇法 | HUIFA CREDITEOH</van-row>
          <van-row class='row-hint-6'>智信合一 天下无欺</van-row>
        </van-col>
        <van-col :span='8' class='col-statement' @click='onClickDemo()'>
          <span class='btn-statement'>免责声明</span>
        </van-col>
      </van-row>
    </van-row>

    <!--    <StatementComponents />-->

  </van-row>
</template>


<script>

import utils from '../utils/index'
import { transformUTF8 } from '../utils/CommonUtils'

export default {
  components: {},
  data() {
    return {
      index: 0,
      username: '',
      passwrod: '',
      list:[{
        "_index": "news_record",
        "_type": "_doc",
        "_id": "9876",
        "_score": null,
        "_source": {
          "contentType": "1",
          "body": "{\"ID\":\"144115242414481713-1677314157-55710844\",\"conversationID\":\"C2Csupplier_2103376451\",\"conversationType\":\"C2C\",\"time\":1677314158,\"sequence\":1635570001,\"clientSequence\":1635570001,\"random\":55710844,\"priority\":\"Normal\",\"nick\":\"黄秋棉\",\"avatar\":\"https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/VvdjslBWYWkQYKrAKRjdCvQ0mXZaRKD1KBvgqcJzyqRRON30Vaiclk7sbW9iakdQ7RszS54wpkIF8Myyia2jR3asQ\/132\",\"isPeerRead\":false,\"nameCard\":\"\",\"_elements\":[{\"type\":\"TIMTextElem\",\"content\":{\"text\":\"fdsf\"}}],\"isPlaceMessage\":0,\"isRevoked\":false,\"from\":\"user_2103315655\",\"to\":\"supplier_2103376451\",\"flow\":\"out\",\"isSystemMessage\":false,\"protocol\":\"JSON\",\"isResend\":false,\"isRead\":true,\"status\":\"success\",\"_onlineOnlyFlag\":false,\"_groupAtInfoList\":[],\"_relayFlag\":false,\"atUserList\":[],\"cloudCustomData\":\"\",\"isDeleted\":false,\"isModified\":false,\"_isExcludedFromUnreadCount\":false,\"_isExcludedFromLastMessage\":false,\"clientTime\":1677314157,\"senderTinyID\":\"144115242414481713\",\"readReceiptInfo\":{},\"needReadReceipt\":false,\"version\":0,\"isBroadcastMessage\":false,\"payload\":{\"text\":\"fdsf\"},\"type\":\"TIMTextElem\"}",
          "fromID": "user_2103315655",
          "targetID": "supplier_2103376451",
          "createTimeInMillis": "2023-02-25 16:35:58.000",
          "platform": "h5",
          "targetType": "single",
          "filePath": "",
          "fromName": "黄秋棉",
          "targetName": "王涵品牌旗舰店",
          "serverMessageId": "144115242414481713-1677314157-55710844",
          "targetAppkey": "out",
          "fromAppkey": "C2Csupplier_2103376451",
          "source": "api",
          "isRevoked": false,
          "priority": "Normal",
          "isPeerRead": false,
          "cloudCustomData": "",
          "updated_at": "2023-02-25 16:36:01",
          "created_at": "2023-02-25 16:36:01",
          "id": 9876
        },
        "sort": ["2023-02-25 16:35:58.000"]
      }]

    }
  },
  created() {

  },
  mounted() {
    // console.log('组件', utils.CommonUtils.isNext('ssss哈哈哈哈哈哈'))
    console.log('方法', utils.ChatMessageUtils.transformMessageList(this.list))
    // console.log('获取数据',  utils.CommonUtils.byteToString([123,34,103,111,111,100,115,73,110,102,111,34,58,123,34,103,111,111,100,115,95,97,99,116,105,118,105,116,121,34,58,34,78,34,44,34,103,111,111,100,115,95,99,111,110,102,105,103,34,58,34,-28,-67,-100,-27,-109,-127,-25,-79,-69,-27,-98,-117,32,-26,-126,-84,-25,-106,-111,46,46,46,34,44,34,103,111,111,100,115,95,99,111,118,101,114,34,58,34,104,116,116,112,115,58,47,47,115,104,97,110,103,104,97,105,112,99,45,49,51,48,55,54,49,49,49,51,51,46,99,111,115,46,97,112,45,115,104,97,110,103,104,97,105,46,109,121,113,99,108,111,117,100,46,99,111,109,47,112,114,111,100,117,99,116,47,50,48,50,50,48,56,50,52,47,50,48,50,50,48,56,50,52,48,57,52,54,48,52,45,55,48,55,46,106,112,103,34,44,34,103,111,111,100,115,95,110,97,109,101,34,58,34,-25,-108,-75,-27,-67,-79,-24,-81,-102,-25,-92,-68,-26,-126,-90,-27,-101,-94,-27,-100,-122,52,56,48,103,-26,-100,-120,-23,-91,-68,-25,-92,-68,-25,-101,-110,-27,-71,-65,-27,-68,-113,-24,-101,-117,-23,-69,-124,-24,-114,-78,-24,-109,-119,-27,-92,-102,-27,-113,-93,-27,-111,-77,-26,-100,-120,-23,-91,-68,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,-26,-104,-81,-28,-72,-83,-25,-89,-117,-23,-128,-127,-25,-92,-68,34,44,34,103,111,111,100,115,95,110,117,109,34,58,34,49,34,44,34,103,111,111,100,115,95,112,114,105,99,101,34,58,34,56,57,34,44,34,105,115,95,119,104,111,108,101,115,97,108,101,34,58,102,97,108,115,101,44,34,115,107,117,95,105,100,34,58,34,76,75,95,57,48,57,56,57,34,44,34,115,112,117,95,105,100,34,58,34,76,71,95,49,49,53,56,52,57,55,34,44,34,115,117,112,112,108,105,101,114,95,104,101,97,100,34,58,34,104,116,116,112,58,47,47,49,49,52,46,49,49,51,46,49,52,52,46,49,55,53,58,56,49,48,57,47,112,117,98,108,105,99,115,47,105,109,103,115,47,117,112,100,97,116,97,115,47,50,48,50,50,48,52,50,53,47,47,50,48,50,50,48,52,50,53,49,54,51,53,51,56,51,54,54,46,106,112,103,34,44,34,115,117,112,112,108,105,101,114,95,105,100,34,58,34,54,56,54,54,57,34,44,34,115,117,112,112,108,105,101,114,95,110,97,109,101,34,58,34,-27,-116,-105,-28,-70,-84,-26,-75,-117,-24,-81,-107,-27,-70,-105,-23,-109,-70,34,44,34,116,97,103,95,108,105,115,116,34,58,91,34,-28,-72,-125,-27,-92,-87,-26,-105,-96,-25,-112,-122,-25,-108,-79,-23,-128,-128,-26,-115,-94,34,44,34,-27,-116,-123,-23,-126,-82,34,44,34,50,52,-27,-80,-113,-26,-105,-74,-27,-122,-123,-27,-113,-111,-24,-76,-89,34,93,125,44,34,105,100,34,58,34,64,84,71,83,35,50,67,86,70,84,75,72,77,84,34,44,34,116,121,112,101,34,58,51,125]))
  },

  methods: {
    onClickLogin() {
      this.$router.push('HomeActivity')
    },

    onClickDemo() {
      this.$router.push('RulerActivity')
    },
  }
}
</script>
<style scoped>
.app {
  background: #ffffff;
  height: 100%;
  position: fixed;
  width: 100%;
}

.row-tab {
  margin: 20px 30px 0 10px;
}

.col-tab {
  border-bottom: #1970F3 solid 1px;
  font-size: 17px;
  color: #333333;
  font-weight: bold;
  padding: 5px;
  margin-left: 10px;
}

.on {
  color: #666666;
  border: #1970F3 solid 0;
}

.image-icon {
  width: 20px;
  height: 20px;
}

.col-image {
  text-align: center;
  padding-top: 12px;
}

.row-input {
  margin: 20px 10px 20px 10px;
}

.field-name {
  border-bottom: #f2f2f2 solid 1px;
}

.btn-verfity {
  height: 30px;
  width: 60px;
}

.row-login {
  margin-top: 60px;
  text-align: center;
}

.btn-login {
  width: 285px;
  height: 45px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
}

.row-bottom {
  position: absolute;
  width: 100%;
  float: left;
  bottom: 0;
}

.image-cover {
  width: 390px;
  height: 150px;
}

.row-statement {
  position: absolute;
  width: 100%;
  height: 50px;
  float: left;
  bottom: 0;
}

.row-hint-6 {
  font-size: 11px;
  color: #FFFFFF;
  margin: 5px 20px 5px 20px;
}

.col-statement {
  text-align: center;
  margin-top: 15px;
}

.btn-statement {
  font-size: 11px;
  margin-top: 10px;
  margin-left: 20px;
  color: #1970F3;
  background: #FFFFFF;
  padding: 8px 15px 8px 15px;
}

.btn-verfity-code {
  color: #E31134;
}
</style>
