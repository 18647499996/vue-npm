<template>
  <van-row>
    <van-row v-if='isPermission'>
      <!-- 选择绑定房产 -->
      <van-search
        v-model='inputSearchValue'
        placeholder='请输入搜索关键词'
        @search=''
        @input='onSearchHouse()'
        shape='round'>
      </van-search>


      <!-- 周边房产列表 -->
      <el-card class='card-content' :body-style="{ padding:'2px'}">
        <van-cell :title='inputSearchValue === "" ? "附近的小区" : "搜索的小区"'
                  icon='https://image.lawxp.com/webimg.aspx?ImgId=104206' />

        <van-pull-refresh v-model='refreshing' @refresh='onRefresh'>
          <van-list v-model='loading' :finished='finished' finished-text='没有更多了' @load='onLoad'>
            <van-cell v-for='(item, index) in inputSearchValue === "" ? locationList : houseList' :key='index'
                      v-if='inputSearchValue === "" ? locationList.length !== 0 : houseList.length !== 0' is-link
                      @click='onItemClick(item)'>
              <template #title>
                <span>{{ item.itemName }}</span>
                <span :class='item.ifSign ? "span-sign-pre" : "span-sign" '>{{ item.ifSign ? '已认证' : '未认证' }}</span>
              </template>
            </van-cell>
          </van-list>
        </van-pull-refresh>
        <van-empty description='暂无数据' style='margin-top: 100px;margin-bottom: 300px'
                   v-if='inputSearchValue === "" ?  locationList.length === 0 : houseList.length === 0' />
      </el-card>

    </van-row>

    <!--    前往授权-->
    <van-row v-if='!isPermission'>
      <van-image src='https://image.lawxp.com/webimg.aspx?ImgId=104220' style='margin-top: 100px;margin-bottom: 30px' />
      <van-row class='row-permission'>此功能需要您完成产权认证或者</van-row>
      <van-row class='row-permission'>加入已完成认证的家庭才能使用</van-row>
      <van-row class='row-button'>
        <van-button class='btn-submit' color='#e71120' round @click='onClickPermission()'>前往认证</van-button>
      </van-row>
    </van-row>
  </van-row>
</template>

<script>
import { getRangeItem, getAllItemByName } from '@/api/HouseApi'
import { getLocationInfo } from '@/utils/LocationUtils'
import { getLocation } from '@/utils/auth'
import { Notify } from 'vant'


export default {
  name: 'SearchLocationHouse',
  data() {
    // debugger
    return {
      page: 1,
      inputSearchValue: '',
      locationObject: {},
      locationList: [],
      houseList: [],
      isPermission: false,
      loading: false,
      finished: false,
      refreshing: false
    }
  },

  mounted() {
    this.isPermission = this.$route.query.permission
    this.getLocationInfo()
  },

  methods: {
    /**
     * 输入框监听事件（搜索）
     */
    onSearchHouse() {
      console.log('输入框：', this.inputSearchValue)
      this.page = 1
      getAllItemByName(
        {
          index: this.page,
          size: 20,
          itemName: this.inputSearchValue
        }).then(succeed => {
        if (this.houseList.length >= succeed.data.count) {
          this.finished = true
        }
        this.houseList = succeed.data.list
      }).catch(error => {

      })
    },

    /**
     * 获取定位信息
     */
    getLocationInfo() {
      if (getLocation() === undefined) {
        getLocationInfo(succeed => {
          this.locationObject = succeed
          getRangeItem(
            {
              longitude: succeed.point.lng,
              latitude: succeed.point.lat,
              index: 1,
              size: 20
            }
          ).then(succeed => {
            this.locationList = succeed.data.list
            this.loading = false
            this.refreshing = false
            if (this.locationList.length >= succeed.data.count) {
              this.finished = true
            }
          }).catch(error => {

          })
        }, error => {

        })
      }else{
        this.locationObject = JSON.parse(getLocation())
      }
    },

    /**
     * 条目点击
     */
    onItemClick(item) {
      console.log(item)
      if (!item.ifSign) {
        Notify(
          {
            type: 'warning',
            message: '抱歉，该小区未与信服到家合作！'
          }
        )
        return
      }
      this.$router.push({
        path: '/new_add_house',
        query: {
          id: item.itemId,
          name: item.itemName
        }
      })
    },

    /**
     * 前往认证
     */
    onClickPermission() {
      this.isPermission = true
    },

    /**
     * 下拉刷新
     */
    onRefresh() {
      this.page = 1
      if (this.inputSearchValue === '') {
        getRangeItem(
          {
            longitude: this.locationObject.point.lng,
            latitude: this.locationObject.point.lat,
            index: this.page,
            size: 20
          }
        ).then(succeed => {
          if (this.locationList.length >= succeed.data.count) {
            this.finished = true
          }
          this.refreshing = false
          this.locationList = succeed.data.list
        }).catch(error => {

        })
      } else {
        getAllItemByName(
          {
            index: this.page,
            size: 20,
            itemName: this.inputSearchValue
          }).then(succeed => {
          if (this.houseList.length >= succeed.data.count) {
            this.finished = true
          }
          this.refreshing = false
          this.houseList = succeed.data.list
        }).catch(error => {

        })
      }
    },

    /**
     * 加载更多
     */
    onLoad() {

      this.page = this.page + 1
      if (this.inputSearchValue === '') {

        getRangeItem(
          {
            longitude: this.locationObject.point.lng,
            latitude: this.locationObject.point.lat,
            index: this.page,
            size: 20
          }
        ).then(succeed => {
          if (this.refreshing) {
            this.locationList = []
            this.refreshing = false
          }
          if (this.locationList.length >= succeed.data.count) {
            this.finished = true
          }

          this.loading = false
          this.locationList = this.locationList.concat(succeed.data.list)
        }).catch(error => {

        })

      } else {
        getAllItemByName(
          {
            index: this.page,
            size: 20,
            itemName: this.inputSearchValue
          }).then(succeed => {
          if (this.refreshing) {
            this.houseList = []
            this.refreshing = false
          }
          console.log('列表大小：', this.houseList.length)
          if (this.houseList.length >= succeed.data.count) {
            this.finished = true
          }
          this.loading = false
          this.houseList = this.houseList.concat(succeed.data.list)
        }).catch(error => {

        })
      }
    }
  }
}
</script>

<style scoped>
.card-content {
  margin: 10px 8px 10px 8px;
}


.row-permission {
  font-size: 15px;
  color: #b3b3b3;
  text-align: center;
  margin-top: 3px;
}

.row-button {
  text-align: center;
  margin-top: 40px
}

.btn-submit {
  width: 325px;
}

.span-sign {
  font-size: 10px;
  margin-left: 10px;
  background: #e71120;
  color: #ffffff;
  padding: 2px 8px 3px 8px;
  border-radius: 5px;
}

.span-sign-pre {
  font-size: 10px;
  margin-left: 10px;
  background: #03A9F4;
  color: #ffffff;
  padding: 2px 8px 2px 8px;
  border-radius: 5px;
}
</style>
