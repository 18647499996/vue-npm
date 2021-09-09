<template>
  <!--    免责声明-->
  <van-row class='row-statement'>
    <van-col :span='16'>
      <van-row class='row-hint-6'>汇法 | HUIFA CREDITEOH</van-row>
      <van-row class='row-hint-6'>智信合一 天下无欺</van-row>
    </van-col>
    <van-col :span='8'>
      <van-button class='btn-statement' color='#1970f3'>免责声明</van-button>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: 'StatementComponents'
}
</script>

<style scoped>
.row-statement {
  position: fixed;
  width: 100%;
  height: 50px;
  float: left;
  bottom: 0;
  background: #d9d9d9;
}

.row-hint-6 {
  font-size: 11px;
  color: #333333;
  margin: 5px 20px 5px 20px;
}

.btn-statement {
  height: 30px;
  width: 80px;
  font-size: 11px;
  margin-top: 10px;
  margin-left: 20px;
}
</style>
