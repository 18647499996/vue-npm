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
import { showMessageTime } from '../utils/FormatUtils'

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
          'conversation_type': 1,
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
          'conversation_type': 1,
          'main_id': 10001,
          'updated_at': '2023-03-02 14:45:46',
          'created_at': '2023-02-24 09:55:29',
          'wheat_user': {
            'nickname': '汇法-刘冬涵',
            'head_portrait': 'https:\/\/shops-1307611133.cos.ap-beijing.myqcloud.com\/Android\/Image\/Portrait\/1670233196795',
            'uid': 1610,
            'username': 'user_2102961110'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 10001,
            'contentType': '1',
            'targetID': 'supplier_2103376451',
            'fromID': 'user_2102961110',
            'body': '{"message":{"clientTime":1677739545,"excludedFromLastMessage":false,"excludedFromUnreadCount":false,"faceUrl":"https:\/\/shops-1307611133.cos.ap-beijing.myqcloud.com\/Android\/Image\/Portrait\/1670233196795","friendRemark":"","groupID":"","hasSentReceipt":false,"isBroadcastMessage":false,"isForward":false,"isMessageSender":true,"isPeerRead":false,"isSelfRead":true,"lifeTime":1,"localCustomNumber":0,"localCustomString":"","messageBaseElements":[{"textContentBytes":[-27,-113,-115,-27,-113,-115,-27,-92,-115,-27,-92,-115],"elementType":1}],"messageGroupAtInfoList":[],"messageStatus":2,"messageType":1,"messageVersion":0,"msgID":"144115242414458059-1677739545-1945397108","nameCard":"","needReadReceipt":false,"nickName":"汇法-刘冬涵","offlinePushInfo":{"androidConfig":{"description":"","notifyMode":0,"oppoChannelID":"","soundFilePath":"","title":"","vivoClassification":1},"apnsConfig":{"badgeMode":0,"description":"","iOSPushType":0,"soundFilePath":"","title":""},"description":"反反复复","extension":[123,34,97,112,112,75,101,121,34,58,34,34,44,34,99,111,110,118,101,114,115,97,116,105,111,110,84,121,112,101,34,58,34,115,105,110,103,108,101,34,44,34,116,97,114,103,101,116,73,100,34,58,34,117,115,101,114,95,50,49,48,50,57,54,49,49,49,48,34,44,34,116,97,114,103,101,116,78,97,109,101,34,58,34,-26,-79,-121,-26,-77,-107,45,-27,-120,-104,-27,-122,-84,-26,-74,-75,34,44,34,116,121,112,101,34,58,49,125],"pushFlag":0,"title":"汇法-刘冬涵"},"platform":2,"priority":0,"random":1945397108,"receiptPeerRead":false,"receiptReadCount":0,"receiptUnreadCount":-1,"receiverTinyID":144115242419884113,"receiverUserID":"supplier_2103376451","revokerTinyID":0,"revokerUserID":"","senderTinyID":144115242414458059,"senderUserID":"user_2102961110","seq":50311392,"serverTime":1677739546,"supportMessageExtension":false,"targetGroupMemberList":[]}}',
            'createTimeInMillis': '2023-03-02 14:45:46.000',
            'fromAppkey': 'c2c_supplier_2103376451',
            'serverMessageId': '144115242414458059-1677739545-1945397108',
            'created_at': '2023-03-02 14:45:46',
            'updated_at': '2023-03-02 14:45:46',
            'cloudCustomData': '',
            'targetType': 'single',
            'filePath': '',
            'fromName': '汇法-刘冬涵',
            'targetName': '王涵品牌旗舰店',
            'targetAppkey': 'supplier_2103376451',
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
          'id': 15,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2103375461',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'conversation_type': 1,
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
          'id': 14,
          'userId': 'supplier_2103376451',
          'targetId': 'administrator',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'conversation_type': 1,
          'main_id': 9938,
          'updated_at': '2023-02-27 14:59:58',
          'created_at': '2023-02-24 09:08:45',
          'wheat_user': {
            'nickname': '系统管理员',
            'head_portrait': 'https:\/\/jiguangim-1307611133.cos.ap-nanjing.myqcloud.com\/WechatIMG420.jpeg',
            'uid': 2161,
            'username': 'administrator'
          },
          'wheat_group': null,
          'wheat_news_rocerd': {
            'id': 9938,
            'contentType': '2',
            'targetID': 'supplier_2103376451',
            'fromID': 'administrator',
            'body': '{"SyncOtherMachine":1,"MsgRandom":4076695529,"To_Account":"supplier_2103376451","From_Account":"administrator","MsgBody":[{"MsgType":"TIMCustomElem","MsgContent":{"Data":"{\\"id\\":\\"user_2103414643\\",\\"type\\":4,\\"orderInfo\\":{\\"id\\":\\"12990145532647736\\",\\"describe\\":\\"\\\\u4eb2\\\\uff0c\\\\u8bf7\\\\u60a8\\\\u6838\\\\u5bf9\\\\u8ba2\\\\u5355\\\\u4fe1\\\\u606f\\",\\"status\\":1,\\"shop_id\\":81756,\\"shop_name\\":\\"\\\\u738b\\\\u6db5\\\\u54c1\\\\u724c\\\\u65d7\\\\u8230\\\\u5e97\\",\\"shop_image\\":\\"http:\\\\\\\/\\\\\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\\\\\/product\\\\\\\/20221221\\\\\\\/20221221013323-615.jpg\\",\\"order_sn\\":\\"XF2202302271459570260\\",\\"created_at\\":\\"2023\\\\\\\/2\\\\\\\/27 14:59:57\\",\\"receivers_names\\":\\"\\\\u82a6\\",\\"receivers_phone\\":\\"150*****500\\",\\"receivers_provinces\\":\\"\\\\u5317\\\\u4eac\\",\\"receivers_citys\\":\\"\\\\u5317\\\\u4eac\\\\u5e02\\",\\"receivers_districts\\":\\"***\\",\\"receivers_address\\":\\"********************************************************************************************************************************************************************************************************************\\",\\"shop_goods\\":[{\\"id\\":12990145531875520,\\"title\\":\\"\\\\u624b\\\\u6495\\\\u9762\\\\u5305\\\\u3010\\\\u6b63\\\\u54c14\\\\u65a4\\\\u88c5\\\\u3011\\",\\"thumb\\":\\"http:\\\\\\\/\\\\\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\\\\\/product\\\\\\\/20221220\\\\\\\/20221220101919-989.png\\",\\"sku_id\\":92276,\\"sku_num\\":1,\\"spu_id\\":1158895,\\"order_child_id\\":12990145532647736,\\"price\\":28,\\"price_new\\":0,\\"refunds_status\\":1,\\"json\\":\\"{\\\\\\"tag_list\\\\\\":[\\\\\\"\\\\\\\\u4e03\\\\\\\\u5929\\\\\\\\u65e0\\\\\\\\u7406\\\\\\\\u7531\\\\\\\\u9000\\\\\\\\u6362\\\\\\",\\\\\\"\\\\\\\\u5305\\\\\\\\u90ae\\\\\\",\\\\\\"24\\\\\\\\u5c0f\\\\\\\\u65f6\\\\\\\\u5185\\\\\\\\u53d1\\\\\\\\u8d27\\\\\\"],\\\\\\"goods_attributes\\\\\\":[{\\\\\\"id\\\\\\":21401,\\\\\\"name\\\\\\":\\\\\\"\\\\\\\\u5305\\\\\\\\u88c5\\\\\\\\u5c3a\\\\\\\\u5bf8\\\\\\\\uff08\\\\\\\\u957f\\\\\\\\uff09\\\\\\",\\\\\\"value\\\\\\":\\\\\\"2\\\\\\"},{\\\\\\"id\\\\\\":21402,\\\\\\"name\\\\\\":\\\\\\"\\\\\\\\u5305\\\\\\\\u88c5\\\\\\\\u5c3a\\\\\\\\u5bf8\\\\\\\\uff08\\\\\\\\u9ad8\\\\\\\\uff09\\\\\\",\\\\\\"value\\\\\\":\\\\\\"3\\\\\\"},{\\\\\\"id\\\\\\":21403,\\\\\\"name\\\\\\":\\\\\\"\\\\\\\\u5305\\\\\\\\u88c5\\\\\\\\u5c3a\\\\\\\\u5bf8\\\\\\\\uff08\\\\\\\\u5bbd\\\\\\\\uff09\\\\\\",\\\\\\"value\\\\\\":\\\\\\"3\\\\\\"}],\\\\\\"is_accept\\\\\\":1}\\",\\"activity_type\\":\\"N\\",\\"teams_id\\":0,\\"order_child_goods_sn\\":\\"XF3202302271459571412\\",\\"is_accept\\":1,\\"price_pay\\":0,\\"price_order_line\\":30,\\"status\\":2,\\"is_create_bill\\":0,\\"create_bill_error\\":null,\\"presell_amount\\":0,\\"goods_presale\\":null,\\"price_wholesale\\":28,\\"presell_split_account\\":null,\\"original_order_child_goods_sn\\":null,\\"price_im_equity\\":0,\\"im_equity_company\\":null,\\"is_wholesale\\":true}],\\"receivers_village\\":\\"*****\\",\\"merchant_id\\":1004}}","Desc":"[\\u8ba2\\u5355\\u4fe1\\u606f]","Ext":"{\\"type\\":2,\\"targetName\\":\\"administrator\\",\\"targetId\\":\\"administrator\\",\\"conversationType\\":\\"single\\"}","Sound":"4444"}}],"OfflinePushInfo":{"MsgType":"TIMCustomElem","MsgContent":"{\\"type\\":2,\\"targetName\\":\\"administrator\\",\\"targetId\\":\\"administrator\\",\\"conversationType\\":\\"single\\"}"}}',
            'createTimeInMillis': '2023-02-27 14:02:58.000',
            'fromAppkey': '',
            'serverMessageId': '1051879294_4076695529_1677481198',
            'created_at': '2023-02-27 14:59:58',
            'updated_at': '2023-02-27 14:59:58',
            'cloudCustomData': '',
            'targetType': 'C2C',
            'filePath': '',
            'fromName': 'administrator',
            'targetName': '王涵品牌旗舰店',
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
          'id': 10,
          'userId': 'supplier_2103376451',
          'targetId': 'user_2103315655',
          'status': 1,
          'unread': 0,
          'is_online': 1,
          'conversation_type': 1,
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
      ],
      rec: {
        'ID': '144115242414458059-1677754899-360774950',
        'conversationID': 'C2Cuser_2102961110',
        'conversationType': 'C2C',
        'time': 1677754900,
        'sequence': 867934681,
        'clientSequence': 867934681,
        'random': 360774950,
        'priority': 'Normal',
        'nick': '汇法-刘冬涵',
        'avatar': 'https://shops-1307611133.cos.ap-beijing.myqcloud.com/Android/Image/Portrait/1670233196795',
        'isPeerRead': false,
        'nameCard': '',
        '_elements': [{ 'type': 'TIMTextElem', 'content': { 'text': '试试' } }],
        'isPlaceMessage': 0,
        'isRevoked': false,
        'from': 'user_2102961110',
        'to': 'supplier_2103376451',
        'flow': 'in',
        'isSystemMessage': false,
        'protocol': 'JSON',
        'isResend': false,
        'isRead': false,
        'status': 'success',
        '_onlineOnlyFlag': false,
        '_groupAtInfoList': [],
        '_relayFlag': false,
        'atUserList': [],
        'cloudCustomData': '',
        'isDeleted': false,
        'isModified': false,
        '_isExcludedFromUnreadCount': false,
        '_isExcludedFromLastMessage': false,
        'clientTime': 1677754899,
        'senderTinyID': '144115242414458059',
        'readReceiptInfo': {},
        'needReadReceipt': false,
        'version': 0,
        'isBroadcastMessage': false,
        'isSupportExtension': false,
        'revoker': null,
        'payload': { 'text': '试试' },
        'type': 'TIMTextElem'
      },
      message:[
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "57"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677821808,
          "platform": "web",
          "contentType": "1",
          "id": 10046,
          "messageCreateTime": "2023-03-03 13:36:48.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "58"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677821909,
          "platform": "web",
          "contentType": "1",
          "id": 10047,
          "messageCreateTime": "2023-03-03 13:38:29.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "59"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677822021,
          "platform": "web",
          "contentType": "1",
          "id": 10048,
          "messageCreateTime": "2023-03-03 13:40:21.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "60"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677822078,
          "platform": "web",
          "contentType": "1",
          "id": 10049,
          "messageCreateTime": "2023-03-03 13:41:18.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "61"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677822175,
          "platform": "web",
          "contentType": "1",
          "id": 10050,
          "messageCreateTime": "2023-03-03 13:42:55.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "62"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677823419,
          "platform": "web",
          "contentType": "1",
          "id": 10053,
          "messageCreateTime": "2023-03-03 14:03:39.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "64"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677824175,
          "platform": "web",
          "contentType": "1",
          "id": 10054,
          "messageCreateTime": "2023-03-03 14:16:15.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "image",
            "elemValue": "https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/9f9a-supplier_2103376451/47cbf6b252c2f92261a4cdc0e0fc8486-579343.png?imageMogr2/",
            "imageList": [
              {
                "instanceID": 5726879,
                "sizeType": 1,
                "type": 0,
                "size": 1237,
                "width": 65,
                "height": 65,
                "imageUrl": "https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/9f9a-supplier_2103376451/47cbf6b252c2f92261a4cdc0e0fc8486-579343.png?imageMogr2/",
                "url": "blob:http://localhost:8080/9e4bb111-c534-4eac-81a2-cd5faa076d5b"
              },
              {
                "instanceID": 7492882,
                "sizeType": 3,
                "type": 1,
                "size": 0,
                "width": 65,
                "height": 65,
                "imageUrl": "https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/9f9a-supplier_2103376451/47cbf6b252c2f92261a4cdc0e0fc8486-579343.png?imageMogr2/",
                "url": "blob:http://localhost:8080/9e4bb111-c534-4eac-81a2-cd5faa076d5b"
              },
              {
                "instanceID": 6856205,
                "sizeType": 2,
                "type": 2,
                "size": 0,
                "width": 65,
                "height": 65,
                "imageUrl": "https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/9f9a-supplier_2103376451/47cbf6b252c2f92261a4cdc0e0fc8486-579343.png?imageMogr2/",
                "url": "blob:http://localhost:8080/9e4bb111-c534-4eac-81a2-cd5faa076d5b"
              }
            ]
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677825005,
          "platform": "web",
          "contentType": "3",
          "id": 10055,
          "messageCreateTime": "2023-03-03 14:30:05.000",
          "conversationType": "single",
          "isRead": ""
        },
        {
          "messageContent": {
            "elemType": "text",
            "elemValue": "222"
          },
          "messageStatus": 2,
          "senderUserID": "supplier_2103376451",
          "faceUrl": "http://shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com/product/20221221/20221221013323-615.jpg",
          "nickName": "王涵品牌旗舰店",
          "senderTimeMillis": 1677825198,
          "platform": "web",
          "contentType": "1",
          "id": 10058,
          "messageCreateTime": "2023-03-03 14:33:18.000",
          "conversationType": "single",
          "isRead": ""
        }
      ]
    }
  },
  created() {

  },
  mounted() {
    // console.log('组件', utils.FormatUtils.showMessageTime(1677821808 * 1000))
    console.log('方法', utils.ChatMessageUtils.getConversationList(this.list))
    // console.log('接收消息：',utils.ChatMessageUtils.transformReceiveMessage(this.rec))
    // console.log('获取数据',  utils.ChatMessageUtils.isConstraintMessageSend([],this.message,'user_2103315655','supplier_2103376451','single'))
    for (let i = 0; i < this.message.length; i++) {
      console.log('是否显示：',utils.ChatMessageUtils.isShowMessageTime(i,this.message.length,this.message,this.message[i]['senderTimeMillis'] * 1000))
    }
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
