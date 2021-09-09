<template>
  <el-row>
    <el-row v-for="(item,index) in list" :key="index">
      <!-- 房产信息 -->
      <el-card style="margin: 20px 20px 0 20px">
        <el-row slot="header" class="clearfix">
          <span style="font-size: 18px; font-weight: bold">选择绑定房产（确认身份）</span>
        </el-row>

        <el-row style="margin-bottom: 8px">
          <span class="name">业主姓名</span>
          <span class="name-right" style="float: right">{{item.hownerName}}</span>
        </el-row>
        <el-divider></el-divider>

        <el-row>
          <span class="name">手机号</span>
          <span class="name-right" style="float: right">{{item.hownerPhone}}</span>
        </el-row>
        <el-divider></el-divider>

        <el-row style="margin-bottom: 8px">
          <span class="name">居住房号</span>
          <span class="name-right" style="float: right">{{item.hownerRoomNum}}</span>
        </el-row>
      </el-card>

      <!-- 物业信息 -->
      <el-card style="margin: 20px 20px 0 20px">
        <el-row slot="header" class="clearfix">
          <span style="font-size: 18px; font-weight: bold">物业信息</span>
        </el-row>

        <el-row style="margin-bottom: 8px">
          <span class="name">物业公司</span>
          <span class="name-right" style="float: right">{{item.propertyName}}</span>
        </el-row>

        <el-divider></el-divider>

        <el-row>
          <span class="name">服务电话</span>
          <span class="name-right" style="float: right">{{item.propertyPhone}}</span>
        </el-row>

        <el-divider></el-divider>

        <el-row style="margin-bottom: 8px">
          <span class="name">地址</span>
          <span class="name-right" style="float: right">{{item.propertyAddress}}</span>
        </el-row>

      </el-card>
    </el-row>

    <!-- 验证身份 -->
    <el-row class="verify_btn">
      <el-button type="primary" class="btn" @click="onClickQueryPayment()">验证身份</el-button>
    </el-row>

    <!-- 验证弹窗 -->
    <DialogModal v-show="showModal" v-on:closeme="closeme" v-on:bindSucceed="bindSucceed" :send-data="list[0]"></DialogModal>

  </el-row>
</template>

<script>
import { getHownerMessage } from '@/api/user'
import DialogModal from '../../components/DialogModal'

export default {
  name: 'AddBuilding',
  components: { DialogModal },
  data() {
    return {
      id: '',
      list: [],
      userid: '',
      showModal: false
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.userid = this.$route.query.userid

    this.getHouseBuilding()
  },

  methods: {
    getHouseBuilding() {
      getHownerMessage(
        {
          roomId: this.id
        }
      ).then(succeed => {
        this.list = succeed.data
        this.list[0]['roomId'] = this.id
      }).catch(error => {
        console.log(error)
      })
    },

    onClickQueryPayment() {
      this.showModal = !this.showModal

      // this.$router.push(
      //   {
      //     path: '/property_bill',
      //     query: {
      //       hOwnerId: this.list[0].hownerId,
      //       roomNum: this.list[0].hownerRoomNum,
      //       userid: this.userid
      //     }
      //   }
      // )
    },

    closeme: function() {
      this.showModal = !this.showModal
    },

    bindSucceed: function() {
      this.$message('房产绑定成功')
      this.showModal = !this
      this.$router.replace('/my_property')
    }
  }

}
</script>

<style scoped>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .name {
    font-size: 12px;
    color: #999;
  }

  .name-right {
    font-size: 12px;
    color: #342e2e;
  }

  .verify_btn {
    width: auto;
    height: 40px;
    text-align: center;
  }

  .btn {
    width: 220px;
    height: 44px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
