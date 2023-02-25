<template>
  <div>
    <div class='cs-rule' ref='rulepage'>
      <!--刻度表-->
      <div class='cs-scrollrule' ref='scrollrule'>
        <ul class='cs-scrollrule-hook' ref='rulehook'>
          <!--0刻度前的空白-->
          <div class='cs-rule-null'>
            <li v-for='(item,index) in zeroList' class='cs-scroll-item' :key='index'></li>
          </div>
          <!--正常刻度表-->
          <template v-for='(item,index) in counter'>
            <li class='cs-scroll-item' :key='index'>
              <template v-if='index % 10 == 0'>
                <van-row>
                  <van-col class='cs-scroll-item-rule vux-1px-l cs-scale-integer'></van-col>
                  <van-col class='cs-scroll-item-num'>{{ (index + minNum) / 10 }}</van-col>
                </van-row>
              </template>
              <template v-else-if='index % 5 == 0'>
                <div class='cs-scroll-item-rule vux-1px-l cs-scale-half'></div>
              </template>
              <template v-else>
                <div class='cs-scroll-item-rule vux-1px-l cs-scale-one'></div>
              </template>
            </li>
          </template>

          <!-- 最大刻度后面的空白 -->
          <div class='cs-rule-null-after'>
            <li v-for='(item,index) in aletrList' class='cs-scroll-item' :key='index'></li>
          </div>

        </ul>
      </div>
      <!--刻度表的针-->
      <div class='cs-scroll-item-pointer'></div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'cs-ruler',
  props: {
    // 初始值
    NowNum: {
      type: Number,
      default: 100
    },
    // 最大刻度
    maxNum: {
      type: Number,
      default: 100
    },
    // 最小刻度
    minNum: {
      type: Number,
      default: 0
    },
    // 指针颜色
    pointerColor: {
      type: String,
      default: 'rgb(97,206,81)'
    },
    // 刻度尺有多细
    ruleWidth: {
      type: Number,
      default: 30
    },
    // 字体大小
    numSize: {
      type: Number,
      default: 50
    },
    // 是否启用小数
    ispoint: {
      type: Boolean,
      default: true
    },
    // 每个格子多大
    oneGridValue: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // 由于v-for循环的时候,按照index计数的,所以最后一个值不会显示,需要+1,则刻度尺后面的空白就要+1
      // counter: this.maxNum - this.minNum + 1, // 因为可能需要动态修改maxNum和minMun,所以放在计算属性中
      //0刻度前面的空白,
      zeroList: this.ruleWidth / 2,
      // 刻度结束后的空白
      aletrList: this.ruleWidth / 2 - 1
    }
  },
  methods: {
    // 全局初始化
    init() {
      this.$nextTick(() => {
        this.initScroll()
        this.calculateWidth()
        // this.NowNum - this.minNum 当前值-最小值才是初始化需要滚动的值
        this.scrollrule.scrollBy(-(this.oneWidth * (this.NowNum - this.minNum)), 0, 0)
      })
    },
    // 初始化滚动
    initScroll() {
      this.scrollrule = new BScroll(this.$refs.scrollrule, {
        // 实时监听滚动的位置并返回
        probeType: 3,
        scrollX: true,
        scrollY: true,
      })

      // 监听滚动开始
      this.scrollrule.on('scrollStart', (pos) => {
        this.$emit('scroll-start', true)
      })

      // 监听滚动
      this.scrollrule.on('scroll', (pos) => {
        this.scrollX = Math.abs(Math.round(pos.x))
        this.scrollY = Math.abs(Math.round(pos.y))
        let NumValue = Math.abs(Math.round(this.scrollY / 10)) + this.minNum
        // 判断是否开启小数
        console.log("滚动值：" + scrollY)
        if (this.ispoint) {
          this.$emit('post-NumValue', NumValue / 10 * this.oneGridValue)
        } else {
          this.$emit('post-NumValue', NumValue * this.oneGridValue)
        }
      })

      //滚动结束监听
      this.scrollrule.on('scrollEnd', (pos) => {
        //滑动后的小距离
        let littleNum = this.scrollX % this.oneWidth
        //计算距离下一个刻度的差值
        let vul = this.oneWidth - littleNum
        // 加入差值比较大,再进行吸附,大于一半的距离,就往右边吸附差值的距离,小于一半的距离,就往左边吸附滑动的距离
        if (vul > 0.5 && vul < (this.oneWidth - 0.5)) {
          if (littleNum > (this.oneWidth / 2)) {
            this.scrollrule.scrollBy(-vul, 0, 0)
          } else {
            this.scrollrule.scrollBy(littleNum, 0, 0)
          }
        }
        // 滚动结束给父级发送一个事件
        // 初始化时调整了一次值,所以也会有一个true
        // 第一次true是因为滚动结束,第二个true是因为位置微调了一次,所以又滚动了
        this.$emit('scroll-end', true)
      })

    },
    // 获取宽度用于计算滚动区域
    calculateWidth() {
      // 获取右侧菜单每一个的li
      let goodsList = this.$refs.rulehook
      let listWidth = goodsList.clientWidth
      let listNum = this.counter + this.zeroList + this.aletrList
      // 每一格的距离大小
      this.oneWidth = listWidth / listNum
    },
    // 获取指针颜色等信息
    getMainValue() {
      const docStyle = this.$refs.rulepage.style
      // 指针颜色
      docStyle.setProperty('--pointer-color', this.pointerColor)
      // 字体大小
      docStyle.setProperty('--num-size', this.numSize)
      // 刻度尺宽度
      docStyle.setProperty('--rule-width', this.ruleWidth)

    },
    // 暴露给父级,如果后期需要修改某些参数,需要重新初始化一下组件
    initRule() {
      this.init()
      this.getMainValue()
    }
  },
  computed: {
    counter() {
      return this.maxNum - this.minNum + 1
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.getMainValue()
  },
  components: {},
  watch: {}
}
</script>

