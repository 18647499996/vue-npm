<template>
    <div class="record">
        <!-- <van-sticky>
            <van-nav-bar title="中奖记录"  left-arrow @click-left="back" @click-right="rightClick">
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
                offset="50"
                @load="Bind">
                        <div class="item" v-for="item in list" :key="item.id">
                          <div class="title">{{item.title}}</div>
                          <div class="time">中奖时间：{{item.postTime}}</div>
                      </div>
                </van-list>
        </div>
 
	</div>
</template>
<script>
import { GetPrizeRecord } from '@/api/user'
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
	methods:{
        back(){
          this.$router.go(-1)
        },
        rightClick(){

        },
        Bind(){
            this.page++;
            GetPrizeRecord({index:this.page,size:10}).then((res)=>{
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
                            console.log(this.list,'之前')
                          this.list=[...this.list,...res.data.list];
                          console.log(this.list,res.data.list,'之后')
                      }else{
                          this.finished = true;
                      }
                  }

                }else{
                    this.$toast(res.msg);
                }
            })
        }
	}
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding:0;
}
.record{
    .van-nav-bar .van-icon{
      color: #333333;
    }
    ::v-deep .van-nav-bar__title{
        font-size:18px;
    }
    .main{
        margin-top: 12px;
        background: #fff;
        .item{
          margin: 0 7.5px;
          border-bottom: 1px solid #EAEAEA;       
          padding: 14.5px 0;
          box-sizing: border-box;
          &:last-child{
              border: none;
          }
          .title{
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          } 
          .time{
            margin-top: 12.5px;
            color: #888888;
            font-size: 12px;
          }    
        }
    }
}

</style>