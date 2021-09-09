<template>
  <van-row>
    <van-row class='app-shadow' v-for='(item,index) in list' :key='index' @click='onItemClick(item)'>
      <van-col :span='6'>
        <van-image src='https://image.lawxp.com/webimg.aspx?ImgId=104279' class='image-cover'></van-image>
      </van-col>

      <van-col :span='10'>
        <van-row class='van-nickname'>{{ item.itemName }}</van-row>
      </van-col>
      <van-col :span='8'>
        <van-row class='van-number'>房产数量：{{ item.roomCount }}</van-row>
      </van-col>
    </van-row>

    <van-image src='https://image.lawxp.com/webimg.aspx?ImgId=104280' class="row-screen-btn" @click="onClickAddHouse"></van-image>

  </van-row>
</template>

<script>
import { getUserItem } from '@/api/HouseApi'

export default {
  name: 'MyHouseActivity',
  data(){
    return{
      list:[]
    }
  },

  mounted() {
    getUserItem(
      {}
    ).then(succeed => {
      this.list = succeed.data
    }).catch(error => {

    })
  },
  methods:{

    /**
     * 点击添加房产
     */
    onClickAddHouse(){
      this.$router.push({
        path:'/search_location_house',
        query:{
          permission:true
        }
      })
    },

    /**
     * 条目点击事件
     * @param item 条目数据
     */
    onItemClick(item){
      console.log(item)
      this.$router.push({
        path:'/house_details_activity',
        params:{
          houseId:item.itemId
        }
      })
    }

  }
}
</script>

<style scoped>

.image-cover{
  width: 60px;
  height: 60px;
}

.van-nickname {
  padding: 20px 0 20px 0;
  font-size: 15px;
  color: #333333;

}

.van-number {
  padding: 20px 0 20px 0;
  font-size: 13px;
  color: #999999;
  text-align: right;
}

.row-screen-btn {
  width: 55px;
  height: 55px;
  position: fixed;
  right: 10px;
  bottom: 50px;
}

</style>
