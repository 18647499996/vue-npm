<template>
  <div id="app">
     <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss"></style>
