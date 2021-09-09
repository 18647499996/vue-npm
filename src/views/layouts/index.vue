<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="handleChange">
        <van-tabbar-item icon="home-o" replace to="/Home" >社区</van-tabbar-item>
        <van-tabbar-item icon="point-gift-o" replace to="/Shop" >福利</van-tabbar-item>
        <van-tabbar-item icon="smile-o" replace to="/About" >邻友</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/Mine" >我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'AppLayout',
  data() {
    return {
      active: 0,
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
      this.active = v
    }
  }
}
</script>
