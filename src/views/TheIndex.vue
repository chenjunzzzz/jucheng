<template>
    <div style="overflow: hidden ;margin-top: 45px;">
        <!--主页弹窗未写-->
    <div class="cjchadow-bog"></div>

    <!--顶部导航-->
    <div class="cjnavbar">
        <div class="cjnavbar-innre">
            <div class="cjleft"><a class="cjlefta" href="javascript:history.back(-1)"><span style="font-size:23px" class="iconfont">&#xe75b;</span></a></div>
            <div class="cjcenter" style="font-size:17px;">{{$store.state.juyuan.name}}</div>
            <div class="cjright"><i class="iconfont"  style="font-size:26px;font-weight:600;">&#xe608;</i></div>
        </div>
    </div>
    <!--banna轮播图-->
    <div class="cjswiper-slide swiper-slide-active" style="overflow: hidden;">
        <div class="cjbox">
            <a class="cjlink" href="#">
                <img class="cjswiper-slideimg" data-src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" alt="" title="">
            </a>
        </div>
    </div>
    <!--跳转图标 -->
    <div class="cjcategory-container">
        <div class="cjcategory-wrap">
             <router-link :to="{path:'/Theatre/showList',query:{tid:id}}" > 
             <div  class="cjimgbox"><img src="../assets/style/img/icon-show.png" alt="" srcset=""></div>
                <p class="cjimgtext">演出</p>
             </router-link>
            <a href="#">
                    <div class="cjimgbox"><img src="../assets/style/img/icon-calendar.png" alt="" srcset=""></div>
                    <p class="cjimgtext">日历</p>
            </a>
            <a href="#">
                <div class="cjimgbox"><img src="../assets/style/img/icon-theater.png" alt="" srcset=""></div>
                <p class="cjimgtext">剧院</p>
            </a>
            <a href="#">
                    <div class="cjimgbox"><img src="../assets/style/img/icon-offer.png" alt="" srcset=""></div>
                    <p class="cjimgtext">特惠</p>
            </a>
        </div>
    </div>
    <div class="cjdivtext">
        <h3>热门演出</h3>
    </div>
    <!--数据渲染-->
    <div class="cjshow-wrap" v-for="(item,index) in $store.state.juyuan.wutaiList.slice(0,4)" :id=item.show_id>
        <div class="cjlist-wrap">
            <router-link class="cjshow-item clearfix" :to="'/ticket/'+item.id"  @click.native=chuandi(item.show_id)>
                <div  class="cjshow-left">
                    <img :src="item.pic" alt="">
                    <span class="cjicon-img"></span>
                    <span class="cjlogo_i"></span>
                </div>
                <div class="cjshow-right">
                    <p class="cjtitle ">{{item.schedular_name}}</p>
                    <p class="cjshow-time ">
                        <span class="cjday ">2019.09.17 - 2019.09.22</span>
                    </p>
                    <p class="cjshow-venue ">
                        <span class="cjvunue ">{{$store.state.juyuan.name}}</span>
                    </p>
                    <p class="cjft0 price">
                        <span class="cjfs24 mr8">¥</span>
                        <span class="cjfs32">{{item.id|date}}</span>
                        <span class="cjfs24 mr8">起</span>
                    </p>
                </div>
            </router-link>
           

        </div>
    </div>
    <div class="cjall-show">
        <router-link :to="{path:'/Theatre/showList',query:{tid:id}}" class="cjall-a"> 查看全部演出 ></router-link>
        <!-- <a href="#" class="cjall-a">
            查看全部演出 >
        </a> -->
    </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"theindex",
    data() {
        return {
            //路由query携带的值
            id:this.$route.query.num,
        }
    },
    filters:{
        date(v){
             v=v.toString();
            return v.slice(0,3)
        }
    },
    mounted() {
      
        //路由的值
         this.$store.commit("CHANGE_WUTAILIST",this.$route.query.num);
    },
    methods: {
        chuandi(show_id){
            console.log(show_id,"ss")
            
      this.$router.push({ query: { tid:show_id }})
        }
    },
     created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }

}
</script>

<style scop>
    @import '../assets/style/theindex.css';
</style>