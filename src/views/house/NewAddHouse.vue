<template>
  <el-row>
    <!--    小区信息-->
    <van-row class='app-shadow'>
      <van-cell value='小区信息' icon='https://image.lawxp.com/webimg.aspx?ImgId=104204' />
      <van-cell title='名称' :value='name' />
      <van-cell title='片区' is-link @click='onClickSelect(0)' :value='area.text === undefined ? "请选择" : area.text' />
      <van-cell title='楼号' is-link @click='onClickSelect(1)'
                :value='building.text === undefined ? "请选择" : building.text' />
      <van-cell title='单元' is-link @click='onClickSelect(2)' :value='cell.text === undefined ? "请选择" : cell.text' />
      <van-cell title='房号' is-link @click='onClickSelect(3)' :value='room.text === undefined ? "请选择" : room.text' />
    </van-row>

    <!--    业主身份-->
    <van-row class='app-shadow'>
      <van-cell value='业主信息' icon='https://image.lawxp.com/webimg.aspx?ImgId=104205' />
      <van-cell title='业主身份'>
        <template #default>
          <van-col class='col-checkbox' v-for='(item,index) in roomName' :key='index'>
            <van-checkbox checked-color='#E71120' @click='onCheckboxClick(item,1)' v-model='item.checkout'>{{ item.value
              }}
            </van-checkbox>
          </van-col>
        </template>
      </van-cell>

      <!--    手机号码-->
      <van-cell title='手机号码'>
        <template #default>
          <van-col class='col-checkbox' v-for='(item,index) in roomPhone' :key='index'>
            <van-checkbox checked-color='#E71120' @click='onCheckboxClick(item,2)' v-model='item.checkout'>{{ item.value
              }}
            </van-checkbox>
          </van-col>
        </template>
      </van-cell>


    </van-row>

    <!--    验证按钮-->
    <van-row style='text-align: center'>
      <van-button class='btn-verify' round color='#E71120' @click='onClickVerify'>验证身份</van-button>
    </van-row>

    <!--    选择器弹窗-->
    <van-popup v-model='isPopupShow' round position='bottom' :style="{ height: '35%' }">
      <van-picker title='标题' show-toolbar :columns='areaArray' @confirm='onConfirm' @cancel='onCancel'
                  @change='onChange' :loading='loadingStatus'>
        <template #title>
          <span class='span-title'>{{ selectType === 0 ? '片区' : selectType === 1 ? '楼号' : selectType === 2 ? '单元' : '房号'
            }}</span>
        </template>
      </van-picker>
    </van-popup>

    <!--    验证弹窗-->
    <van-dialog v-model='isDialogShow' title='验证身份信息' show-cancel-button @confirm='onClickConfirm'>
      <van-row class='row-verify-phone'>
        <span>{{ roomObject.phone === undefined ? '' : roomObject.phone.value }}</span>
      </van-row>
      <van-field center clearable placeholder='请输入短信验证码' v-model='inputSms'>
        <template #button>
          <van-button size='small' type='info' round @click='onClickSendVerify'>{{ hint }}</van-button>
        </template>
      </van-field>
    </van-dialog>

  </el-row>
</template>

<script>

import { getSubArea, getOwnerByRoom, getOwnerCode, bindUserOwner } from '@/api/HouseApi'
import { Notify } from 'vant'


