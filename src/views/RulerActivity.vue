<template>
  <van-row>
    <pdf style='height: 1000px;width: 1000px' src='../assets/fx_authorization.pdf'>
      ssss
    </pdf>
  </van-row>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {

  },
  mounted() {

  }
}
</script>

<style scoped>

.row-line {
  height: 2px;
  margin-top: 8px;
  background-color: #eb2525;
}

.col-image-bg {
  margin-top: 50px;
  height: 205px;
  align-items: flex-end;
  display: flex;
}
</style>
