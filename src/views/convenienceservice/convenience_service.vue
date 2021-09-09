<template>
  <el-row>
    <!--    <van-tabs v-model="activeIndex" color="#1890ff" title-active-color="#1890ff">-->
    <!--      <van-tab title="报修">-->
    <!--        <el-card style="margin: 8px 15px 8px 15px" v-for="(item,index) in list" :key="index">-->
    <!--          <el-row @click.native="onItemClick(item)">-->
    <!--            <el-col :span="8">-->
    <!--              <img src="../../assets/img/img_community.png"/>-->
    <!--            </el-col>-->
    <!--            <el-col :span="16">-->
    <!--              <el-row class="row-item">-->
    <!--                <span style="font-weight: bold;font-size: 15px;color: #1486e2">{{ item.roomNum }}</span>-->
    <!--              </el-row>-->
    <!--              <el-row class="row-item">-->
    <!--                <span>业主：{{ item.hownerName }}</span>-->
    <!--              </el-row>-->
    <!--              <el-row class="row-item">-->
    <!--                <span>地址：{{ item.roomAddress }}</span>-->
    <!--              </el-row>-->
    <!--              <el-row class="row-item">-->
    <!--                <span>物业公司：{{ item.propertyName }}</span>-->
    <!--              </el-row>-->
    <!--              <el-row class="row-item">-->
    <!--                <span>服务电话：{{ item.propertyPhone }}</span>-->
    <!--              </el-row>-->
    <!--            </el-col>-->
    <!--          </el-row>-->
    <!--        </el-card>-->
    <!--      </van-tab>-->
    <!--      <van-tab title="油卡充值">-->
    <!--        <el-card style="margin: 8px 15px 8px 15px;" :body-style="{ padding:'5px'}">-->
    <!--          <van-cell title="中石化加油" icon="https://image.lawxp.com/webimg.aspx?ImgId=103964" is-link-->
    <!--                    @click.native="onClickRefuel"/>-->
    <!--        </el-card>-->
    <!--      </van-tab>-->
    <!--      <van-tab title="停车">-->

    <!--      </van-tab>-->
    <!--    </van-tabs>-->
    <el-card style="margin: 8px 15px 8px 15px" v-for="(item,index) in list" :key="index">
      <el-row @click.native="onItemClick(item)">
        <el-col :span="8">
          <img src='../../assets/img/img_community.png'/>
        </el-col>
        <el-col :span="16">
          <el-row class="row-item">
            <span style="font-weight: bold;font-size: 15px;color: #1486e2">{{ item.roomNum }}</span>
          </el-row>
          <el-row class="row-item">
            <span>业主：{{ item.hownerName }}</span>
          </el-row>
          <el-row class="row-item">
            <span>地址：{{ item.roomAddress }}</span>
          </el-row>
          <el-row class="row-item">
            <span>物业公司：{{ item.propertyName }}</span>
          </el-row>
          <el-row class="row-item">
            <span>服务电话：{{ item.propertyPhone }}</span>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <el-row class="verify_btn">
      <el-button class="btn" type="primary" @click="onClickAddHouse">添加房产</el-button>
    </el-row>

  </el-row>
</template>

<script>
import { getBindRoomByUserId } from '@/api/user'
import { getToken } from '@/utils/auth'

export default {
  name: 'ConvenienceService',
  data() {
    return {
      activeIndex: 0,
      list: []
    }
  },
  computed: {},
  mounted() {
    this.getBindRoomByUserId(1)
  },
  methods: {

    getBindRoomByUserId() {
      getBindRoomByUserId().then(succeed => {
        this.list = succeed.data
      }).catch(error => {

      })
    },

    /**
     * 点击条目
     * @param item
     */
    onItemClick(item) {
      console.log('点击条目：', item)
      this.$router.push(
        {
          path: '/repairs_record',
          query: {
            roomId: item.roomId,
            roomNum: item.roomNum,
            hownerName: item.hownerName
          }
        }
      )
    },

    /**
     * 点击添加房产
     */
    onClickAddHouse() {
      this.$router.push({ path: '/add_house' })
    },

    /**
     * 中石化加油页面跳转
     */
    onClickRefuel() {
      window.open('https://cvnc.hhsqu.com/#/Sinopec/index?OpenId=' + getToken())
    }
  }
}
</script>

<style scoped>

.row-item {
  padding: 2px 0 2px 0;
}

.verify_btn {
  width: auto;
  height: 40px;
  text-align: center;
}

.btn {
  width: 300px;
  height: 44px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
