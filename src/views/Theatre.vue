<template>
    <div>
    <header class="cjheader">
        <!--{{$store.state.juyuan.juyuanList}}-->
        <h3 class="text-single" style="line-height:1.17rem;">剧院</h3>
    </header>
    <div class="theater-body">
        <div class="wrapper">
            <div class="theater-list">
                <ul class="theater-ul">
                    <li class="theater-li"  v-for="item in $store.state.juyuan.juyuanList">
                        <div class="theater-info-shows">
                            <div class="theater-info">
                                <a href="#" class="theater-pic-name-count">
                                    <div class="theater-pic-wrap">
                                            <img :src="item.pic" class="theater-pic">
                                    </div>
                                    <div class="theater-name-count-wrap">
                                        <p class="theater-name">{{item.name}}</p> 
                                        <p  class="theater-count">{{item.count}}场在售演出</p>
                                    </div>
                                </a>
                                <router-link :to="{path:'index',query:{num:item.id}}" class="theater-link"> <img  class="theater-more-btn" src="../assets/style/img/as.png" alt=""></router-link>
                            </div>
                            <!--渲染影片 swiper-->
                            <div class="theater-shows">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper lis1">
                                        <div class="swiper-slide swiper-lis" id="lis" v-for="showList in item.showList">
                                            <div class="theater-show-date">
                                                    <p class="show-date">{{showList.show_time}}</p>
                                                    <span data-v-660c28f4="" class="dot"></span>
                                            </div>
                                            <a href="#" class="theater-show-pic">
                                                    <img data-v-660c28f4="" :src="showList.pic" alt="" class="show-pic">
                                            </a>


                                         </div>
                                                 <div class="swiper-slide" id="lis" >
                                            <div class="theater-show-date">
                                                    <p class="show-date"></p>
                                                    <span data-v-660c28f4="" class="dot"></span>
                                            </div>
                                            <a href="https://m.juooo.com/theatre/showList?tid=2" class="theater-show-pic">
                                                    <p class="swipertext">查看更多></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>         
                </ul>
            </div>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import "../../node_modules/swiper/dist/css/swiper.min.css"

export default {
    
    name:"theatre",
   mounted(){
       this.$store.dispatch("getjuyuanlist");
      
    },
    updated() {
         new Swiper(".swiper-container",{
           loop:false,
           autoplay:false,
       
       })
    },

}
</script>
<style >
    .swiper-lis{
        width: 115px !important;
    }
</style>
<style  scoped>
    @import '../assets//style/theatre.css';

</style>