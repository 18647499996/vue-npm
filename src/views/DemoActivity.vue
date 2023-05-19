<template>
  <div class='popverBox'>
    <pdf src="https://cdn.jsdelivr.net/gh/mozilla/pdf.js@c6e8ca86/test/pdfs/annotation-link-text-popup.pdf"></pdf>
    <div class='topTitle'>请写下您的名字</div>
<!--    <vue-esign ref='esign' :width='800' :height='300' :isCrop='isCrop' :lineWidth='lineWidth' :lineColor='lineColor'-->
<!--               :bgColor.sync='bgColor' />-->
    <button @click='handleReset'>清空画板</button>
    <button @click='handleGenerate'>生成图片</button>
    <img :src='resultImg' width='200px' height='200px' style='margin-top: 400px'>
  </div>
</template>
<script>

export default {
  components: {
    pdf
  },
  data() {
    return {
      // 可引入网络文件或者本地文件
      lineWidth: 6,
      lineColor: '#000000',
      bgColor: '#aaaaaa',
      resultImg: '',
      isCrop: false
    }
  },
  methods: {
    handleReset() {
      this.$refs.esign.reset()
    },
    handleGenerate() {
      this.$refs.esign.generate().then(res => {
        this.resultImg = res
        console.log('手写签名:', this.resultImg)
      }).catch(err => {
        alert(err) // 画布没有签字时会执行这里 'Not Signned'
      })
    }
  },
  computed: {},
  created() {

  },
  mounted() {

  },
  watch: {}
}
</script>

<style lang='less'></style>

<style scoped>
.popverBox {
  position: relative;
  height: 500px;
}

.topTitle {
  margin: 20px 0 12px 12px;
  font-size: 16px;
}
</style>
