<template>
  <!-- 业主房产信息开始 -->
  <div class="property-wrap">
    <div v-show="isVisible" class="no-data">
      <img  src='../../assets/img/img_wallet.png'/>
      <span class="word">暂无房产信息</span>
      <span class="word">请点击添加房产进行认证添加</span>
    </div>
    <div class="propertycss" v-show="!isVisible">
      <div class="property" v-for="(item,index) in list" :key="index">
        <img src='../../assets/img/img_community.png'/>
        <div class="estate" @click="onItemClick(item)">
          <span class="building">{{item.roomNum}}</span>
          <span class="owner">业主：{{item.hownerName}}</span>
          <span class="site">地址：{{item.roomAddress}}</span>
          <span class="site">物业公司：{{item.propertyName}}</span>
          <span class="site">服务电话：{{item.propertyPhone}}</span>
        </div>
      </div>
    </div>
    <button class="add" @click="onClickAddHouse">添加房产</button>
  </div>
</template>

<script>
import { getBindRoomByUserId } from '@/api/user'
export default {
  data() {
    return {
      isVisible: false,
      list: []
    }
  },

  computed: {},

  created() {
    this.getProperty()
  },

  mounted() {

  },

  methods: {
    /**
     * 获取物业
     */
    getProperty() {
      getBindRoomByUserId().then(res => {
        this.list = res.data
      }).catch(error => {
        console.log(error)
      })
    },

    /**
     * 条目点击事件
     * @param item 当前条目数据
     */
    onItemClick(item) {
      this.$router.push(
        {
          path: '/property_bill',
          query: {
            hOwnerId: item.hOwnerId,
            roomNum: item.roomNum,
            userid: ''
          }
        }
      )
    },

    /**
     * 点击添加房产
     */
    onClickAddHouse() {
      this.$router.push({ path: '/add_house' })
    }
  }
}
</script>

<style scoped>
.property-wrap {
  width: 100%;
  float: left;
  padding: 0;
}

.no-data {
  width: 100%;
  float: left;
  margin: 0 0 50px 0;
  padding: 0 30px;
  box-sizing: border-box;
}

.property img {width:80px;height:80px;float:left;border:1px solid #eee;background:#ffffff;margin:5px 0 0 15px;border-radius:3px;}
.property image {width:80px;height:80px;float:left;border:1px solid #eee;background:#ffffff;margin:5px 0 0 15px;border-radius:3px;}

.no-data-img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 50px auto 0px auto;
}

.no-data .word {
  width: 100%;
  text-align: center;
  display: block;
  font-size: 14px;
  color: #999;
}

.propertycss {
  width: 100%;
  float: left;
  height: auto;
  padding: 10px 0;
  margin: 0 0 10px 0;
  background: #fff;
}

.property {
  width: 100%;
  float: left;
  padding: 10px 0;
  margin: 0 0 1px 0;
  background: #fff;
}

.property .estate {
  width: unset;
  margin: 0 10px 0 110px;
  height: 80px;
  color: #999;
  font-size: 13px;
  line-height: 20px;
  float: none;
}

.property .estate .building {
  width: 100%;
  float: left;
  padding: 6px 0;
  font-weight: bold;
  color: #1486e2;
  font-size: 14px;
}

.property .estate .owner {
  width: 100%;
  float: left;
}

.property .site {
  width: 100%;
  float: left;
  padding: 2px 0;
}

.add {
  width: 92%;
  float: left;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
  margin: 10px 4% 20px 4%;
  border: 1px solid #e2e2e2;
  font-weight: unset;
  font-size: 14px;
  bottom: 0px;
  background-color: #03A9F4;
  color: #fff;
}
</style>
