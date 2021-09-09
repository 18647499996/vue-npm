<template>
  <van-row>
    <van-tabs v-model='active' sticky>
      <van-tab name='1'>
        <template #title>
          <van-row>
            <el-image src='https://image.lawxp.com/webimg.aspx?ImgId=104224' class='icon-title' />
            <span class='span-title'>我要报修</span>
          </van-row>
        </template>
        <van-row>
          <!--    报修类型-->
          <van-row class='app-shadow'>
            <van-cell title='报修类型' icon='https://image.lawxp.com/webimg.aspx?ImgId=104204' is-link
                      @click='onClickRepairsType()'
                      :value='undefined === repairsTypeObject.text ? "" : repairsTypeObject.text' />
          </van-row>

          <!--    报修描述-->
          <van-row class='app-shadow'>
            <van-row class='row-reason-hint'>报修事由</van-row>
            <van-field style='background: #f8f8f8;' v-model='description' rows='5' autosize type='textarea'
                       maxlength='200'
                       placeholder='请简单描述您的报修内容' show-word-limit />
            <van-row class='row-reason-hint'>添加图片</van-row>
            <van-uploader v-model='fileList' multiple :max-count='6' />
          </van-row>

          <!--         联系人信息 -->
          <van-row class='app-shadow'>
            <van-field v-model='inputContact' label='联系人' placeholder='请输入联系人' input-align='right' clearable />
            <van-field v-model='inputPhone' label='电话号码' placeholder='请输入电话号码' type='tel' input-align='right'
                       clearable />
            <van-field label='楼房号' :placeholder='selectHouse.roomName' input-align='right' readonly is-link
                       @click='onClickSelectHouse' />
          </van-row>

          <!--          提交按钮-->
          <van-row class='row-submit'>
            <van-button class='btn-submit' color='#e71120' round @click='onClickSubmitRepairs'>提交报修</van-button>
          </van-row>
          <!--          类型弹窗-->
          <van-popup v-model='isPopupShow' round position='bottom' :style="{ height: '35%' }">
            <van-picker show-toolbar :columns='repairsTypeArray' @confirm='onConfirm' @cancel='onCancel' />
          </van-popup>
          <!--    动作面板（切换房间）-->
          <van-action-sheet v-model='showActionSheet' :actions='houseList' cancel-text='取消' close-on-click-action
                            @cancel='onActionSheetCancel' @select='onSelect' />
        </van-row>
      </van-tab>
      <van-tab name='2'>
        <template #title>
          <van-row>
            <el-image src='https://image.lawxp.com/webimg.aspx?ImgId=104225' class='icon-title' />
            <span class='span-title'>报修记录</span>
          </van-row>
        </template>
        <van-row class='app-shadow' v-for='(item,index) in repairList' :key='index' >
          <!--      标题-->
          <van-cell
            :title='item.type === 0 ? "其他" : item.type === 1 ? "房屋维修" : item.type === 2 ? "水电燃气" : "公共设备"'
            :icon='item.type === 0 ? "https://image.lawxp.com/webimg.aspx?ImgId=104217" :
            item.type === 1 ? "https://image.lawxp.com/webimg.aspx?ImgId=104217" : item.type === 2 ? "https://image.lawxp.com/webimg.aspx?ImgId=104218" : "https://image.lawxp.com/webimg.aspx?ImgId=104219" '
            is-link @click='onClickItem(item)'/>

          <!--      内容-->
          <van-row class='row-content'>
            <van-col :span='6' v-if='item.img !== null'>
              <el-image class='image-cover' fit='cover' :src='item.img' />
            </van-col>
            <van-col :span='item.img === null ? "24" : "18"'>
              <van-row class='row-description'>{{ item.describe }}</van-row>
              <van-row class='row-date'>
                <van-icon name='underway-o' size='20' style='float: left' />
                <span class='span-date'>{{ item.date }}</span>
              </van-row>
            </van-col>
          </van-row>

          <van-divider />

          <!--      按钮-->
          <van-row style='margin-top: 20px;text-align: right'>
            <van-button size='small' class='row-cancel' @click='onClickCancel(item)'>取消报修</van-button>
            <van-button size='small' class='row-complete' @click='onClickSubmit(item)'>完成报修</van-button>
          </van-row>
        </van-row>
      </van-tab>
    </van-tabs>


  </van-row>
</template>

<script>
import { getUserRoom, addRepairs, getRepairList , cancelRepair, completeRepairs } from '@/api/HouseApi'
import { Dialog, Notify } from 'vant'

