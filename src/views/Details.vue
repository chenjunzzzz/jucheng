<template>
    <div class="detail-wrapper">
        <div class="detail">
            <div class="brief__bg-wrapper">
                <img data-v-04d278ca="" :src="$store.state.juyuan.details.pic" class="brief__bg">
            </div>
            <div class="brief__mask"></div>
            <div class="brief__primary">
                <div class="brief__primary__fg">
                    <div class="brief__primary__fg__title">
                        <span  class="brief_span">演出详情</span>
                        <a href="javascript:history.back(-1)" class="iconfont leftincon">&#xe75b;</a>
                        <i class="iconfont rightshare">&#xe780;</i>
                        <i class="iconfont righthome">&#xe60a;</i>
                    </div>

                    <div class="cjcontent">
                        <div class="cjcontent-img"><img :src="$store.state.juyuan.details.pic" alt="" class="cover__img"/></div>
                        <div class="cjcontent-text">
                            <div class="text">{{$store.state.juyuan.details.show_name}}</div>
                            <div class="meaningless"></div>
                            <div class="cjtabbar">￥{{$store.state.juyuan.details.price_range}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brief__secondary">
                <div class="txt">
                    <div class="txt1"><p>09/20-09/22 <i @click="changedrawer" type="primary"  class="iconfont">&#xe75c;</i></p></div>
                    <div class="txt2"><p>{{$store.state.juyuan.details.city.city_name}} | {{$store.state.juyuan.details.venue.venue_name}}</p></div>
                </div>
                <div class="img"><i class="iconfont icomtditu">&#xe60c;</i></div>
            </div>
<!--vip-->
            <div class="orange-plus-tips">
                <div class="tips_name">橙PLUS卡</div>
                <div class="tips_desc">开通送￥100 最高省138元</div>
                <div class="tips_guide">立即开卡 <i class="iconfont">&#xe75c;</i></div>
            </div>
<!--main领取-->
            <div class="center_benefit">
                <div class="show_benefit">
                    <div class="div">
                        <div class="show_txt">
                            <span>领 券  :</span>
                            <span class="show_img">满11减10</span>
                            <span class="show_img">满600减30</span>
                            <span class="show_ico"><i class="iconfont">&#xe608;</i></span>
                        </div>
                         <div class="show_txt">
                            <span>VIP+  :</span>
                            <span class="show_vimg">V+会员享</span>
                            <span class="show_vimg">国内免邮+双倍积分</span>
                            <span class="show_ico"><i class="iconfont">&#xe75c;</i></span>
                        </div>
                        <div class="show_txt1">
                            <span>入 场  :</span>
                            <span class="show_ctex">一人一票,儿童全票</span>
                        </div>
                          <div class=show_txt1>
                            <span>支 持  :</span>
                            <span class="show_ctex">在线选票 | 电子票 | 同城满200包邮</span>
                        </div>
                    </div>
                </div>
            </div>
<!--巡演城市-->
            <div class="tour-cities">
                <div class="tour_txt">
                    <span class="chenshi">巡演城市</span>
                    <span>88场<i class="iconfont">&#xe75c;</i></span>
                </div>
<!--xr-->
                <div class="tour-cities__list">
                    <div class="cjList" style="min-width: 681px;">
                        <div class="cjdiv" v-for="item in this.$store.state.juyuan.city"  :class="'page'+item.active_state" >
                            <p>{{item.city_name}}</p>
                            <p>{{item.show_time}}</p>
                        </div>
                    </div>
                </div> 
    
            </div> 
        <!--介绍-->
            <div class="text_centen">
                <div class="text">
                    <h2 class="h2text">演出介绍</h2>
                        <div class="cjdiv0">
                            <div v-html="$store.state.juyuan.p" class="cjp" :class="[isshow?'cj1':'']"></div>
                        <div v-show="isshow" class="cjzsqb" @click="showclick">展示全部</div>
                    </div> 
                </div>
            </div>

<Goupiao ref="child"></Goupiao>


        </div>
    </div>
</template>

<script>
export default {
    name:"detailss",
    data() {
      
        return {
            isshow:true,
            //vuex 刷新值后不在
       
        }
    },
    methods: {
        changedrawer(){
           this.$refs.child.drawer=true;
        },
        showclick(){
       this.isshow=false
        }
    },
    mounted() {
        let id=this.$router.history.current.params.id
         this.$store.dispatch("getScheduleinfo",id)
        this.$store.dispatch("province",this.$router.history.current.query)   
    },

     

}
</script>
<style>
    .cjp p img{
        width: 100%;
        
}
</style>
<style lang="less" scoped>

  @import '../assets/style/shop.less';
</style>