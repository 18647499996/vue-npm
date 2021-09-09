<template>
  <el-row>
    <el-row style="height: auto;background: #1890ff;padding-bottom: 25px">
      <h1 style="color: #ffffff;margin-left: 15px">{{ roomNum }}</h1>
      <!-- 导航栏 -->
      <el-card
        style="height: auto;margin: 25px 15px 0 15px"
        :body-style="{ padding: '0px' }">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="1">收费中</el-menu-item>
          <el-menu-item index="2">逾期中</el-menu-item>
          <el-menu-item index="3">已结清</el-menu-item>
        </el-menu>
        <!-- 列表数据 -->
        <el-row style="padding-top: 10px;padding-bottom: 10px" v-for="(item,index) in billList" :key="index">
          <h1 style="margin-left: 15px">{{ item.zdYear }}年</h1>
          <el-row
            v-for="(j,index) in item.billObjList"
            :key="index"
            style="margin: 0 15px 5px 15px;background: #e5f2ff;border-radius: 5px;height: 45px;">
            <span
              style="font-size: 15px;line-height: 45px;margin-left: 15px"
              @click="onItemClick(j)">{{ j.cztime }}</span>
            <i
              class="el-icon-arrow-right"
              style="float: right; line-height: 45px;margin-right: 15px"
              @click="onItemClick(j)"></i>
            <span
              style="float: right;margin-right: 15px;color: crimson;font-size: 20px;line-height: 45px"
              @click="onItemClick(j)">￥{{ j.money }}</span>
          </el-row>
        </el-row>
      </el-card>
    </el-row>

    <el-image style="width: 100%" src="https://image.hhsqu.com/webimg.aspx?ImgId=103186"/>

  </el-row>
</template>

<script>
import { getBillInfos } from '@/api/user'

export default {
  name: 'PropertyBill',
  data() {
    return {
      hOwnerId: 0,
      roomNum: '',
      activeIndex: '1',
      show: true,
      billList: [],
      userid: ''
    }
  },
  created() {

  },
  computed: {},
  mounted() {
    this.hOwnerId = this.$route.query.hOwnerId
    this.roomNum = this.$route.query.roomNum
    this.userid = this.$route.query.userid
    this.getBillInfos(1)
  },
  methods: {

    /**
     * 选中tab
     */
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.getBillInfos(key)
    },
    /**
     * 获取账单列表
     * @param index
     */
    getBillInfos(index) {
      getBillInfos(
        {
          type: index,
          hownerid: this.hOwnerId
        }).then(res => {
        this.billList = res.data.list
      }).catch(error => {
        console.log('异常信息：', error)
        this.billList = []
      })
    },

    /**
     * 条目点击
     * @param item 实体数据
     */
    onItemClick(item) {
      console.log(item)
      this.$router.push({
        path: '/bill_payment',
        query: {
          id: item.billid,
          userid: this.userid
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
