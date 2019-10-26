<template>
    <div class="search">
        <div class="head">
            <div class="search-ipt">
                <span class="iconfont">&#xe609;</span><input v-model="remen" type="text" placeholder="搜索热门演出" class="text">
                <span @click="clickhander" class="iconfont" style="font-size: 12px;margin-left: 11px;">&#xe668;</span>
            </div>
            <span @click="Return" class="hdtext">取消</span>
        </div>

        <section class="search_com" v-show="isshow">
            <!--热门搜索-->
            <div class="default">热门搜索</div>
            <ul class="list" >
                <li @click="clicktext(item)" v-for="(item,index) in $store.state.home.performance_list" :key="index">{{item}}</li>
                
            </ul>
        </section>

         <div id="cjmain1" v-show="!isshow">
                <div class="show-wrap" v-for="(item,index) in $store.state.home.searchtext_list" :key="index">
        <div class="list-wrap">
            <div class="show-item clearfix ">
                <div  class="show-left">
                    <img :src="item.pic" alt="">
                    <span class="icon-img"></span>
                    <span class="logo_i"></span>
                </div>
                <div class="show-right">
                    <p class="title ">{{item.show_time_top}}</p>
                    <p class="show-time ">
                        <span class="day " v-html="item.name"></span>
                    </p>
                    <p class="show-venue ">
                        <span class="vunue ">{{item.city_name}}|{{item.venue_name}}</span>
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
export default {
    name:"search",
    data() {
        return {
            remen:"",
            isshow:true,
        }
    },
   watch:{
       remen(value){
          value.length>0?this.isshow=false:this.isshow=true;
          if(value){
              this.$store.dispatch("searchtext",value)
          } 
       }
   },
   methods: {
       clickhander(){
           this.remen="";
       },
       Return(){
           this.$router.go(-1)
       },
       clicktext(text){
           this.remen=text
       }
       
   },
    mounted() {
        this.$store.dispatch("performance")
    },
}
</script>

<style lang="less" scope>
    .search{
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
#cjmain1{
   padding-top: 68px;
       overflow: hidden;

}
.elelogin{
    margin-top: 53px;
}
        width: 100%;
        .head{
            width: 100%;
            padding: 0 .4rem;
            height: 1.17333rem;
            position: fixed;
            display: flex;
            align-items: baseline;
            z-index: 99;
            background: white;
            .hdtext{
                font-family: PingFang-SC-Medium;
                font-size: .37333rem;
                color: #666;
                margin-left: 11px;
            }
            .search-ipt{
                justify-items: center;
                align-items: center;
                display: flex;
                box-sizing: border-box;
                width: 8.05333rem;
                height: .8rem;
                background-color: #f5f5f5;
                border-radius: .4rem;
                padding: 0 .22667rem 0 .37333rem;
                border: 1px solid #ebebeb;
                margin-top:8px;
                .text{
                    height: .53333rem;
                    line-height: .53333rem;
                    width: 6.26667rem;
                    font-size: .34667rem;
                    letter-spacing: 0;
                    color: #232323;
                    background: transparent;
                    border: none;
                    outline: none;
                    
                }
            }
        }
    }
    .search_com{
            padding: .69333rem .4rem 0;
            .default{
                width: 100%;
                padding-top: 1.17333rem;
                    font-size: .34667rem;
                    font-weight: 400;
                    color: #666;
                    display: block;
                    line-height: .53333rem;
             }
                    .list{
                        display: flex;
                    flex-direction: row;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    margin-top: .53333rem;
                    li{
                        padding: 0 .66667rem;
                        height: .93333rem;
                        line-height: .93333rem;
                        font-size: .37333rem;
                        color: #232323;
                        background-color: #f5f5f5;
                        border-radius: .08rem;
                        margin-right: .34667rem;
                        margin-bottom: .34667rem;
                    }
                }
    }

   
</style>

