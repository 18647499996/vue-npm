<template>
  <el-row style="background: #f5f5f5">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">风险综合套餐</el-menu-item>
      <el-menu-item index="2">风险监测套餐</el-menu-item>
    </el-menu>

    <el-row style="padding: 10px;background: #f5f5f5">
      <el-card class="box-card" style="margin-top: 8px;" v-for="item in 4" :key="item" :body-style="{ padding:'0px'}">
        <el-row>
          <!-- 栅格布局 -->
          <el-col :span="10" class="parent" style="text-align: center;height: 100px">
            <el-row>

              <el-row>
                <span style="font-size: 14px;color: #1890ff">¥</span>
                <span class="item-money">399</span>
              </el-row>

              <el-row>
                <span class="item-content">体验版套餐</span>
              </el-row>

            </el-row>
          </el-col>

          <el-col :span="14">

            <el-row style="padding: 8px 12px 0 0">
              <span class="item-date">有效期365天</span>
            </el-row>

            <el-row style="padding: 5px 12px 0 0">
              <span style="float: right;font-size: 6px;color: #342e2e">查看详细内容低至 5.3折</span>
            </el-row>

            <el-row style="padding: 5px 12px 0 0">
              <span style="float: right;font-size: 6px;color: #999">按次查询：1元/次</span>
            </el-row>

            <el-row style="padding: 5px 12px 0 0">
              <span style="font-size: 6px;color: #342e2e;float: right">查看详细内容：8.0元/篇</span>
            </el-row>

          </el-col>
        </el-row>
      </el-card>
    </el-row>

    <el-row class="row-hint">
      <span style="color: crimson;font-size: 15px">温馨提示</span>
    </el-row>

    <el-row class="row-hint" style="margin-top: 0px">
      <span style="font-size: 15px">鉴于数据产品特性，套餐一经售出平台将不接受退款</span>
    </el-row>

    <el-row class="row-hint" style="margin-top: 0px">
      <span style="font-size: 15px">如有疑问请联系我们</span>
    </el-row>

    <el-row class="row-hint">
      <span style="font-size: 15px">感谢您的使用</span>
    </el-row>

    <!--微信支付-->
    <el-row class="row-wx">
      <el-col :span="20">
        <el-row style="padding-left: 20px">
          <i class="el-icon-edit"></i>
          <span class="span-pay-wx">微信支付</span>
        </el-row>
      </el-col>

      <el-col :span="4">
        <el-row style="text-align: center">
          <i class="el-icon-circle-check"></i>
        </el-row>
      </el-col>
    </el-row>

    <!-- 支付按钮 -->
    <el-row style="padding: 0 50px 0 50px;margin-top: 90px">
      <el-button style="width: 100%" type="primary" round>确认支付</el-button>
    </el-row>

  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  created() {},
  computed: {},
  mounted() {

  },
  methods: {

    /**
       * 选中tab
       */
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    /**
       * 获取账单列表
       * @param index
       */
    getBillInfos(index) {

    },

    /**
       * 条目点击
       * @param item 实体数据
       */
    onItemClick(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="scss">

  .parent {
    display: flex;
    /*主轴上居中*/
    justify-content: center;
    /*侧轴上居中*/
    align-items: center;
  }

  .item-money {
    font-size: 18px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #1890ff;
  }

  .item-content {
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }

  .item-date {
    font-size: 8px;
    color: crimson;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    float: right;
  }

  .row-hint {
    margin: 5px 12px 0 12px;
  }

  .row-wx {
    margin-top: 12px;
    height: 40px;
    background: white;
    width: 100%;
    line-height: 40px;
  }

  .span-pay-wx {
    margin-left: 8px;
    font-size: 12px;
    color: #999;
  }

</style>
