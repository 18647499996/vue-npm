<template>
  <a-page-header title="Title" sub-title="This is a subtitle" @back="onBack()">
    <template #backIcon>
      <menu-unfold-outlined style="font-size: 20px;" v-if="collapsed" />
      <menu-fold-outlined style="font-size: 20px;" v-else />
    </template>
    <template #extra>
      <span>
        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
        <span>Jeck Ma</span>
      </span>
    </template>
  </a-page-header>
</template>

<script>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

export default {
  name: 'HeaderTitleComponents',
  components: { MenuFoldOutlined, MenuUnfoldOutlined },
  props: {
    collapsed: Boolean,
  },
  data() {
    return {
      check: this.collapsed
    }
  },
  methods: {
    onBack() {
      this.check = !this.check
      this.$emit('onCollapsed', this.check)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
