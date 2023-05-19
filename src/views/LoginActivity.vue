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

import api from '@/api/HouseApi'
// import cryptoJs from 'crypto-js'

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
            'contentType': 1,
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
            'contentType': 1,
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
            'contentType': 1,
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
            'contentType': 2,
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
            'contentType': 1,
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
      message: [{
        'messageContent': {
          'elemType': 'image',
          'elemValue': 'https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/6d40-user_2103315655/a8cabb29dc894240f6ac50c426d792d6-151206.jpeg?imageMogr2/&imageView2/3/w/720/h/720',
          'imageList': [{
            'instanceID': 4514717,
            'sizeType': 1,
            'type': 0,
            'size': 1870698,
            'width': 2664,
            'height': 5920,
            'imageUrl': 'https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/6d40-user_2103315655/a8cabb29dc894240f6ac50c426d792d6-151206.jpeg?imageMogr2/',
            'url': 'blob:https://testh5.xinfushenghuo.cn/64fe4210-159a-4cbf-9bc1-9b311f7c777d'
          }, {
            'instanceID': 3932952,
            'sizeType': 3,
            'type': 1,
            'size': 0,
            'width': 198,
            'height': 440,
            'imageUrl': 'https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/6d40-user_2103315655/a8cabb29dc894240f6ac50c426d792d6-151206.jpeg?imageMogr2/&imageView2/3/w/198/h/198',
            'url': 'blob:https://testh5.xinfushenghuo.cn/64fe4210-159a-4cbf-9bc1-9b311f7c777d'
          }, {
            'instanceID': 3151043,
            'sizeType': 2,
            'type': 2,
            'size': 0,
            'width': 720,
            'height': 1600,
            'imageUrl': 'https://cos.ap-shanghai.myqcloud.com/0785-shanghai-007-sharedv4-04-1303031839/b9e1-1400664826/6d40-user_2103315655/a8cabb29dc894240f6ac50c426d792d6-151206.jpeg?imageMogr2/&imageView2/3/w/720/h/720',
            'url': 'blob:https://testh5.xinfushenghuo.cn/64fe4210-159a-4cbf-9bc1-9b311f7c777d'
          }]
        },
        'messageStatus': 2,
        'senderUserID': 'user_2103315655',
        'faceUrl': 'https://thirdwx.qlogo.cn/mmopen/vi_32/VvdjslBWYWkQYKrAKRjdCvQ0mXZaRKD1KBvgqcJzyqRRON30Vaiclk7sbW9iakdQ7RszS54wpkIF8Myyia2jR3asQ/132',
        'nickName': '黄秋棉',
        'senderTimeMillis': 1678328051,
        'platform': 'h5',
        'contentType': '3',
        'id': 10156,
        'messageCreateTime': '2023-03-09 10:14:11.000',
        'conversationType': 'single',
        'isRead': false
      }],
      messageList: [
        {
          '_index': 'news_record',
          '_type': '_doc',
          '_id': '10431',
          '_score': null,
          '_source': {
            'contentType': 2,
            'body': '{"id":"user_2102961110","type":4,"orderInfo":{"id":"12924855527816696","describe":"\\u4eb2\\uff0c\\u8bf7\\u60a8\\u6838\\u5bf9\\u8ba2\\u5355\\u4fe1\\u606f","status":1,"shop_id":81756,"shop_name":"\\u738b\\u6db5\\u54c1\\u724c\\u65d7\\u8230\\u5e97","shop_image":"http:\\/\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\/product\\/20221221\\/20221221013323-615.jpg","order_sn":"XF2202303171523528375","created_at":"2023\\/3\\/17 15:23:52","receivers_names":"\\u5218**","receivers_phone":"186*****996","receivers_provinces":"\\u5317\\u4eac","receivers_citys":"\\u5317\\u4eac\\u5e02","receivers_districts":"***","receivers_address":"****","shop_goods":[{"id":12924855527987784,"title":"\\u826f\\u54c1\\u94fa\\u5b50\\u624b\\u6495\\u9762\\u53052\\u65a4\\u88c5","thumb":"http:\\/\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\/product\\/20221228\\/20221228064708-617.png","sku_id":92363,"sku_num":1,"spu_id":1158800,"order_child_id":12924855527816696,"price":10,"price_new":0,"refunds_status":1,"json":"{\\"tag_list\\":[\\"\\\\u4e03\\\\u5929\\\\u65e0\\\\u7406\\\\u7531\\\\u9000\\\\u6362\\",\\"\\\\u5305\\\\u90ae\\",\\"24\\\\u5c0f\\\\u65f6\\\\u5185\\\\u53d1\\\\u8d27\\"],\\"goods_attributes\\":[{\\"id\\":21679,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u957f\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21680,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u9ad8\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21681,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u5bbd\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21691,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u957f\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21692,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u9ad8\\\\uff09\\",\\"value\\":\\"1\\"},{\\"id\\":21693,\\"name\\":\\"\\\\u5305\\\\u88c5\\\\u5c3a\\\\u5bf8\\\\uff08\\\\u5bbd\\\\uff09\\",\\"value\\":\\"1\\"}],\\"is_accept\\":1}","activity_type":"N","teams_id":0,"order_child_goods_sn":"XF3202303171523521225","is_accept":1,"price_pay":0,"price_order_line":15,"status":2,"is_create_bill":0,"create_bill_error":null,"presell_amount":0,"goods_presale":null,"price_wholesale":0,"presell_split_account":null,"original_order_child_goods_sn":null,"price_im_equity":0,"im_equity_company":"","is_wholesale":false}],"receivers_village":"*****","merchant_id":1004}}',
            'content': '',
            'manufacturer': 'merchant',
            'phoneModel': 'system_issued',
            'uid': 2103376451,
            'fromID': 'supplier_2103376451',
            'targetID': 'user_2102961110',
            'createTimeInMillis': '2023-03-17 15:03:54',
            'platform': 'api',
            'targetType': 'C2C',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '汇法-刘冬涵',
            'serverMessageId': '1788698901_3527009_1679037834',
            'targetAppkey': 'out',
            'fromAppkey': '',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': '',
            'cloudCustomData': '',
            'status': 1,
            'is_latest': 1,
            'ip': '',
            'updated_at': '2023-03-17 15:23:54',
            'created_at': '2023-03-17 15:23:54',
            'id': 10431
          }, 'sort': ['2023-03-17 15:03:54']
        },
        {
          '_index': 'news_record',
          '_type': '_doc',
          '_id': '10187',
          '_score': null,
          '_source': {
            'contentType': 1,
            'body': '{"random":36239279,"isExcludedFromLastMessage":false,"nickName":"135****3184","status":2,"groupID":"comGroup_214","isBroadcastMessage":false,"elemType":1,"isRead":true,"isPeerRead":true,"needReadReceipt":false,"supportMessageExtension":false,"isSelf":true,"priority":2,"timestamp":1678426711,"localCustomInt":0,"seq":12,"sender":"user_2103387846","textElem":{"text":"你好"},"offlinePushInfo":{"AndroidVIVOClassification":1,"ignoreIOSBadge":false,"iOSPushType":0,"ext":"{\\"targetName\\":\\"哇哈哈集团\\",\\"conversationType\\":\\"group\\",\\"type\\":\\"1\\",\\"targetId\\":\\"comGroup_214\\"}","title":"哇哈哈集团","AndroidOPPOChannelID":"25084","disablePush":false,"desc":"你好"},"faceURL":"https:\\\/\\\/shops-1307611133.cos.ap-beijing.myqcloud.com\\\/APPLE\\\/Image\\\/Portrait\\\/1667274960382.jpg","isExcludedFromUnreadCount":false,"msgID":"144115242417726427-1678426710-36239279"}',
            'content': '你好',
            'manufacturer': 'APPLE',
            'phoneModel': 'iPhone 6s',
            'uid': '2103387846',
            'fromID': 'user_2103387846',
            'targetID': 'comGroup_214',
            'createTimeInMillis': '2023-03-10 13:38:31.000',
            'platform': 'IOS',
            'targetType': 'group',
            'filePath': '',
            'fromName': '135****3184',
            'targetName': '哇哈哈集团',
            'serverMessageId': '144115242417726427-1678426710-36239279',
            'targetAppkey': '1400664826',
            'fromAppkey': 'group_comGroup_214',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': '',
            'cloudCustomData': '',
            'status': 1,
            'is_latest': 1,
            'ip': 1697109714,
            'updated_at': '2023-03-10 13:38:32',
            'created_at': '2023-03-10 13:38:32',
            'id': 10187
          },
          'sort': [
            '2023-03-10 13:38:31.000'
          ]
        },
        {
          '_index': 'news_record',
          '_type': '_doc',
          '_id': '10429',
          '_score': null,
          '_source': {
            'contentType': 10,
            'body': '{"text":"\\u9ec4\\u79cb\\u68c9\\u52a0\\u5165\\u7fa4\\u7ec4","clientTime":1679036894,"type":"TIMTextElem"}',
            'content': '黄秋棉加入群组',
            'manufacturer': 'system',
            'phoneModel': 'system',
            'uid': 'supplier_2103376451',
            'fromID': 'supplier_2103376451',
            'targetID': '@TGS#23EGKMMMQ',
            'createTimeInMillis': '2023-03-17 15:08:14.000',
            'platform': 'api',
            'targetType': 'group',
            'filePath': '',
            'fromName': '王涵品牌旗舰店',
            'targetName': '测试韩豆',
            'serverMessageId': 1679036894,
            'targetAppkey': 'out',
            'fromAppkey': '',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': '',
            'cloudCustomData': '',
            'status': 1,
            'is_latest': 1,
            'ip': 1697109714,
            'updated_at': '2023-03-17 15:08:14',
            'created_at': '2023-03-17 15:08:14',
            'id': 10429
          },
          'sort': ['2023-03-17 15:08:14.000']
        },
        {
          '_index': 'news_record',
          '_type': '_doc',
          '_id': '11271',
          '_score': null,
          '_source': {
            'contentType': 2,
            'group_type': 1,
            'body': '{"random":35811473,"isExcludedFromLastMessage":false,"isExcludedFromContentModeration":false,"nickName":"刘大哥","status":2,"isBroadcastMessage":false,"userID":"supplier_2103376451","elemType":2,"customElem":{"data":{"id":"supplier_2103376451","type":"3","goodsInfo":{"goods_name":"手撕面包B1","supplier_id":"81756","supplier_head":"https:\\\/\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\/product\\\/20221221\\\/20221221013323-615.jpg","goods_config":"1,1,1","goods_num":0,"supplier_name":"王涵品牌旗舰店","goods_activity":"N","goods_cover":"https:\\\/\\\/shanghaipc-1307611133.cos.ap-shanghai.myqcloud.com\\\/product\\\/20230330\\\/20230330085758-541.png","tag_list":["七天无理由退换","包邮","24小时内发货"],"is_wholesale":false,"spu_id":"LG_1158953","goods_price":"29.8"}}},"isPeerRead":false,"isRead":true,"needReadReceipt":false,"supportMessageExtension":false,"isSelf":true,"priority":2,"timestamp":1681786789,"localCustomInt":0,"seq":2412954757,"sender":"user_2103345534","offlinePushInfo":{"AndroidVIVOClassification":1,"ignoreIOSBadge":false,"iOSPushType":0,"ext":"{\\"targetName\\":\\"刘大哥\\",\\"conversationType\\":\\"single\\",\\"type\\":\\"1\\",\\"targetId\\":\\"user_2103345534\\"}","title":"刘大哥","AndroidOPPOChannelID":"1000","disablePush":false,"desc":"[商品消息]"},"faceURL":"https:\\\/\\\/shops-1307611133.cos.ap-beijing.myqcloud.com\\\/APPLE\\\/Image\\\/Portrait\\\/1679881060085.jpg","isExcludedFromUnreadCount":false,"msgID":"144115242430559263-1681786789-35811473"}',
            'content': '',
            'manufacturer': 'APPLE',
            'phoneModel': 'iPhone 12',
            'uid': '2103345534',
            'fromID': 'user_2103345534',
            'targetID': 'supplier_2103376451',
            'createTimeInMillis': '2023-04-18 10:59:49.000',
            'platform': 'IOS',
            'targetType': 'single',
            'filePath': '',
            'fromName': '刘大哥',
            'targetName': '王涵品牌旗舰店',
            'serverMessageId': '144115242430559263-1681786789-35811473',
            'targetAppkey': '1400664826',
            'fromAppkey': 'c2c_supplier_2103376451',
            'source': 'api',
            'isRevoked': '',
            'priority': '',
            'isPeerRead': '',
            'cloudCustomData': '',
            'status': 1,
            'is_latest': 1,
            'ip': 1697109714,
            'file_height': '',
            'file_width': '',
            'coverPath': '',
            'duration': '',
            'updated_at': '2023-04-18 10:59:50',
            'created_at': '2023-04-18 10:59:50',
            'id': 11271
          },
          'sort': [
            '2023-04-18 10:59:49.000'
          ]
        }
      ]
    }
  },
  created() {

  },
  mounted() {
    this.utils.NotificationUtils.applyNotificationPermissionDialog('新消息通知', '您有一条新的消息，请注意查收', 0)
    this.utils.StorageManagerUtils.saveCookies('cookies', 'liudonhan')
    this.utils.StorageManagerUtils.saveCookies('cookiesObject', this.message)
    this.utils.StorageManagerUtils.saveLocalStorage('localStorage', 'liudonghan')
    this.utils.StorageManagerUtils.saveSessionStorage('sessionStorage', 'liudonghan')
    this.utils.EventBusManagerUtils.register('liudonghan', value => {
      console.log('接收事件监听：', value)
    })
    this.utils.EventBusManagerUtils.post('liudonghan', '哈哈哈哈哈')
    this.utils.EventBusManagerUtils.unregister('liudonghan')
    this.utils.LocationManagerUtils.getCurrentLocation(result => {
      console.log('精确定位：', result)
    })
    this.utils.LocationManagerUtils.getCurrentCityLocation(result => {
      console.log('IP定位：', result)
    })
    this.utils.LocationManagerUtils.getWeatherLive('北京市', result => {
      console.log('天气数据：', result)
    })
    this.utils.LocationManagerUtils.getWeatherForecast('北京市', result => {
      console.log('预报数据：', result)
    })
    this.utils.LocationManagerUtils.getPoiSearch({ keyword: '江城明珠', city: '武汉' }, result => {

    })
    this.utils.ChatMessageUtils.login('user_2103315655', 'eJwtjU0LgkAURf-LbAt5M*MbRWjhIoTIlRbUJoKZyZf4kY4hRP89U5f33Mu5H5YfM*9tOhYx4QHbzpm0qR1ZmvHQm*4mOEjJUSGuk16X97YlzSLuA2DIfYFLY8aWOjNxRBQAsFBH1Z*pUAo1WeRqocf0kGz6y6GOz1DGohoaZeuieZos2J*yNMxfQeqs01SMydXfse8PvKsz0g__', data => {
      console.log('IM登录：', data)
    })
    this.utils.ChatMessageUtils
      .onMessageReceived(data => {
        JSON.stringify()
        console.warn('onMessageReceived：', data)
      })
      .onMessageRevoked(data => {
        console.warn('onMessageRevoked：', data)
      })
      .onGroupListUpdated(data => {
        console.warn('onGroupListUpdated：', data)
      })
      .onGroupAttributesUpdated(data => {
        console.warn('onGroupAttributesUpdated：', data)
      })
      .onNetWorkStateChange(data => {
        console.warn('onNetWorkStateChange：', data)
      })
      .onKickedOut(data => {
        console.warn('onKickedOut：', data)
      })
    console.log('cookies', this.utils.StorageManagerUtils.getCookies('cookies'))
    console.log('cookiesObject', this.utils.StorageManagerUtils.getCookiesObject('cookiesObject'))
    console.log('获取设备：', this.utils.DeviceManagerUtils.getDeviceManager())
    console.log('组件', this.utils.FormatUtils.showMessageTime(1677821808 * 1000))
    console.log('会话列表：', this.utils.ChatMessageUtils.getConversationList(this.list))
    console.log('接收消息：', this.utils.ChatMessageUtils.transformReceiveMessage(this.rec))
    console.log('消息列表：', this.utils.ChatMessageUtils.transformMessageList(this.messageList))
    console.log('获取数据', this.utils.ChatMessageUtils.isConstraintMessageSend([], this.message, 'user_2103315655', 'supplier_2103376451', 'single'))
    // for (let i = 0; i < this.message.length; i++) {
    //   console.log('是否显示：', utils.ChatMessageUtils.isShowMessageTime(i, this.message.length, this.message, this.message[i]['senderTimeMillis'] * 1000))
    // }
    // this.getOption()
    //   .then(data => {
    //     console.log('最终数据：', data)
    //   }).catch(error => {
    //
    // })
    api.getAxiosManger()
      .merger([
        this.getLiveList(),
        this.getOption()
      ], data => {
        console.log('-------：', data)
      }, error => {
        console.log('合并异常：：', error)

      })

    // console.log('验签：', this.decrypt('a6uaCcsO4eh8Px15bAGsYi2ExVlo7ileNOU6DBRm6Ig=', '961110*^', '961110*^'))
  },

  methods: {

    /**
     * 解密
     * @param message
     * @param key
     * @param iv
     * @return {string}
     */
    decrypt(message, key = '114439*^', iv = '114439*^') {
      const keyHex = cryptoJs.enc.Utf8.parse(key);
      const decrypted = cryptoJs.TripleDES.decrypt({
        // ciphertext: cryptoJs.enc.Hex.parse(ciphertext) // hex 编码解密
        ciphertext: cryptoJs.enc.Base64.parse(message) // base64 编码解密
      }, keyHex, {
        mode: cryptoJs.mode.CBC, // CBC模式
        padding: cryptoJs.pad.Pkcs7, // pkcs7padding 填充方式
        iv: cryptoJs.enc.Utf8.parse(iv) // 设置偏移量（若 ECB 模式则删除该行）
      });
      return decrypted.toString(cryptoJs.enc.Utf8); // 返回 base64 编码格式
    },

    getLiveList() {
      let fromData = new FormData()
      fromData.append('uid', 'user_2103415823')
      fromData.append('page', '1')
      fromData.append('types', '0')
      return api.getLiveApi()
        .transformSchedulers(data => {
          console.log('转换：', data)
          return data
        })
        .post('/home/getHomeIndex', fromData)
    },
    getOption() {
      return api.getShopApi()
        .isLoading(true)
        .transformSchedulers(data => {
          data.data.data[0]['name'] = '转换数据'
          console.log('转换数据：', data.data.data[0]['name'])
          return data.data
        })
        .transformSchedulers(data => {
          data.data[0]['name'] = '二次转换数据'
          console.log('二次转换数据：', data.data[0]['name'])
          return data
        })
        .get('/apiindex/get-navigation-location?', {
          is_index: 1
        })
    },

    onClickLogin() {
      this.$router.push('DemoActivity')
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