export default {
  name: 'NewAddHouse',
  data() {
    // debugger
    return {
      id: '', // 小区id
      name: '', // 小区名称
      area: {}, // 片区
      building: {}, // 楼号
      cell: {}, // 单元
      room: {}, // 房号
      isPopupShow: false, // 弹出层（选择器）
      loadingStatus: true, // 加载状态
      isDialogShow: false, // 弹出层（验证身份）
      selectType: 0, // 选择类型

      areaArray: [], // 选择器数组 0.片区 1.楼号 2.单元 3.房号

      roomName: [], // 房间业主姓名
      roomPhone: [], // 房间业主手机号码

      roomObject: {}, // 选择业主信息
      hint: '发送验证码',

      totalTime: 60,
      inputSms: '' // 输入验证码

    }
  },

  created() {
    console.log('传递参数：', this.$route.query)
    this.id = this.$route.query.id
    this.name = this.$route.query.name
  },

  mounted() {

  },

  methods: {

    /**
     * 获取小区信息（片区、楼号、单元、房号）
     * @param id 信息id
     * @param level 类型 0.片区 1.楼号 2.单元 3.房号
     */
    getSubArea(id, level) {
      getSubArea(
        {
          id: id,
          level: level
        }
      ).then(succeed => {
        this.loadingStatus = false
        this.areaArray = succeed.data
      }).catch(error => {
        this.loadingStatus = false
        Notify({
          type: 'danger',
          message: error
        })
      })
    },

    /**
     * 获取房间信息
     * @param id 房间id
     */
    getOwnerByRoom(id) {
      getOwnerByRoom({
        roomId: id
      }).then(succeed => {
        this.roomName = succeed.data.names
        this.roomPhone = succeed.data.phones
      }).catch(error => {
        Notify({
          type: 'danger',
          message: error
        })
      })
    },

    /**
     * 选择类型
     * @param type 1.片区 2.楼号 3.单元 4.房号
     */
    onClickSelect(type) {
      this.loadingStatus = true
      this.selectType = type
      switch (type) {
        case 0:

          this.getSubArea(this.id, 0)
          break
        case 1:
          if (this.area.text === undefined) {
            Notify({ type: 'warning', message: '请选择片区' })
            return
          }
          this.getSubArea(this.area.id, this.area.level)
          break
        case 2:
          if (this.building.text === undefined) {
            Notify({ type: 'warning', message: '请选择楼号' })
            return
          }
          this.getSubArea(this.building.id, this.building.level)
          break
        case 3:
          if (this.cell.text === undefined) {
            Notify({ type: 'warning', message: '请选择单元' })
            return
          }
          this.getSubArea(this.cell.id, this.cell.level)
          break
      }
      this.isPopupShow = true
    },

    /**
     * 关闭弹窗
     */
    onCancel() {
      this.isPopupShow = false
    },

    /**
     * 选择器滚动监听
     */
    onChange(picker, values) {
      console.log('滑动监听', values)
      switch (this.selectType) {
        case 0:
          this.building = {}
          this.cell = {}
          this.room = {}
          break
        case 1:
          this.cell = {}
          this.room = {}
          break
        case 2:
          this.room = {}
          break
        case 3:
          break
      }
    },

    /**
     * 确定选择
     */
    onConfirm(e) {
      console.log(e)
      if (e === undefined) {
        Notify({ type: 'danger', message: '未获取到小区信息' })
        return
      }
      this.isPopupShow = false
      switch (this.selectType) {
        case 0:
          this.area = e
          break
        case 1:
          this.building = e
          break
        case 2:
          this.cell = e
          break
        case 3:
          this.room = e
          this.getOwnerByRoom(e.id)
          break
      }
    },

    /**
     * 点击条目（复选框）
     * @param item 条目数据
     * @param type 类型（1 业主姓名 2.业主手机号码）
     */
    onCheckboxClick(item, type) {
      console.log(item)
      if (type === 1) {
        for (let i = 0; i < this.roomName.length; i++) {
          const value = this.roomName[i]
          value.checkout = item.id === value.id
          if (value.checkout) {
            this.roomObject.name = value
          }
        }
      } else {
        for (let i = 0; i < this.roomPhone.length; i++) {
          const value = this.roomPhone[i]
          value.checkout = item.id === value.id
          if (value.checkout) {
            this.roomObject.phone = value
          }
        }
      }
    },

    /**
     * 验证按钮
     */
    onClickVerify() {
      if (this.roomObject.name === undefined) {
        Notify({type:'warning',message:'请选择业主'})
        return
      }
      if (this.roomObject.phone === undefined) {
        Notify({type:'warning',message:'请选择业主手机号码'})
        return
      }
      this.isDialogShow = true
    },

    /**
     * 发送验证码
     */
    onClickSendVerify() {
      getOwnerCode(
        {
          phoneIndex: this.roomObject.phone.index,
          roomId: this.room.id
        }
      ).then(succeed => {
        Notify({type:'warning',message:'验证码已发送到您手机，60秒后将过期'})
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

      }).catch(error => {
        Notify({type:'danger',message:error})
      })
    },

    /**
     * 绑定房产
     */
    onClickConfirm() {
      if (this.inputSms === '') {
        Notify({type:'warning',message:'请输入验证码'})
        return
      }
      this.$router.replace('/Home')
      bindUserOwner(
        {
          nameIndex: this.roomObject.name.index,
          phoneIndex: this.roomObject.phone.index,
          code: this.inputSms
        }).then(succeed => {
        Notify({type:'success',message:'绑定成功'})
        const interval = setInterval(() => {
          console.log('计时器：', this.totalTime)
          clearInterval(interval)
          this.$router.replace('/Home')
        }, 2000)

      }).catch(error => {
        Notify({type:'danger',message:error})
      })
    }

  }

}
</script>

<style scoped>
.btn-verify {
  height: 45px;
  width: 328px;
  margin-top: 40px;
}

.col-checkbox {
  padding: 0 5px 0 5px;
  font-size: 13px;
  color: #342e2e;
}

.row-verify-phone {
  font-size: 16px;
  font-weight: bold;
  padding: 15px 18px 15px 18px;
}

.span-title {
  font-size: 18px;
  font-weight: bold
}
</style>
