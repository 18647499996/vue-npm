<template>
    <div class="luckDraw">
        <!-- <van-sticky>
            <van-nav-bar title="抽奖活动"  left-arrow @click-left="back" @click-right="rightClick">
                 <template #left>
                    <van-icon size="20" style="transform: rotate(90deg);" name="down" />
                </template>
                <template #right>
                    <van-icon name="ellipsis" size="20"  />
                </template>
            </van-nav-bar>
        </van-sticky> -->
        <div class="main">
           <div class="title">
               <!-- <p>天天摇奖</p>
               <p>领万元现金</p> -->
               <img src="../../assets/img/activity/title.png"/>
           </div>
           <div class="draw">
               <div class="drawImg">
                   <img src="../../assets/img/activity/cj.png"/>
               </div>
               <div class="drawCount">您有<span>{{count}}</span>次抽奖机会</div>
               <div class="drawPrize">
                   <div class="box">
                        <div class="groups animation-ease" v-for="(k,index) in 1" :key="index" @webkitTransitionEnd="endGame(k)">
                            <ul class="group-item" v-for="(i,indexs) in (round+1)" :key="indexs">
                                <!-- <li class="prize-item" v-for="(item,index1) in prizes" :key="index1"><img :src="item.imageUrl"/></li> -->
                                <li class="prize-item" v-for="(item,index1) in prizes" :key="index1">
                                    <van-image
                                        width="100%"
                                        height="90px"
                                        fit="cover"
                                        :src="item.imageUrl"
                                        />
                                </li>

                            </ul>
                        </div>
                    </div>
               </div>
               <div class="drawBtn" @click="startClick">
                   <img :src="btnurl"/>
               </div>
               <div class="drawRecord">
                   <div class="myscroll">
                        <ul id="ul">
                            <li>20210611恭喜168****6189抽到10000元现金</li>
                            <li>20210611恭喜168****6189抽到10000元现金</li>
                            <li>20210611恭喜168****6189抽到10000元现金</li>
                        </ul>
                    </div>
               </div>
           </div>
           <div class="rule">
              <div class="img1"><img src="../../assets/img/activity/img1.png"/></div>
              <div class="context">
                <div class="title">活动规则</div>
                <p v-html="rule"></p>
              </div>
              <div class="img2"><img src="../../assets/img/activity/img1.png"/></div>
           </div>
        </div>
	    <div class="Winning" style="right: 0; border-radius: 14px 0 0 14px;" @click="$router.push('/record')">
            中奖记录
        </div>
        <!-- <div class="Winning" style="left: 0; border-radius:0 14px 14px 0;" @click="$router.push('/record')">
            我的卷包
        </div> -->
        <van-dialog class="dialog" v-model="isSW" title="恭喜获得" >
            <div class="jptitle">{{title}}</div>
            <img :src="imgurl" />
            <p>请到小区物业处领取奖品</p>
        </van-dialog>
        <van-dialog @confirm="goYHJ" class="dialog" v-model="isYHJ" title="恭喜获得" show-cancel-button confirm-button-text="去查看" cancel-button-text="确认">
            <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <p>优惠券已放入券包</p>
        </van-dialog>
        <van-dialog class="dialog" v-model="isNo" title="很遗憾～" >
            <div class="jptitle" style="margin-bottom:31px;">奖品与你擦肩而过。</div>
        </van-dialog>
	</div>