export default {
  name: 'PropertyRepairsActivity',
  data() {
    return {
      active: '1',
      houseId: '',
      description: '',
      fileList: [],
      isPopupShow: false, // 维修类型弹窗
      repairsTypeArray: [
        {
          id: 0,
          text: '其他'

        },
        {
          id: 1,
          text: '房屋维修'

        },
        {
          id: 2,
          text: '水电燃气'

        },
        {
          id: 3,
          text: '公共设施'

        }
      ],
      repairsTypeObject: {}, // 维修类型
      inputContact: '', // 联系人姓名
      inputPhone: '', // 联系人电话
      selectHouse: {}, // 选中房间信息
      houseList: [], // 房间列表
      showActionSheet: false, // 显示动作面板
      repairList: [] // 维修列表

    }
  },
  mounted() {
    console.log('传递参数：', this.$route.query)
    this.routeParam = this.$route.query
    this.getUserRoom()
    this.getRepairList()
  },
  methods: {

    /**
     * 获取绑定小区房间信息
     */
    getUserRoom() {
      getUserRoom(
        {
          itemId: this.routeParam.houseId,
          type: 1
        }).then(succeed => {
        this.houseList = succeed.data
        this.selectHouse = succeed.data[0]
        this.inputContact = this.selectHouse.ownerName
        this.inputPhone = this.selectHouse.ownerPhone
      }).catch(error => {

      })
    },

    /**
     * 获取报修记录
     */
    getRepairList() {
      getRepairList(
        {
          index: 1,
          size: 10,
          itemId: this.routeParam.houseId
        }).then(succeed => {
        this.repairList = succeed.data.list
      }).catch(error => {

      })
    },

    /**
     * 点击弹窗动作面板（选择房间）
     */
    onClickSelectHouse() {
      this.showActionSheet = true
    },

    /**
     * 取消动作面板（ 关闭 ）
     */
    onActionSheetCancel() {
      this.showActionSheet = false
    },

    /**
     * 取消报修
     */
    onClickCancel(item) {
      Dialog.confirm({
        title: '是否取消报修？'
      })
        .then(() => {
          // on confirm
          cancelRepair(
            {
              id: item.id
            }).then(succeed => {
            Notify({
              type: 'success',
              message: '取消报修成功'
            })
            this.getRepairList()
          }).catch(error => {
            Notify({
              type: 'danger',
              message: error
            })
          })
        })
        .catch(() => {
          // on cancel
        })
    },

    /**
     * 完成报修
     */
    onClickSubmit(item) {
      completeRepairs(
        {
          id: item.id,
          star: 0,
          evaluation: ''
        }).then(succeed => {
        Notify({
          type: 'success',
          message: '完成报修'
        })
        this.getRepairList()
      }).catch(error => {
        Notify({
          type: 'danger',
          message: error
        })
      })
    },

    /**
     * 点击动作面板选项
     * @param e
     */
    onSelect(e) {
      console.log(e)
      this.selectHouse = e
      this.inputContact = this.selectHouse.ownerName
      this.inputPhone = this.selectHouse.ownerPhone
    },

    /**
     * 查看报修详情
     */
    onClickItem(item) {
      this.$router.push({
        path:'/property_repairs_details_activity',
        query: {
          id: item.id
        }
      })
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
    },

    /**
     * 提交报修
     */
    onClickSubmitRepairs() {
      let fromData = new FormData()
      fromData.append('describe', this.description)
      fromData.append('ownerId', this.selectHouse.ownerId)
      fromData.append('name', this.inputContact)
      fromData.append('phone', this.inputPhone)
      fromData.append('type', this.repairsTypeObject.id)
      this.fileList.map(v => {
        fromData.append('file', v.file)
      })
      addRepairs(fromData).then(succeed => {
        this.description = ''
        this.selectHouse = {}
        this.inputContact = ''
        this.inputPhone = ''
        this.repairsTypeObject = {}
        this.fileList = []
        this.active = '2'
        this.getRepairList()
        Notify(
          {
            type: 'success',
            message: '提交报修成功'
          }
        )
      }).catch(error => {

      })
    }
  }
}
</script>

<style scoped>

.row-reason-hint {
  font-size: 14px;
  color: #333333;
  padding: 5px;
}

.span-title {
  float: left;
  margin-left: 8px
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
  margin-top: 5px;
  color: #999999;
}

.span-date {
  float: left;
  margin-left: 5px;
  font-size: 13px;
}

.row-cancel {
  margin-right: 12px;
  border-radius: 5px;
  background: #f2f2f2;
  color: #333333;
  padding: 0 15px 0 15px;
}

.row-complete {
  margin-right: 12px;
  border-radius: 5px;
  background: #e00818;
  color: #FFFFFF;
  padding: 0 15px 0 15px;
}

.icon-title {
  width: 18px;
  height: 18px;
  float: left;
}

.image-cover {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
</style>
