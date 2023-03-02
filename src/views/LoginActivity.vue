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
      list: [
        {
          'id': 33,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2103414643',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'main_id': 9980,
          'updated_at': '2023-03-01 11:02:13',
          'created_at': '2023-02-27 14:59:58',
          'wheat_user': {
            'nickname': 'Lucky',
            'head_portrait': 'https:\/\/shops-1307611133.cos.ap-beijing.myqcloud.com\/APPLE\/Image\/Portrait\/1676599324146.jpg',
            'uid': 2133,
            'username': 'user_2103414643'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 9980,
            'contentType': '1',
            'targetID': 'user_2103414643',
            'fromID': 'supplier_2103376451',
            'body': '{"ID":"144115242419884113-1677639731-62706936","conversationID":"C2Cuser_2103414643","conversationType":"C2C","time":1677639731,"sequence":1102070001,"clientSequence":1102070001,"random":62706936,"priority":"Normal","nick":"王涵品牌旗舰店","avatar":"http:\/\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\/product\/20221221\/20221221013323-615.jpg","isPeerRead":false,"nameCard":"","_elements":[{"type":"TIMTextElem","content":{"text":"是"}}],"isPlaceMessage":0,"isRevoked":false,"from":"supplier_2103376451","to":"user_2103414643","flow":"out","isSystemMessage":false,"protocol":"JSON","isResend":false,"isRead":true,"status":"success","_onlineOnlyFlag":false,"_groupAtInfoList":[],"_relayFlag":false,"atUserList":[],"cloudCustomData":"","isDeleted":false,"isModified":false,"_isExcludedFromUnreadCount":false,"_isExcludedFromLastMessage":false,"clientTime":1677639731,"senderTinyID":"144115242419884113","readReceiptInfo":{},"needReadReceipt":false,"version":0,"isBroadcastMessage":false,"isSupportExtension":false,"revoker":null,"payload":{"text":"是"},"type":"TIMTextElem"}',
            'createTimeInMillis': '2023-03-01 11:02:11.000',
            'fromAppkey': 'C2Cuser_2103414643',
            'serverMessageId': '144115242419884113-1677639731-62706936',
            'created_at': '2023-03-01 11:02:13',
            'updated_at': '2023-03-01 11:02:13',
            'cloudCustomData': '',
            'targetType': 'single',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': 'Lucky',
            'targetAppkey': 'user_2103414643',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': 0,
            'platform': 'web',
            'status': 1,
            'is_latest': 1
          }
        },
        {
          'id': 22,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2102961110',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'main_id': 9935,
          'updated_at': '2023-02-27 11:43:34',
          'created_at': '2023-02-24 09:55:29',
          'wheat_user': {
            'nickname': '汇法-刘冬涵',
            'head_portrait': 'https:\/\/shops-1307611133.cos.ap-beijing.myqcloud.com\/Android\/Image\/Portrait\/1670233196795',
            'uid': 1610,
            'username': 'user_2102961110'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 9935,
            'contentType': '2',
            'targetID': 'user_2102961110',
            'fromID': 'supplier_2103376451',
            'body': '{"id":"user_2102961110","type":4,"orderInfo":{"id":"12990639788861176","describe":"\\u4eb2\\uff0c\\u8bf7\\u60a8\\u6838\\u5bf9\\u8ba2\\u5355\\u4fe1\\u606f","status":1,"shop_id":81756,"shop_name":"\\u738b\\u6db5\\u54c1\\u724c\\u65d7\\u8230\\u5e97","shop_image":"http:\\\/\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\/product\\\/20221221\\\/20221221013323-615.jpg","order_sn":"XF2202302271143337525","created_at":"2023\\\/2\\\/27 11:43:33","receivers_names":"\\u5218**","receivers_phone":"186*****996","receivers_provinces":"\\u5317\\u4eac","receivers_citys":"\\u5317\\u4eac\\u5e02","receivers_districts":"***","receivers_address":"****","shop_goods":[{"id":12990639788975568,"title":"\\u826f\\u54c1\\u94fa\\u5b50\\u624b\\u6495\\u9762\\u53052\\u65a4\\u88c5","thumb":"http:\\\/\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\/product\\\/20221228\\\/20221228064708-617.png","sku_id":92363,"sku_num":1,"spu_id":1158800,"order_child_id":12990639788861176,"price":10,"price_new":0,"refunds_status":1,"json":"{\\"tag_list\\":[\\"\\\\u4e03\\\\u5929\\\\u65e0\\\\u7406\\\\u7531\\\\u9000\\\\u6362\\",\\"\\\\u5305\\\\u90ae\\",\\"24\\\\u5c0f\\\\u65f6\\\\u5185\\\\u53d1\\\\u8d27\\"],\\"goods_attributes\\":[{\\"id\\":21679,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u957f\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21680,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u9ad8\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21681,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u5bbd\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21691,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u957f\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21692,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u9ad8\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21693,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u5bbd\\\\uff09\\",\\"value\\":\\"1\\"}],\\"is_accept\\":1}","activity_type":"N","teams_id":0,"order_child_goods_sn":"XF3202302271143336474","is_accept":1,"price_pay":0,"price_order_line":15,"status":2,"is_create_bill":0,"create_bill_error":null,"presell_amount":0,"goods_presale":null,"price_wholesale":0,"presell_split_account":null,"original_order_child_goods_sn":null,"price_im_equity":0,"im_equity_company":null,"is_wholesale":false}],"receivers_village":"*****","merchant_id":1004}}',
            'createTimeInMillis': '2023-02-27 11:02:34.000',
            'fromAppkey': '',
            'serverMessageId': '1069255377_1726499746_1677469414',
            'created_at': '2023-02-27 11:43:34',
            'updated_at': '2023-02-27 11:43:34',
            'cloudCustomData': '',
            'targetType': 'C2C',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '汇法-刘冬涵',
            'targetAppkey': 'out',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': 0,
            'platform': 'api',
            'status': 1,
            'is_latest': 1
          }
        },
        {
          'id': 15,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2103375461',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'main_id': 9943,
          'updated_at': '2023-02-27 15:06:30',
          'created_at': '2023-02-24 09:10:43',
          'wheat_user': {
            'nickname': '打小就会撩妹',
            'head_portrait': 'https:\/\/shops-1307611133.cos.ap-beijing.myqcloud.com\/APPLE\/Image\/Portrait\/1676508737611.jpg',
            'uid': 1593,
            'username': 'user_2103375461'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 9943,
            'contentType': '1',
            'targetID': 'user_2103375461',
            'fromID': 'supplier_2103376451',
            'body': '{"message":{"clientTime":1677481589,"excludedFromLastMessage":false,"excludedFromUnreadCount":false,"faceUrl":"http:\/\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\/product\/20221221\/20221221013323-615.jpg","friendRemark":"","groupID":"","hasSentReceipt":false,"isBroadcastMessage":false,"isForward":false,"isMessageSender":true,"isPeerRead":false,"isSelfRead":true,"lifeTime":1,"localCustomNumber":0,"localCustomString":"","messageBaseElements":[{"textContentBytes":[-27,-109,-90,-27,-109,-90],"elementType":1}],"messageGroupAtInfoList":[],"messageStatus":2,"messageType":1,"messageVersion":0,"msgID":"144115242419884113-1677481589-3757968210","nameCard":"","needReadReceipt":false,"nickName":"王涵品牌旗舰店","offlinePushInfo":{"androidConfig":{"description":"","notifyMode":0,"oppoChannelID":"","soundFilePath":"","title":"","vivoClassification":1},"apnsConfig":{"badgeMode":0,"description":"","iOSPushType":0,"soundFilePath":"","title":""},"description":"哦哦","extension":[123,34,97,112,112,75,101,121,34,58,34,34,44,34,99,111,110,118,101,114,115,97,116,105,111,110,84,121,112,101,34,58,34,115,105,110,103,108,101,34,44,34,116,97,114,103,101,116,73,100,34,58,34,115,117,112,112,108,105,101,114,95,50,49,48,51,51,55,54,52,53,49,34,44,34,116,97,114,103,101,116,78,97,109,101,34,58,34,-25,-114,-117,-26,-74,-75,-27,-109,-127,-25,-119,-116,-26,-105,-105,-24,-120,-80,-27,-70,-105,34,44,34,116,121,112,101,34,58,49,125],"pushFlag":0,"title":"王涵品牌旗舰店"},"platform":2,"priority":0,"random":3757968210,"receiptPeerRead":false,"receiptReadCount":0,"receiptUnreadCount":-1,"receiverTinyID":144115242414440804,"receiverUserID":"user_2103375461","revokerTinyID":0,"revokerUserID":"","senderTinyID":144115242419884113,"senderUserID":"supplier_2103376451","seq":3024610209,"serverTime":1677481590,"supportMessageExtension":false,"targetGroupMemberList":[]}}',
            'createTimeInMillis': '2023-02-27 15:06:30.000',
            'fromAppkey': 'c2c_user_2103375461',
            'serverMessageId': '144115242419884113-1677481589-3757968210',
            'created_at': '2023-02-27 15:06:30',
            'updated_at': '2023-02-27 15:06:30',
            'cloudCustomData': '',
            'targetType': 'single',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '打小就会撩妹',
            'targetAppkey': 'user_2103375461',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': 0,
            'platform': 'Android',
            'status': 1,
            'is_latest': 1
          }
        },
        {
          'id': 12,
          'userId': 'supplier_2103376451',
          'targetId': '@TGS#2PLXYRJMX',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'main_id': 9991,
          'updated_at': '2023-03-01 14:53:30',
          'created_at': '2023-02-23 18:46:47',
          'wheat_user': null,
          'wheat_group': {
            'name': '阿尔而',
            'avatar': 'http:\/\/jiguangim-1307611133.cos.ap-nanjing.myqcloud.com\/dianzan_xuanz%403x.png',
            'uid': 'supplier_2103376451',
            'im_biaoshi': '@TGS#2PLXYRJMX'
          },
          'wheat_news_rocerd': {
            'id': 9991,
            'contentType': '1',
            'targetID': '@TGS#2PLXYRJMX',
            'fromID': 'supplier_2103376451',
            'body': '{"ID":"144115242419884113-1677653609-23423283","conversationID":"GROUP@TGS#2PLXYRJMX","conversationType":"GROUP","time":1677653610,"sequence":61,"clientSequence":1432390012,"random":23423283,"priority":"Normal","nick":"王涵品牌旗舰店","avatar":"http:\/\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\/product\/20221221\/20221221013323-615.jpg","isPeerRead":false,"nameCard":"","_elements":[{"type":"TIMTextElem","content":{"text":"吞吞吐吐拖拖拖"}}],"isPlaceMessage":0,"isRevoked":false,"from":"supplier_2103376451","to":"@TGS#2PLXYRJMX","flow":"out","isSystemMessage":false,"protocol":"JSON","isResend":false,"isRead":true,"status":"success","_onlineOnlyFlag":false,"_groupAtInfoList":[],"_relayFlag":false,"atUserList":[],"cloudCustomData":"","isDeleted":false,"isModified":false,"_isExcludedFromUnreadCount":false,"_isExcludedFromLastMessage":false,"clientTime":1677653609,"senderTinyID":"144115242419884113","readReceiptInfo":{},"needReadReceipt":false,"version":0,"isBroadcastMessage":false,"isSupportExtension":false,"revoker":null,"payload":{"text":"吞吞吐吐拖拖拖"},"type":"TIMTextElem"}',
            'createTimeInMillis': '2023-03-01 14:53:30.000',
            'fromAppkey': 'GROUP@TGS#2PLXYRJMX',
            'serverMessageId': '144115242419884113-1677653609-23423283',
            'created_at': '2023-03-01 14:53:30',
            'updated_at': '2023-03-01 14:53:30',
            'cloudCustomData': '',
            'targetType': 'group',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '阿尔而',
            'targetAppkey': '@TGS#2PLXYRJMX',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': 0,
            'platform': 'web',
            'status': 1,
            'is_latest': 1
          }
        },
        {
          'id': 10,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2103315655',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'main_id': 9933,
          'updated_at': '2023-02-27 11:41:34',
          'created_at': '2023-02-23 18:37:13',
          'wheat_user': {
            'nickname': '黄秋棉',
            'head_portrait': 'https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/VvdjslBWYWkQYKrAKRjdCvQ0mXZaRKD1KBvgqcJzyqRRON30Vaiclk7sbW9iakdQ7RszS54wpkIF8Myyia2jR3asQ\/132',
            'uid': 1635,
            'username': 'user_2103315655'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 9933,
            'contentType': '1',
            'targetID': 'user_2103315655',
            'fromID': 'supplier_2103376451',
            'body': '{"ID":"144115242419884113-1677469269-51524668","conversationID":"C2Cuser_2103315655","conversationType":"C2C","time":1677469271,"sequence":1141080001,"clientSequence":1141080001,"random":51524668,"priority":"Normal","nick":"王涵品牌旗舰店","avatar":"http:\/\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\/product\/20221221\/20221221013323-615.jpg","isPeerRead":false,"nameCard":"","_elements":[{"type":"TIMTextElem","content":{"text":"31"}}],"isPlaceMessage":0,"isRevoked":false,"from":"supplier_2103376451","to":"user_2103315655","flow":"out","isSystemMessage":false,"protocol":"JSON","isResend":false,"isRead":true,"status":"success","_onlineOnlyFlag":false,"_groupAtInfoList":[],"_relayFlag":false,"atUserList":[],"cloudCustomData":"","isDeleted":false,"isModified":false,"_isExcludedFromUnreadCount":false,"_isExcludedFromLastMessage":false,"clientTime":1677469269,"senderTinyID":"144115242419884113","readReceiptInfo":{},"needReadReceipt":false,"version":0,"isBroadcastMessage":false,"isSupportExtension":false,"revoker":null,"payload":{"text":"31"},"type":"TIMTextElem"}',
            'createTimeInMillis': '2023-02-27 11:41:11.000',
            'fromAppkey': 'C2Cuser_2103315655',
            'serverMessageId': '144115242419884113-1677469269-51524668',
            'created_at': '2023-02-27 11:41:34',
            'updated_at': '2023-02-27 11:41:34',
            'cloudCustomData': '',
            'targetType': 'single',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '黄秋棉',
            'targetAppkey': 'user_2103315655',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': 0,
            'platform': 'web',
            'status': 1,
            'is_latest': 1
          }
        }
      ]

    }
  },
  created() {

  },
  mounted() {
    // console.log('组件', utils.CommonUtils.isNext('ssss哈哈哈哈哈哈'))
    console.log('方法', utils.ChatMessageUtils.getConversationList(this.list))
    // console.log('获取数据',  utils.CommonUtils.byteToString([123,34,103,111,111,100,115,73,110,102,111,34,58,123,34,103,111,111,100,115,95,97,99,116,105,118,105,116,121,34,58,34,78,34,44,34,103,111,111,100,115,95,99,111,110,102,105,103,34,58,34,-28,-67,-100,-27,-109,-127,-25,-79,-69,-27,-98,-117,32,-26,-126,-84,-25,-106,-111,46,46,46,34,44,34,103,111,111,100,115,95,99,111,118,101,114,34,58,34,104,116,116,112,115,58,47,47,115,104,97,110,103,104,97,105,112,99,45,49,51,48,55,54,49,49,49,51,51,46,99,111,115,46,97,112,45,115,104,97,110,103,104,97,105,46,109,121,113,99,108,111,117,100,46,99,111,109,47,112,114,111,100,117,99,116,47,50,48,50,50,48,56,50,52,47,50,48,50,50,48,56,50,52,48,57,52,54,48,52,45,55,48,55,46,106,112,103,34,44,34,103,111,111,100,115,95,110,97,109,101,34,58,34,-25,-108,-75,-27,-67,-79,-24,-81,-102,-25,-92,-68,-26,-126,-90,-27,-101,-94,-27,-100,-122,52,56,48,103,-26,-100,-120,-23,-91,-68,-25,-92,-68,-25,-101,-110,-27,-71,-65,-27,-68,-113,-24,-101,-117,-23,-69,-124,-24,-114,-78,-24,-109,-119,-27,-92,-102,-27,-113,-93,-27,-111,-77,-26,-100,-120,-23,-91,-68,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,-26,-104,-81,-28,-72,-83,-25,-89,-117,-23,-128,-127,-25,-92,-68,34,44,34,103,111,111,100,115,95,110,117,109,34,58,34,49,34,44,34,103,111,111,100,115,95,112,114,105,99,101,34,58,34,56,57,34,44,34,105,115,95,119,104,111,108,101,115,97,108,101,34,58,102,97,108,115,101,44,34,115,107,117,95,105,100,34,58,34,76,75,95,57,48,57,56,57,34,44,34,115,112,117,95,105,100,34,58,34,76,71,95,49,49,53,56,52,57,55,34,44,34,115,117,112,112,108,105,101,114,95,104,101,97,100,34,58,34,104,116,116,112,58,47,47,49,49,52,46,49,49,51,46,49,52,52,46,49,55,53,58,56,49,48,57,47,112,117,98,108,105,99,115,47,105,109,103,115,47,117,112,100,97,116,97,115,47,50,48,50,50,48,52,50,53,47,47,50,48,50,50,48,52,50,53,49,54,51,53,51,56,51,54,54,46,106,112,103,34,44,34,115,117,112,112,108,105,101,114,95,105,100,34,58,34,54,56,54,54,57,34,44,34,115,117,112,112,108,105,101,114,95,110,97,109,101,34,58,34,-27,-116,-105,-28,-70,-84,-26,-75,-117,-24,-81,-107,-27,-70,-105,-23,-109,-70,34,44,34,116,97,103,95,108,105,115,116,34,58,91,34,-28,-72,-125,-27,-92,-87,-26,-105,-96,-25,-112,-122,-25,-108,-79,-23,-128,-128,-26,-115,-94,34,44,34,-27,-116,-123,-23,-126,-82,34,44,34,50,52,-27,-80,-113,-26,-105,-74,-27,-122,-123,-27,-113,-111,-24,-76,-89,34,93,125,44,34,105,100,34,58,34,64,84,71,83,35,50,67,86,70,84,75,72,77,84,34,44,34,116,121,112,101,34,58,51,125]))
  },

  methods: {
    onClickLogin() {
      this.$router.push('HomeActivity')
    },

    onClickDemo() {
      this.$router.push('RulerActivity')
    }
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