<style lang='less'></style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cs-rule {
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  --pointer-color: rgb(97, 206, 81);
  --rule-width: 40;
  --num-size: 50
}

.cs-scrollrule {
  height: 300px;
  margin: 20px;
}

.cs-scrollrule-hook {
  list-style: none;
  /*overflow: hidden;*/
  /*border-collapse: collapse;*/
  /*white-space: nowrap;*/
  /*display: inline-block;*/
  display: block;
}

.cs-scroll-item {
  display: block;
  width: calc(100vw / var(--rule-width));
  text-align: center;
  vertical-align: top;
}

/*刻度表数字*/
.cs-scroll-item-num {
  width: calc(100 / 750 * 100vw);
  margin-left: calc(70 / 750 * 100vw);
  text-align: center;
  font-size: 25px;
  margin-top: -15px;
  color: #cccccc;
}

/*中间红色指针*/
.cs-scroll-item-pointer {
  position: absolute;
  float: top;
  height: calc(70 / 750 * 100vw);
  width: calc(100 / 750 * 100vw);
  transform: translate(-50%, 0);
  border-right: 1vw solid var(--pointer-color);
}

/* 刻度尺 */
.cs-scroll-item-rule {
  width: 30px;
  height: 1px;
  margin-top: calc(50 / 750 * 100vw);
  background-color: #333333;
}

.vux-1px-l[data-v-db07d170]:before {
  border-color: #000000 !important;
}

.vux-1px-l:before {
  border-color: #000000 !important;
}

/*刻度1的*/
.cs-scale-one {
  width: calc(40 / 750 * 100vw);
}

/*刻度0.5的*/
.cs-scale-half {
  width: calc(44 / 750 * 100vw);
}

/*刻度10的*/
.cs-scale-integer {
  width: calc(80 / 750 * 100vw);
}

/*0刻度前面的空白*/
.cs-rule-null {
  margin-right: calc(-8 / 750 * 100vw);
  display: inline-block;
}

.cs-rule-null-after {
  margin-left: calc(-8 / 750 * 100vw);
  display: inline-block;
}
</style>