</template>
<script>
import { GetPrize,LuckPrize } from '@/api/user'
import $ from 'jquery'
export default {
	data(){
		return {
			round:6,//转几回合后停下来
			prizes:[],
			disClick:false,//防止多次点击
			itemHeight:0,//每个奖品的高度
            btnurl:require('../../assets/img/activity/btn.png'),
            count:0,
            time:Object,
            rule:'',
            isSW:false,
            isYHJ:false,
            isNo:false,
            imgurl:'',
            title:'',
            k:false
		}
	},
    beforeRouteLeave(to, form, next) {
        console.log('离开页面，销毁时间函数')
        clearInterval(this.time)
        next()
    },
	mounted(){
	
	},
    created(){
       this.Bind();
    },
	methods:{
        back(){
          this.$router.go(-1);
        },
        rightClick(){

        },
        goYHJ(){
           console.log('11')
        },
        Bind(){
           GetPrize({id:this.$route.query.id}).then((res)=>{
               console.log(res);
             if(res.code==0){
                this.prizes=res.data.prizes;
                this.count=res.data.luckCount;
                this.rule=res.data.rule;
                 this.$nextTick(() => {
                       this.itemHeight = $('.prize-item').outerHeight();
                        $('.groups').css('height',this.itemHeight * this.prizes.length*(this.round+1))
                        $('#ul').html( $('#ul').html()+ $('#ul').html())
                        this.time=setInterval(()=>{
                            let a=$('#ul').css('top');
                            let b=parseInt(a.substring(0,a.indexOf('px')))
                            if(parseInt(a.substring(1,a.indexOf('px')))>=($('#ul li').length-2)*$('#ul li').height()){
                                $('#ul').css('top',-1)
                            }else{
                                b--;
                                $('#ul').css('top',b)
                            }
                        },300)
                  })
              }else{
                  this.$toast(res.msg);
              }
           })
        },
		startClick(){//开始抽奖
			if(this.disClick){
				return
            }
            if(this.count<=0){
                return
            }
            this.btnurl=require('../../assets/img/activity/btnh.png');
            this.count--;
			//获取中奖
            LuckPrize({id:this.$route.query.id}).then((res)=>{
                console.log(res)
                if(res.code==0){
                    let index;
                    for(let i=0;i<this.prizes.length;i++){
                        if(res.data.prizeId==this.prizes[i].id){
                            index=i;
                            this.imgurl=this.prizes[i].imageUrl;
                            this.title=this.prizes[i].title;
                        }
                    }
                    this.runGame(index,res.data.isWin)
                }else{
                    this.$toast(res.msg);
                }
            })

		},
		runGame(index,k){//启动抽奖
            this.k=k;
			this.disClick = true;
			this.resetGame();
			var itemHeight = this.itemHeight;
			var groupsHeight = this.round*$('.group-item').height();
			$('.groups').each(function(e){
				var pos = index*itemHeight + groupsHeight;
				setTimeout(()=>{
					$(this).addClass('animation-ease').css('transform','translate3d(0, -'+pos+'px, 0)')
				},e*300)
			})

		},
        endGame(k){//抽奖结束后的回调
            // console.log(k,'k')
            this.disClick = false;
            this.btnurl=require('../../assets/img/activity/btn.png');
                if(this.k){
                   this.isSW=true;
                }else{
                   this.isNo=true;
                }
		},
		resetGame(){//重置状态
			$('.groups').removeClass('animation-ease').css('transform','');
		}
	}
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding:0;
}
.luckDraw{
    .dialog{
        ::v-deep .van-dialog__header{
            font-size:17px;
            font-weight:bold;
            padding-top:19px;
        }
        img{
            display:block;
             max-width:80%;
             max-height:90px;
             margin:0 auto;
             margin-bottom:21px;
             margin-top:14px;
        }
        p{
            color:#666666;
            font-size:12px;
            width:180px;
            height:26px;
            line-height:26px;
            text-align:center;
            margin:0 auto;
            margin-bottom:27px;
            background: rgba(231, 47, 13, 0.05);
            border-radius: 15.5px;
        }
    }
    .jptitle{
        text-align:center;
        color:#333;
        font-size:16px;
        margin-top:12px;
    }
    .van-nav-bar .van-icon{
      color: #333333;
    }
     ::v-deep .van-nav-bar__title{
        font-size:18px;
    }
    position: relative;
    .Winning{
      position: fixed;
      width:86px;
      top:65px;
      z-index: 10;
      background: #fba115;
      text-align: center;
      height: 30.5px;
      line-height: 30.5px;
     
      font-size: 14px;
      color: #fff;
    }
    .main{
        background: url('../../assets/img/activity/acitivebg.png') no-repeat;
        padding-bottom: 41px;
        background-size: cover;
        padding-top:54.5px;
        .title{
          img{
              width:100%;
          }
        }
        .draw{
            margin-top:22px;
            position: relative;
            img{
                width: 100%;
            }
            .drawCount{
                position: absolute;
                top:34px;
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                font-size: 23px;
                color:#fff;
                font-weight:500;
                span{
                    color: #D70312;
                }
            }
            .drawPrize{
                    position: absolute;
                    top: 145px;
                    width: 100%;
                    text-align: center;
                    font-size: 46.5px;
                    font-family: Source Han Sans SC;
                    font-weight: bold;
                    color: #D50006;
                    height: 100px;
                    line-height:100px;
                    text-shadow: 0 1.5px 0 #d2191e, 0 4px 4px #d50006;
            }
            .drawBtn{
                position: absolute;
                bottom:76px;
                width:226px;
                margin-left: 50%;
                transform: translateX(-50%);
                img{
                   width:100%;
                }
            }
            .drawRecord{
                position: absolute;
                bottom: 28px;
                width:100%;
                text-align: center;
                .myscroll{
                    height: 35px;
                    overflow: hidden;
                    position: relative;
                    width:100%;
                    ul{
                        position:absolute;
                        width:100%;
                        top:-1px;
                        li{
                            font-size: 11.5px;
                            font-family: Source Han Sans SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 22.5px;
                            text-align:center;
                        }
                    }
                }
            }
        }
        .rule{
            margin:0 15px;
            margin-top: 15px;
            background: #FAFAFA;
            border-radius: 11.5px;
            padding: 21.5px 17px 36px 15.5px;
            position: relative;
            img{
                width:100%;
            }
            .img1{
                width:70.5px;
                position: absolute;
                top:-22px;
                left:-6px;
            }
            .img2{
                width:49.5px;
                position: absolute;
                bottom:-10.5px;
                right: -6px;
            }
            .context{
                .title{
                    font-size:16px;
                    font-weight: bold;
                    color: #333333;
                    text-align: center;
                    margin-bottom:19.5px;
                }
                p{
                    font-size:13px;
                    line-height: 20px;
                    color: #333333;
                    margin-bottom: 10px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
        
    }
    .box{
        height: 100px;
        overflow: hidden;
        .animation-ease{
            transition-property:transform;
            transition-duration: 5s;
            transition-timing-function: ease;
        }
        .groups{
            text-align: center;
            .prize-item{
                 height: 100px;
                 max-width:207px;
                 margin:0 auto;
                 display:flex;
                 align-items:center;
                 img{
                    max-height:90px;
                 }
                 
            }
        }
    }
}

</style>