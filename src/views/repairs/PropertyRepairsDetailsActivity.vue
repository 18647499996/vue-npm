<template>
  <van-row>
    <van-row class='app-shadow row-title-padding'>
      <!--      报修类型-->
      <van-row class='app-shadow row-title-margin'>
        <van-cell
          :title='repairObject.type === 0 ? "其他" : repairObject.type === 1 ? "房屋维修" : repairObject.type === 2 ? "水电燃气" : "公共设备"'
          :icon='repairObject.type === 0 ? "https://image.lawxp.com/webimg.aspx?ImgId=104217" :
                         repairObject.type === 1 ? "https://image.lawxp.com/webimg.aspx?ImgId=104217" :
                         repairObject.type === 2 ? "https://image.lawxp.com/webimg.aspx?ImgId=104218" : "https://image.lawxp.com/webimg.aspx?ImgId=104219" ' />
      </van-row>
      <!--      报修描述-->
      <van-row class='row-description'>{{ repairObject.describe }}</van-row>
      <!--      报修图片-->
      <van-row class='row-cover'>
        <van-col class='col-cover' v-for='(item,index) in repairObject.imgs' :key='index'
                 @click='onItemClickCover(index)'>
          <el-image class='image-cover' :src='item' fit='cover' />
        </van-col>
      </van-row>
      <!--      分割线-->
      <van-row class='row-divider' />
      <!--      报修时间-->
      <van-row class='row-date'>
        <van-icon name='underway-o' size='20' style='float: left' />
        <span class='span-date'>{{ repairObject.date }}</span>
      </van-row>
    </van-row>
    <!--      报修进度-->
    <van-row class='app-shadow'>
      <span class='span-progress'>进度状况</span>
      <van-steps direction='vertical' :active='active' active-color='#38f'>
        <van-step v-for='(item,index) in repairObject.records' :key='index'>
          <h4>{{ item.text }}</h4>
          <p>{{ item.date }}</p>
        </van-step>
      </van-steps>
    </van-row>
    <!--      物业信息-->
    <van-row class='row-property' v-if='repairObject.staff !== null'>
      <van-row>已转发责任人：{{ repairObject.staff }}</van-row>
      <van-row class='span-property-phone'>联系电话：{{ repairObject.staffPhone }}</van-row>
    </van-row>
    <!--    提交按钮-->
    <van-row class='row-submit'>
      <van-col :span='12'>
        <van-button class='btn-cancel' @click='onClickCancel'>取消报修</van-button>
      </van-col>
      <van-col :span='12'>
        <van-button class='btn-submit' @click='onClickSubmit'>完成报修</van-button>
      </van-col>
    </van-row>
  </van-row>
</template>

<script>
import { getRepairDetails, cancelRepair, completeRepairs } from '@/api/HouseApi'
import { Notify } from 'vant'
import { Dialog } from 'vant'
import { ImagePreview } from 'vant'


export default {
  name: 'PropertyRepairsDetailsActivity',
  data() {
    return {
      active: 0,
      routeParam: {},
      repairObject: {}
    }
  },
  mounted() {
    console.log('传递参数：', this.$route.query)
    this.routeParam = this.$route.query
    this.getRepairDetails()
  },
  methods: {

    /**
     * 获取报修详情
     */
    getRepairDetails() {
      getRepairDetails(
        {
          id: this.routeParam.id
        }).then(succeed => {
        this.repairObject = succeed.data
        this.active = succeed.data.records.length - 1
      }).catch(error => {

      })
    },

    /**
     * 查看大图
     */
    onItemClickCover(index) {
      ImagePreview({
        images: this.repairObject.imgs,
        startPosition: index
      })
    },

    /**
     * 取消报修
     */
    onClickCancel() {
      Dialog.confirm({
        title: '是否取消报修？'
      })
        .then(() => {
          // on confirm
          cancelRepair(
            {
              id: this.repairObject.id
            }).then(succeed => {
            Notify({
              type: 'success',
              message: '取消报修成功'
            })
            this.$router.go(-1)
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
    onClickSubmit() {
      completeRepairs(
        {
          id: this.repairObject.id,
          star: 0,
          evaluation: ''
        }).then(succeed => {
        Notify({
          type: 'success',
          message: '完成报修'
        })
        this.$router.go(-1)
      }).catch(error => {
        Notify({
          type: 'danger',
          message: error
        })
      })
    }
  }
}
</script>

<style scoped>
.row-title-padding {
  padding: 0;
}

.row-title-margin {
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.row-description {
  padding: 20px 25px 8px 25px;
  font-size: 14px;
  color: #333333;
}

.row-cover {
  padding: 5px 25px 15px 25px;
}

.col-cover {
  padding-right: 8px;
}

.image-cover {
  width: 90px;
  height: 90px;
  border-radius: 8px;
}

.row-divider {
  background: #ebebeb;
  margin: 5px 25px 10px 25px;
  height: 1px;
}

.row-date {
  padding-left: 5px;
  margin: 5px 25px 15px 25px;
  color: #999999;
}

.span-date {
  float: left;
  margin-left: 5px;
  font-size: 14px;
}

.span-progress {
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
}

.row-property {
  margin-top: 40px;
  text-align: center;
  font-size: 15px;
  color: #999999;
}

.span-property-phone {
  margin-top: 8px;
}

.row-submit {
  margin-top: 40px;
  text-align: center;
}

.btn-cancel {
  width: 140px;
  background: #cccccc;
  color: #FFFFFF;
}

.btn-submit {
  width: 140px;
  background: #e71120;
  color: #FFFFFF;
}
</style>
