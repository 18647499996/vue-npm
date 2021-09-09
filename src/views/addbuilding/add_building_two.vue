<template>
  <div class="binding">
    <!--Begin-->
    <span class="headline">选择绑定房产（选择片区/院号）</span>
    <div class="city-wrap">
      <div class="community" v-for="(item,index) in list" :key="index">
        <div class="item" @click="onItemClick(item)">
            <span>
              <span class="name">{{item.name}}</span>
              <span class="enter"></span>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBuild } from '@/api/user'

export default {
  name: 'AddBuilding',
  data() {
    return {
      id: '',
      list: [],
      userid: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.userid = this.$route.query.userid
    this.getHouseBuilding()
  },

  methods: {
    getHouseBuilding() {
      getBuild(
        {
          zoneId: this.id
        }
      ).then(succeed => {
        this.list = succeed.data
      }).catch(error => {
        console.log(error)
      })
    },

    onItemClick(item) {
      this.$router.push(
        {
          path: '/add_building_three',
          query: {
            id: item.id,
            userid: this.userid
          }
        }
      )
    }
  }

}
</script>

<style scoped>
  .binding {
    float: left;
    width: 100%;
  }

  .binding .headline {
    width: 100%;
    float: left;
    font-size: 16px;
    padding: 0 0 10px 0px;
    border-bottom: 0;
    font-weight: bold;
    color: #555;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
  }

  .search-input input {
    line-height: 32px;
    height: 32px;
    font-size: 14px;
    width: 100%;
    float: left;
  }

  .city-wrap {
    float: left;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    margin: 5px 0 0 0;
    background: #fff;
  }

  .community {
    float: left;
    width: 100%;
  }

  .community .item {
    float: left;
    width: 100%;
    padding: 10px 0px;
    border-bottom: 1px solid #eee;
  }

  .community .item .name {
    float: left;
    width: 80%;
    color: #333;
    font-size: 14px;
  }

  .community .item .enter {
    float: right;
    color: #666;
    width: 16px;
    height: 16px;
    margin: 5px 0px 3px 15px;
    background: url(https://image.9buqi.com/WebImage.aspx?imgId=Z5HGwnl3w6M=) no-repeat;
    background-size: 13px;
  }
</style>
