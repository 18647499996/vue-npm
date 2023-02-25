<template>
  <van-row>

    <!--    <div class="character_list flex">-->
    <!--      < img src="@/assets/images/character.png" class="character" v-for="(items,indexs) in item.width" :style="[{'width':item.widths+'px','height': item.heights+'px','margin-right':'-30px'}]"-->
    <!--      v-if="-->
    <!--      reportData.height < item.max &&-->
    <!--      reportData.height >= item.height &&-->
    <!--      reportData.height <= items &&-->
    <!--      (indexs == 0 || reportData.height > item.width[indexs - 1])-->
    <!--      "-->
    <!--      />-->
    <!--    </div>-->

    <van-row style='margin-left: 20px;position:absolute;width: 100%'>
      <van-col v-for='(item,index) in array' class='col-image-bg'>
        <van-image :src='img_pre' v-for='(items,indexs) in item.width' style='margin-right: -30px' :width='item.widths'
                   :height='item.heights'
                   v-if='array.height < item.max
                          && array.height >= item.height
                          && array.height <= items
                          && (indexs === 0 || array.height > item.width[indexs - 1])' />
      </van-col>
    </van-row>

    <van-row style='margin-left: 18px'>
      <van-col v-for='(item,index) in array' class='col-image-bg'>
        <van-image :src='img' :width='item.widths' :height='item.heights' />
      </van-col>
    </van-row>
    <van-row style='margin-left: 30px'>
      <van-col v-for='(item,index) in array'>
        <van-col class='row-line'
                 :style="[{'width': (array.length - 1 === index ? item.widths - 20 : item.widths + index + 1) + 'px'}]">
          <van-col style='border-radius: 50%;background-color: #333333;height: 3px;width: 3px' />
        </van-col>
      </van-col>
    </van-row>


  </van-row>
</template>

<script>

import { isNext } from '../utils'

export default {
  data() {
    return {
      img: require('../assets/img/icon_bg.png'),
      img_pre: require('../assets/img/icon_bg_01.png'),
      array: [
        {
          'curve': 3,
          'height': 160
        },
        {
          'curve': 10,
          'height': 162.4
        },
        {
          'curve': 25,
          'height': 166.3
        },
        {
          'curve': 50,
          'height': 170.5
        },
        {
          'curve': 75,
          'height': 174.9
        },
        {
          'curve': 90,
          'height': 178.8
        },
        {
          'curve': 97,
          'height': 181
        }
      ]
    }
  },
  methods: {},
  computed: {},
  created() {
    console.log('是否数字：',isNext('124.6'))
  },
  mounted() {
    let height = this.array[0].height
    this.array.forEach((item, index) => {
      item.widths = 30 + 6 * index
      item.heights = 97.2 + 18 * index
      let countArr = []
      if (index < 6) {
        item.max = this.array[index + 1].height
      } else {
        item.max = item.height
      }
      for (let i = 0; i < 10; i++) {
        height = height + (item.max - item.height) / 10

        countArr.push(height.toFixed(2))
      }
      item.width = countArr
    })
    console.log('~~~~~~~~~~~~~', this.array)
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
