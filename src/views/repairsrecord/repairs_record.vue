<template>
  <el-row>
    <el-card style="margin: 8px 15px 8px 15px" v-for="(item,index) in list" :key="index"
             @click.native="onItemClick(item)">
      <el-row class="row-item">
        <span style="font-size: 16px;color: #342e2e;font-weight: bold">在线报修</span>
        <span style="float: right;font-size: 16px;color: #1486e2">{{item.status === 0 ? '待接单' : item.status === 1 ? '待上门' : item.status === 2 ? '已完成' : '已完成'}}</span>
      </el-row>

      <el-divider></el-divider>

      <el-row class="row-item">
        <span class="span-hint">服务地址</span>
        <span class="span-content" style="float: right;">{{item.address}}</span>
      </el-row>

      <el-row class="row-item">
        <span class="span-hint">下单人</span>
        <span class="span-content" style="float: right;">{{item.name}}</span>
      </el-row>
      <el-row class="row-item">
        <span class="span-hint">联系方式</span>
        <span class="span-content" style="float: right;">{{item.phone}}</span>
      </el-row>
      <el-row class="row-item">
        <span class="span-hint">下单时间</span>
        <span class="span-content" style="float: right;">{{item.postTime}}</span>
      </el-row>
    </el-card>
    <!--  添加维修 -->
    <el-row class="row-add-btn" @click.native="onClickAddRepairs()">添加维修</el-row>
  </el-row>
</template>

<script>
  import { getRepairList } from '@/api/user'

  export default {
    name: 'repairs_record',
    data() {
      return {
        list: [],
        page: 1,
        roomId: '',
        roomNum: '',
        hownerName: '',
      }
    },
    created() {
    },
    mounted() {
      this.roomId = this.$route.query.roomId
      this.roomNum = this.$route.query.roomNum
      this.hownerName = this.$route.query.hownerName
      this.getRepairList(this.roomId)
    },
    methods: {
      getRepairList(roomId) {
        getRepairList(roomId).then(
          succeed => {
            this.list = succeed.data
          })
      },

      onClickAddRepairs() {
        this.$router.push({
          path: '/add_repairs',
          query:{
            roomId: this.roomId,
            roomNum:this.roomNum,
            hownerName:this.hownerName
          }
        })
      }
    }
  }
</script>

<style scoped>
  .row-item {
    padding: 5px 0 5px 0;
  }

  .span-hint {
    font-size: 13px;
    color: #342e2e;
  }

  .span-content {
    font-size: 13px;
    color: #7c7c7c;
  }

  .row-add-btn {
    width: 50px;
    height: 50px;
    background-image: linear-gradient(to right, #026ebb, #1299f9);
    position: fixed;
    right: 20px;
    bottom: 30px;
    border-radius: 25px;
    line-height: 15px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    padding: 11px 8px 0 8px !important;
    box-sizing: border-box;
    z-index: 9;
  }
</style>
