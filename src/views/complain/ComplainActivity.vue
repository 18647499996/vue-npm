<template>
  <van-row>
    <van-tabs v-model='active' sticky>
      <van-tab>
        <template #title>
          <van-row>
            <el-image src='https://image.lawxp.com/webimg.aspx?ImgId=104228' class='icon-title' />
            <span class='span-title'>投诉建议</span>
          </van-row>
        </template>
        <van-row>
          <!--    投诉类型-->
          <van-row class='app-shadow'>
            <van-cell title='类型' is-link
                      @click='onClickRepairsType()'
                      :value='undefined === repairsTypeObject.text ? "" : repairsTypeObject.text' />
          </van-row>

          <!--    报修描述-->
          <van-row class='app-shadow'>
            <van-field style='background: #f8f8f8;' v-model='description' rows='5' autosize type='textarea'
                       maxlength='200'
                       placeholder='请描述您的内容' show-word-limit />
            <van-row class='row-reason-hint'>添加图片</van-row>
            <van-uploader v-model='fileList' multiple :max-count='6' />
          </van-row>

          <!--    匿名-->
          <van-row class='app-shadow'>
            <van-cell center title='匿名'>
              <template #right-icon>
                <van-switch v-model='checked' size='24' active-color='#e71120' />
              </template>
            </van-cell>
          </van-row>

          <!--          提交按钮-->
          <van-row class='row-submit'>
            <van-button class='btn-submit' color='#e71120' round>提交</van-button>
          </van-row>

          <!--          类型弹窗-->
          <van-popup v-model='isPopupShow' round position='bottom' :style="{ height: '35%' }">
            <van-picker show-toolbar :columns='repairsTypeArray' @confirm='onConfirm' @cancel='onCancel' />
          </van-popup>
        </van-row>
      </van-tab>
      <van-tab>
        <template #title>
          <van-row>
            <el-image src='https://image.lawxp.com/webimg.aspx?ImgId=104229' class='icon-title' />
            <span class='span-title'>历史记录</span>
          </van-row>
        </template>
        <van-row class='app-shadow' v-for='(item,index) in 5' :key='index' @click='onClickItem()'>
          <!--      标题-->
          <van-cell title='投诉' is-link value='已处理' />

          <!--      内容-->
          <van-row class='row-content'>
            <van-col :span='6' v-if='item.url !== ""'>
              <el-image class='image-cover' fit='cover' src='https://image.lawxp.com/webimg.aspx?ImgId=104201' />
            </van-col>
            <van-col :span='item.url === "" ? "24" : "18"'>
              <van-row class='row-description'>
                <span>褛道的声控灯坏的持别严重，前几天我经过差点就受伤了，希望有关部门处理一下!  </span>
              </van-row>
              <van-row class='row-date'>
                <van-icon name='underway-o' size='15' style='float: left' />
                <span class='span-date'>2021/08/18 12:20</span>
              </van-row>
            </van-col>
          </van-row>

          <van-row class='row-divider'/>

          <!--      物业回复-->
          <van-row class='row-reply'>
            <van-row>
              <span>物业回复：</span>
            </van-row>
            <van-row>
              <span>您的反馈的情况我们i知晓，谢谢您的反馈！祝您身体健康，全家欢乐。</span>
            </van-row>
          </van-row>
        </van-row>
      </van-tab>
    </van-tabs>

  </van-row>
</template>

<script>
export default {
  name: 'ComplainActivity',
  data() {
    return {
      active: '1',
      houseId: '',
      checked: true,
      description: '',
      fileList: [],
      isPopupShow: false,
      repairsTypeArray: [
        {
          id: 1,
          text: '投诉'

        },
        {
          id: 2,
          text: '建议'

        }
      ],
      repairsTypeObject: {},
      inputContact: '',
      inputPhone: ''
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 查看报修详情
     */
    onClickItem(item) {

    },

    /**
     * 点击选择报修类型
     */
    onClickRepairsType() {
      this.isPopupShow = true
    },

    /**
     * 确认选择报修类型
     */
    onConfirm(e) {
      this.onCancel()
      console.log(e)
      this.repairsTypeObject = e
    },

    /**
     * 取消选择
     */
    onCancel() {
      this.isPopupShow = false
    }
  }
}
</script>

<style scoped>
.span-date {
  float: left;
  margin-left: 5px;
  font-size: 12px;
  color: #999999;
}

.row-reason-hint {
  font-size: 14px;
  color: #333333;
  padding: 5px;
}

.row-reply {
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #FCEEEE;
  padding: 15px;
  font-size: 13px;
  color: #e71120;
}

.span-title {
  float: left;
  margin-left: 5px
}

.row-submit {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px
}

.btn-submit {
  width: 325px
}

.row-content {
  margin: 15px 15px 0 0;
}

.row-description {
  padding-left: 5px;
  font-size: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.row-date {
  padding-left: 5px;
  margin-top: 5px
}

.row-divider{
  background: #ebebeb;
  height: 1px;
  width: 100%;
  margin-top: 10px;

}

.icon-title {
  width: 20px;
  height: 20px;
  float: left;
}

.image-cover {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
</style>
