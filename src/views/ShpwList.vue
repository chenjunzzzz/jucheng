<template>
    <div class="body">
        <div class="search-top">
            <div class="swiper-container search-nav">
                <div class="swiper-wrapper search_nav_wrap">
                    <router-link v-for="(list,index) in navLists"  :to={query:{tid:$route.query.tid,category:list.id}}  @click.native="reds(index,$route.query.tid,list.id)" :class="{active:changeRed===index}" href="javascript:void(0);" :data-id="list.id" class="swiper-slide search_nav_item" >{{list.text}}</router-link>
           <!-- <a v-for="(list,index) in navLists"  @click="reds(index)" :class="{active:changeRed===index}" href="javascript:void(0);" :data-id="list.id" class="search_nav_item">{{list.text}}</a>  -->
                
                    </div>
            </div>
        </div>

         <!--数据渲染  点击传id获取数据-->  
    <div id="cjmain">
                <div class="show-wrap"  v-for="(item,index) in $store.state.juyuan.getshowlist" >
        <div class="list-wrap" @click='tiaozhuan(index)'>
            <div class="show-item clearfix ">
                <div  class="show-left">
                    <img :src="'https://image.juooo.com//'+item.pic" alt="">
                    <span class="icon-img"></span>
                    <span class="logo_i"></span>
                </div>
                <div class="show-right">
                    <p class="title ">{{item.schedular_name}}</p>
                    <p class="show-time ">
                        <span class="day ">{{item.show_time}}</span>
                    </p>
                    <p class="show-venue ">
                        <span class="vunue ">{{item.name}}</span>
                    </p>
                    <p class="ft0 price">
                        <span class="fs24 mr8">¥</span>
                        <span class="fs32">{{item.min_price}}</span>
                        <span class="fs24 mr8">起</span>
                    </p>
                </div>
            </div>

        </div>
    </div>
</div>
    </div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import "../../node_modules/swiper/dist/css/swiper.min.css"
export default {
    name:"shoplist",
    data() {
        return {
            changeRed:0,
            navLists:[
                {
                  text:"全部",  
                  id:0,
                },
                {
                text:"演唱会",
                id:35
               },
                 {
                text:"音乐会",
                id:36
               },
                 {
                text:"话剧歌剧",
                id:37
               },
                 {
                text:"儿童亲子",
                id:38
               },
                 {
                text:"音乐剧",
                id:79
               },
                 {
                text:"舞蹈芭蕾",
                id:86
               },
                 {
                text:"戏曲综艺",
                id:91
               },
                 {
                text:"舞蹈芭蕾",
                id:99
               },
            ]
        }
    },
    methods: {
        tiaozhuan(index){
            let id=this.$store.state.juyuan.getshowlist[index].id;
            let show_id=this.$store.state.juyuan.getshowlist[index].show_id;
            let venue_id=this.$store.state.juyuan.getshowlist[index].venue_id;
            this.$router.push({path:`/ticket/${id}`,query:{show:show_id,venue:venue_id}})
            //"/ticket/"+id
        },
        reds(index,id,category){
            this.changeRed=index;
            let info={
                id,
                category
            }
        
            this.$store.dispatch("getshowlist",info)
        }
    },
    mounted() {
        let info={
            id:this.$route.query.tid,
        }
        this.$store.dispatch("getshowlist",info)
       
    },
    updated() {
            new Swiper(".swiper-container",{
           loop:false,
           autoplay:false,
           width:55,    
       })
    },
}
</script>

<style lang="less" scope>
.body{
    background-color: #f2f2f2;
    overflow: hidden;
}
.search-top{
    width: 100%;
    height: 41px;
    background: white;
    position: fixed;
        z-index: 99;
    .search-nav{
        height:40px;


    .search_nav_wrap{
         white-space: nowrap;
            
    height: 45px;
    background: white;
    z-index: 99;
    }
    }
    }
    .search_nav_wrap{
         a{
         width: 55px;
         height:39px;
         line-height: 43px;
         margin: 0 10px;
         text-align: center;
         display: inline-block;
    
        }
        .active{
            color: #ff7919;
            border-bottom: 1px solid #ff7919;
        }
    }
    .search_nav_wrap::-webkit-scrollbar{
            display: none;
        }
    .list-wrap {
    width: 100%;
    padding: 0 12.5362px;
    background: white;
}
.show-item{
    display: block;
    height: 124.8338px;
    padding: 7.5202px 0;
    border-bottom: 0.0213rem solid #e6e6e6;
}
.show-left{
    position: relative;
    border: 0.9994px solid #f2f2f2;
    width: 89.2392px;
    height: 119.32px;
    margin-right: 12.5362px;
    float: left;
}
.show-left img{
    width: 100%;
    height: 100%;
    border:0.9994px solid #fff;
}
.show-right{
    float: left;
    width: 243.1468px;
    font-size: 12.0004px;
}
.title{
    font-size: 14.0372px;
    padding-top: 3.0096px;
    margin-bottom: 12.5362px;
    width: 243px;
    height: 37px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    /*控制在3行*/
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
 
    
}
.show-time,.show-venue{
    width: 100%;
    color: #999;
    height: 17.5446px;
    line-height: 17.5446px;
    font-size: 11.0314px;
    overflow: hidden;

}
.ft0{
    color: #ff7919;
    margin-top:12.5362px;
}
.fs24{
    margin-right:2.0064px;
    font-size: 12.0308px
}
.fs32{
    font-size: 16.0398px;
}
#cjmain{
    margin-top: 50px;
}
.elelogin{
    margin-top: 53px;
}
</style>