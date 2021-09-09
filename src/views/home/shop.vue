<template>
  <el-row style='padding: 10px 15px 10px 15px'>
    <el-row @click.native='onItemClick(item)' v-for='(item,index) in list' :key='index'>
      <el-image class='item-image' :src='item.logo'></el-image>
    </el-row>
  </el-row>
</template>

<script>
import { getShopList } from '@/api/user'

export default {
  name: 'Shop',
  data() {
    return {
      list: []
    }
  },
  created() {

  },
  computed: {},
  mounted() {
    this.getShopList()
  },
  methods: {
    /**
     * 获取账单列表
     * @param index
     */
    getShopList(index) {
      getShopList(
        {}).then(res => {
        this.list = res.data
      }).catch(error => {
        console.log('异常信息：', error)
      })
    },

    onItemClick(item) {
      window.open(item.link, '_self')
    }
  }
}

</script>

<style scoped>

.item-image {
  border-radius: 10px;
  width: 100%;
  height: 220px;
  margin-top: 10px;
}
</style>
