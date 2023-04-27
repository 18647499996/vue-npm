<template>
  <div class="binding">
    <!--Begin-->
    <span class="headline">选择绑定房产（选择小区）</span>
    <div class="search-wrap">
      <el-input class="input-with-select" placeholder="请输入小区名称" v-model="input" clearable>
        <el-button slot="append" icon="el-icon-search" @click="onClickQueryHouse()"></el-button>
      </el-input>
    </div>
    <!--End-->
    <!--选择位置Begin-->
    <div class="city-wrap">
      <span class="subtitle">当前城市（{{city === '市辖区' ? province : city}}）</span>
      <div class="city-content">
        <span class="location" @click="createMap" v-loading.fullscreen.lock="fullscreenLoading">重新定位</span>
        <div class="city">
          <el-cascader class="picker" size="large" :options="regionData" v-model="selectedOptions" @change="handleChange"></el-cascader>
        </div>
      </div>
    </div>
    <div class="city-wrap">
      <span class="subtitle">全部社区</span>
      <div class="community" v-for="(item,index) in houseList" :key="index">
        <div class="item" @click="onItemClick(item)">
            <span>
              <span class="name">{{item.itemName}}</span>
              <span class="enter"></span>
            </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { getItems, login } from '@/api/user'
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'
export default {
  name: 'AddHouse',
  data() {
    // debugger
    return {
      province: '',
      city: '',
      district: '',
      houseList: '',
      fullscreenLoading: false,
      selectedOptions: [],
      regionData,
      CodeToText,
      TextToCode,
      input: '',
      userid: ''

    }
  },
  mounted() {
    console.log('城市：', this.$route.query)
    if (undefined === this.$route.query.userid) {
      this.createMap()
    } else {
      console.log('外部跳转')
      this.userid = this.$route.query.userid
      this.province = this.$route.query.province
      this.city = this.$route.query.city
      this.district = this.$route.query.district
      // getToken() authType 1 取token 访问getItems()接口
      this.getToken()
    }
  },
  methods: {
    getToken() {
      login(
        {
          authType: 2
        }
      ).then(res => {
        setToken(res.data.token)
        console.log('存储token：', getToken())
        this.getItems()
        this.$router.push('/home')
      }).catch(error => {
        console.log(error)
      })
    },

    createMap() {
      this.selectedOptions = []
      this.fullscreenLoading = true
      const what = this
      const geoc = new BMap.Geocoder()
      const geolocation = new BMap.Geolocation()
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          console.log(r)
          geoc.getLocation(r.point, function(res) {
            console.log('精确定位：', res)
            const addComp = res.addressComponents
            what.province = addComp.province
            what.city = addComp.city
            what.district = addComp.district
            what.selectedOptions[0] = what.TextToCode[addComp.province].code
            what.selectedOptions[1] = what.TextToCode[addComp.province][addComp.province === addComp.city ? '市辖区' : addComp.city].code
            what.selectedOptions[2] = what.TextToCode[addComp.province][addComp.province === addComp.city ? '市辖区' : addComp.city][addComp.district].code
            what.getItems()
            console.log('城市编码：', what.selectedOptions)
          })
        } else {
          console.log('failed' + this.getStatus())
          this.fullscreenLoading = false
        }
      }, { enableHighAccuracy: true })
    },

    getItems() {
      getItems(
        {
          provinceName: this.province,
          cityName: this.city === '市辖区' ? this.province : this.city,
          districtName: this.district,
          itemName: this.input
        }).then(res => {
        this.houseList = res.data
        this.fullscreenLoading = false
      }).catch(error => {
        console.log(error)
        this.fullscreenLoading = false
      })
    },

    /**
       * 选择器监听
       * @param value
       */
    handleChange(value) {
      console.log(value)
      this.province = CodeToText[this.selectedOptions[0]]
      this.city = CodeToText[this.selectedOptions[1]]
      this.district = CodeToText[this.selectedOptions[2]]
      this.getItems()
    },

    /**
       * 点击搜索小区
       */
    onClickQueryHouse() {
      this.getItems()
    },

    /**
       * 条目点击
       */
    onItemClick(item) {
      this.$router.push(
        {
          path: '/add_building',
          query: {
            id: item.itemId,
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

  .search-wrap {
    float: left;
    width: 100%;
    padding: 0px 15px 15px 15px;
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

  .city-wrap .subtitle {
    float: left;
    width: 100%;
    padding: 0px 0 8px 0;
    color: #999;
    font-size: 16px
  }

  .city-content {
    float: left;
    width: 100%;
  }

  .city {
    margin: 0px 90px 0 0;
    /*border: 1px solid #ddd;*/
    /*border-radius: 3px;*/
    height: 35px;
    /*padding: 0 0 0 10px;*/
    line-height: 33px;
  }

  .city .picker {
    width: 100%;
    line-height: 33px;
    color: #666;
    font-size: 14px;
  }

  .location {
    float: right;
    width: 80px;
    padding: 9px 0px 4px 20px;
    color: #f60;
    background: url(http://image.lawxp.com/webimg.aspx?ImgId=103747) no-repeat 0px 7px;
    background-size: 15px;
    font-size: 14px;
    box-sizing: border-box;
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
