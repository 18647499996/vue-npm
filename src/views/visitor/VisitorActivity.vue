<template>
  <van-row>
    <van-tabs v-model='active' sticky>
      <van-tab>
        <template #title>
          <van-row>
            <van-icon name='https://image.lawxp.com/webimg.aspx?ImgId=104230' size='20' style='float: left' />
            <span style='float: left;margin-left: 8px'>常用访客</span>
          </van-row>
        </template>

        <van-row class='app-shadow row-add'>
          <van-button class='button-add' icon='add-o' size='small' @click='onClickPopup(1,null)'>添加常用访问</van-button>
        </van-row>

        <van-row class='app-shadow row-list' v-for='(item,index) in 3' :key='index'>
          <van-row class='row-top'>
            <van-icon name='https://image.lawxp.com/webimg.aspx?ImgId=104232' size='22' style='float: left' />
            <span class='span-name'>郑凯</span>
            <van-row class='row-update' @click='onClickPopup(2,item)'>修改</van-row>
          </van-row>

          <van-divider />

          <van-row class='row-cell'>
            <span>性别：男</span>
          </van-row>
          <van-row class='row-cell'>
            <span>手机：18647499996</span>
          </van-row>
          <van-row class='row-cell'>
            <span>关系：其他</span>
          </van-row>
        </van-row>

        <van-row class='row-bottom'>
          <van-button class='buttom-qrcode'>生成访客码</van-button>
        </van-row>

      </van-tab>
      <van-tab>
        <template #title>
          <van-row>
            <van-icon name='https://image.lawxp.com/webimg.aspx?ImgId=104231' size='20' style='float: left' />
            <span style='float: left;margin-left: 8px'>访客记录</span>
          </van-row>
        </template>
        <van-row class='app-shadow row-list' v-for='(item,index) in 5' :key='index' @click='onClickItem(item)'>
          <van-row class='row-top-date'>
            <span class='span-date'>2021/07/08 - 2021/07/09</span>
            <van-icon name='https://image.lawxp.com/webimg.aspx?ImgId=104235' size='20' style='float: right' />
          </van-row>

          <van-divider />

          <van-row class='row-count'>
            <span class='span-count'>来访人数：7人</span>
            <span class='span-add' @click='onClickPopup(3,item)'>添加</span>
          </van-row>

          <van-row class='row-member'>
            <span class='span-count'>来访人员：老王、老李、老陈、张三、李四、王五</span>
          </van-row>
        </van-row>
      </van-tab>
    </van-tabs>

    <van-popup v-model='isPopupShow' class='popup-content' round>
      <van-row class='row-popup-title'>
        <span>{{ this.type ===  1 ? '添加常用访客' : this.type === 2 ? '修改访客' : '添加访客'}}</span>
      </van-row>
      <van-field v-model='name' label='姓名' required placeholder='请输入姓名' input-align="right" />
      <van-cell title="性别" is-link value="男" />
      <van-field v-model='name' label='手机' required placeholder='请输入手机号' input-align="right" />
      <van-cell title="关系" is-link value="朋友" />

      <van-row class='row-submit'>
        <van-button class='button-submit' round >确认</van-button>
      </van-row>
    </van-popup>
  </van-row>
</template>

<script>
export default {
  name: 'VisitorActivity',
  data() {
    return {
      type:'',
      active: '1',
      isPopupShow: false,
      name: ''
    }
  },
  mounted() {
  },
  methods:{
    /**
     * 点击弹窗
     * @param type 1.常用访客 2.访客记录
     * @param item 条目数据
     */
    onClickPopup(type,item){
      this.isPopupShow = true
      this.type = type
      console.log('点击：',item)
    },

    /**
     * 条目点击
     * @param item 条目属性
     */
    onClickItem(item){
      this.$router.push('/visitor_details_activity')
    }
  }
}
</script>

<style scoped>
.row-list {
  padding: 0 0 15px 0;
}

.row-bottom {
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 0;
}

.buttom-qrcode {
  width: 100%;
  height: 45px;
  font-size: 15px;
  background: #e71120;
  color: #FFFFFF;
}

.button-add {
  background: #ffffff;
  border: #ffffff;
  font-size: 14px;
  width: 100%
}

.row-update {
  font-size: 12px;
  color: #FFFFFF;
  float: right;
  padding: 3px 12px 3px 15px;
  background: #e71120;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

.span-name {
  font-size: 16px;
  margin-left: 5px
}

.row-cell {
  font-size: 14px;
  color: #999999;
  margin-top: 3px;
  padding-left: 15px;
}

.span-date {
  font-size: 16px;
  color: #333333;
  float: left;
}

.span-count {
  font-size: 14px;
  color: #999999;
  float: left;
}

.span-add {
  font-size: 12px;
  color: #FFFFFF;
  float: right;
  padding: 3px 12px 3px 15px;
  background: #e71120;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

.row-member {
  margin: 8px 15px 0 15px;
}

.row-top {
  padding: 15px 0 0 15px;
}

.row-top-date {
  padding: 15px 15px 0 15px;
}

.row-count {
  padding-left: 15px;
}

.row-add {
  text-align: center;
}

.row-popup-title {
  text-align: center;
  font-size: 16px;
  color: #333333;
  padding: 15px;
}

.popup-content {
  height: 42%;
  width: 80%;
}

.row-submit{
  margin-top: 40px;
  text-align: center;
}

.button-submit{
  width: 150px;
  background: #e71120;
  color: #FFFFFF;
}
</style>
