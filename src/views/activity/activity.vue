<template>
    <div class="activity">
        <!-- <van-sticky>
            <van-nav-bar title="活动"  left-arrow @click-left="back" @click-right="rightClick">
                 <template #left>
                    <van-icon size="20" style="transform: rotate(90deg);" name="down" />
                </template>
                <template #right>
                    <van-icon name="ellipsis" size="20"  />
                </template>
            </van-nav-bar>
        </van-sticky> -->
        <div class="main">
           <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="Bind">
                    <div class="item"  v-for="item in list" :key="item.id" @click="goDetails(item)">
                        <div class="top">
                            <div class="title">{{item.title}}</div>
                            <div class="time">活动时间：{{item.beginTime}}/{{item.endTime}}</div>
                        </div>
                        <div class="description">幸运抽奖红包抢不停，还有更多精彩礼品大奖等你来拿，还等什么，赶紧参与活动吧。</div>
                        <div class="img">
                            <van-image
                                width="100%"
                                height="100%"
                                fit="cover"
                                :src="(item.banner)"/>
                        </div>
                        <p>参与小区:和平花苑、鞍山五村、鞍山七村、抚顺路393弄、同济绿园和平花苑、鞍山五村、鞍山七村、抚顺路393弄、同济绿园</p>
                    </div>
            </van-list>
        </div>

	</div>
</template>
<script>
import { GetActivity } from '@/api/user'
import { getActivityLink } from '@/api/UserApi'

import $ from 'jquery'
export default {
	data(){
		return {
		  page:0,
          list:[],
          loading: false,
          finished: false,
		}
	},
	mounted(){

	},
    created(){

    },
	methods:{
        Bind(){
          this.page++;
          GetActivity({index:this.page,size:10}).then((res)=>{
               this.loading = false;
              if(res.code==0){
                 if(this.page==1){//首次
                    if(res.data&&res.data.list&&res.data.list.length>0){
                          this.list=res.data.list;
                    }else{
                       this.finished = true;
                    }
                 }else{
                    if(res.data&&res.data.list&&res.data.list.length>0){
                        this.list=[...this.list,...res.data.list];
                    }else{
                        this.finished = true;
                    }
                 }

              }else{
                  this.$toast(res.msg);
              }
          })
        },
        goDetails(item){
          getActivityLink(
            {
              id: item.id
            }
          ).then(succeed => {
            window.open(succeed.data)
            // location.href=succeed.data;
          }).catch(error => {

          })
        },
        back(){
          this.$router.go(-1)
        },
        rightClick(){

        },
	}
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding:0;
}
.activity{
    .van-nav-bar .van-icon{
      color: #333333;
    }
    ::v-deep .van-nav-bar__title{
        font-size:18px;
    }
    .main{
      .item{
          margin-top: 12.5px;
          background: #fff;
          padding: 14.5px 15px;
          .top{
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 14px;
              flex-wrap: wrap;
              .title{
                font-size:15px;
                color: #000000;
                flex-shrink: 0;
              }
              .time{
                font-size:12px;
                color: #333333;
              }
          }
          .description{
              font-size: 12px;
              color: #888888;
              line-height: 20px;
              margin-bottom: 14.5px;
          }
          .img{
              margin-bottom: 10px;
              height: 144.5px;
              img{
                  width: 100%;
              }
          }
          p{
            font-size: 11px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #888888;
            line-height: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
      }
    }
}

</style>
