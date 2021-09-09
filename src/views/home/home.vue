<template>
  <el-row style='background: #f8f8f8'>
    <!--    定位城市（小区）-->
    <van-row class='row-location' @click='onClickLocationCity'>
      <el-image class='img-location' src='https://image.lawxp.com/webimg.aspx?ImgId=104206' />
      <span class='span-location'>{{ selectHouse.itemName === undefined ? '未绑定小区' : selectHouse.itemName }}</span>
      <!--      <van-icon name="arrow-down" size='20' style='margin-left: 5px'/>-->
    </van-row>

    <!--    导航轮播-->
    <van-swipe class='swipe-banner' :autoplay='5000' indicator-color='white'>
      <van-swipe-item v-for='(item,index) in list' :key='index'>
        <el-image class='img-banner' :src='item.img' @click='onItemClick(item)'></el-image>
      </van-swipe-item>
    </van-swipe>

    <!--    公告通知-->
    <van-notice-bar
      class='notice-bar'
      left-icon='volume-o'
      text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
      mode='link'
      background='#ffffff'
      color='#000000'
      @click='onClickNoticeBar()' />

    <!--    菜单-->
    <van-row class='row-grid-column'>
      <van-grid :border='false' :column-num='4'>
        <van-grid-item v-for='(item,index) in menu' :key='index' @click='onClickMenu(item)'>
          <el-image class='img-menu-icon' :src='item.icon' />
          <el-row class='row-menu-name'>{{ item.name }}</el-row>
        </van-grid-item>
      </van-grid>
    </van-row>

    <!--    活动列表-->
    <van-row class='row-activity' v-for='(item,index) in activity' :key='index'>
      <el-image class='item-image' :src='item.banner'
                @click='onItemActivityClick(item)'></el-image>
    </van-row>

    <!--    小区切换弹窗-->
    <van-popup v-model='showPopup' round class='popup-hous-list'>
      <van-row class='row-popup-title'>切换小区</van-row>
      <van-radio-group v-model='radio'>
        <van-cell :title='item.itemName' v-for='(item,index) in user.items' :key='index'
                  @click='onClickItemSelectedHous(item)'>
          <template #right-icon>
            <van-radio :name='item.itemId' />
          </template>
        </van-cell>
      </van-radio-group>
    </van-popup>


  </el-row>
</template>

<script>
import { getUserInfo, getItemDetail, getActivityLink } from '@/api/UserApi'
import { setUser, getUser, setHous, getHous, getLocation } from '@/utils/auth'
import { getLocationInfo } from '@/utils/LocationUtils'
import { Dialog, Notify, Toast } from 'vant'

export default {
  name: 'Home',
  data() {
    return {
      user: {}, // 用户信息
      selectHouse: {}, // 小区信息
      list: [
        {
          img: require('../../assets/img/img_banner_03.png'),
          url: ''
        },
        {
          img: require('../../assets/img/img_banner_02.png'),
          url: 'https://xinfu.9buqi.com/index/activitymall'
        },
        {
          img: require('../../assets/img/img_banner_04.jpg'),
          url: 'https://xinfu.9buqi.com/index/activitymi'
        },
        {
          img: require('../../assets/img/img_banner_01.png'),
          url: ''
        }
      ],
      menu: [
        {
          name: '在线缴费',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104184'
        },
        {
          name: '在线报修',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104185'
        },
        {
          name: '访客信息',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104186'
        },
        {
          name: '车位管理',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104187'
        },
        {
          name: '在线投票',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104188'
        },
        {
          name: '投诉建议',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104189'
        },
        {
          name: '房屋租赁',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104190'
        },
        {
          name: '在线托管',
          icon: 'https://image.lawxp.com/webimg.aspx?ImgId=104191'
        }
      ],
      activity: [],
      showPopup: false,
      radio: 0
    }
  },

  created() {
    Toast.loading({
      message: '加载中..',
      forbidClick: true,
      duration: 0
    })
    getLocationInfo(succeed => {
      this.getUserInfo()
      console.log('用户信息：', getUser())
      console.log('小区信息：', getHous())
      console.log('定位信息：', getLocation())
    }, error => {

    })
  },

  computed: {},

  mounted() {

  },

  methods: {

    /**
     * 点击公告栏
     */
    onClickNoticeBar() {
      this.$router.push('/notice_activity')
    },

    /**
     * 获取用户信息
     */
    getUserInfo() {
      getUserInfo().then(res => {
        // 设置用户信息
        this.user = res.data
        // 缓存用户信息
        setUser(JSON.stringify(this.user))
        if (res.data.items.length !== 0) {
          if (getHous() === undefined) {
            // 设置默认选中小区
            this.selectHouse = res.data.items[0]
            // 缓存小区默认小区
            setHous(JSON.stringify(this.selectHouse))
          } else {
            // 获取缓存小区
            this.selectHouse = JSON.parse(getHous())
          }
          // 获取小区活动列表
          this.getItenDetails(this.selectHouse.itemId)
          // 设置选中小区
          this.radio = this.selectHouse.itemId
        }
      }).catch(error => {
        Notify({ type: 'danger', message: error })
      })
    },

    /**
     * 获取首页聚合数据
     */
    getItenDetails(id) {
      getItemDetail(
        {
          itemId: id
        }
      ).then(succeed => {
        this.activity = succeed.data.activitys
      }).catch(error => {
        Notify(
          {
            type: 'danger',
            message: error
          }
        )
      })
    },

    /**
     * 条目点击（轮播图）
     * @param item 条目属性
     */
    onItemClick(item) {
      if (item.url !== '') {
        window.open(item.url)
      }
    },

    /**
     * 条目点击（活动）
     * @param item 条目属性
     */
    onItemActivityClick(item) {
      getActivityLink(
        {
          id: item.id
        }
      ).then(succeed => {
        if (succeed.data !== '') {
          window.open(succeed.data)
        } else {
          Notify({ type: 'warning', message: '该活动尚未开启！' })
        }
      }).catch(error => {

      })
    },

    /**
     * 菜单栏点击事件
     * @param item
     */
    onClickMenu(item) {
      console.log('点击菜单：', item)
      if (undefined === this.selectHouse.itemId) {
        this.$router.push('/search_location_house')
      } else {
        switch (item.name) {
          case '在线缴费':
            // window.open('#/property_payment_activity?houseId= ' + this.selectHouse.itemId)
            this.$router.push({
              path: '/property_payment_activity',
              query: {
                houseId: this.selectHouse.itemId
              }
            })
            break
          case '在线报修':
            this.$router.push({
              path: '/property_repairs_activity',
              query: {
                houseId: this.selectHouse.itemId
              }
            })
            break
          case '访客信息':
            // this.$router.push('/visitor_activity')
            Dialog({ message: '该功能暂未开通，敬请期待~' })
            break
          case '在线投票':
            // this.$router.push('/vote_activity')
            Dialog({ message: '该功能暂未开通，敬请期待~' })
            break
          case '投诉建议':
            // this.$router.push('/complain_activity')
            Dialog({ message: '该功能暂未开通，敬请期待~' })
            break

          default:
            Dialog({ message: '该功能暂未开通，敬请期待~' })
            break
        }
      }

    },


    /**
     * 点击切换小区
     */
    onClickLocationCity() {
      this.showPopup = true
    },

    /**
     * 点击条目（选中小区）
     */
    onClickItemSelectedHous(item) {
      setHous(JSON.stringify(item))
      this.radio = item.itemId
      this.selectHouse = item
      this.getItenDetails(item.itemId)
      this.showPopup = false
    }

  }
}

</script>

<style scoped>

.row-location {
  margin: 8px 15px 5px 15px;
}

.img-location {
  float: left;
  width: 20px;
  height: 20px;
}

.span-location {
  font-size: 15px;
  margin-left: 5px;
  float: left;
}

.swipe-banner {
  margin: 8px 15px 5px 15px;
  border-radius: 10px;
}

.img-banner {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}

.notice-bar {
  margin: 8px 15px 8px 15px;
  height: 35px;
  border-radius: 10px;
  font-size: 12px;
}

.row-grid-column {
  margin: 8px 15px 8px 15px;
  border-radius: 10px;
  padding: 5px;
  background: #ffffff;
}

.row-menu-name {
  margin-top: 5px;
  font-size: 14px;
  color: #342e2e
}

.img-menu-icon {
  width: 32px;
  height: 32px
}

.row-activity {
  margin: 8px 15px 8px 15px;
  border-radius: 10px;
}

.item-image {
  width: 100%;
  height: 160px;
  border-radius: 10px
}

.row-popup-title{
  text-align: center;
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  padding: 10px 0 10px 0;
}

.popup-hous-list {
  width: 80%;
  padding: 10px 0 10px 0;
}

</style>
