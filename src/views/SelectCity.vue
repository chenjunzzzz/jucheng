<template>
    <div style="scroll-behavior: smooth;transition: all 1s;">
        <div class="head_nav">
            <a href="javascript:history.back(-1)" class="iconfont headfont">&#xe75b;</a>
            <h3>城市选择</h3>
        </div>
        <div class="zj"></div>
        <div class="city_main">
            <div class="city_div">
                <span>当前城市</span>
                <ul><li>全国</li></ul>
            </div>

              <div class="city_div">
                <span>定位城市</span>
                <ul><li>全国</li></ul>
            </div>

              <div class="city_div">
                <span>热门城市</span>
                <ul>
                    <li>全国</li><li v-for="(item,index) in $store.state.home.popular_city" :key="index">{{item.name}}</li>
                </ul>
            </div>
        <div>
            <div v-for="(item,index) in letterlist" :id="'city'+item.id" ref="recommend" :key="index">
                <span class="zm" >{{item.id}}</span>  
                <ul class="city_region"><li v-for="(iten,index) in item.list" :key="index">{{iten.name}}</li></ul> 
            </div>
        </div>
        </div>
        <section class="city-nav" >
            <span v-for="(item,index) in letter" @click="myFunction('city'+item)" :key="index">{{item}}</span>
        </section>
     
    </div>

</template>

<script>
export default {
    name:"iselectcity",
    data() {
        return {
            letter:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        }
    },
    methods: {
        myFunction(id){
            console.log(id)
            var element=document.getElementById(id);
            element.scrollIntoView({
                behavior:'smooth',
            });
            //更改scrollTop值后无过度效果
                                                        
        },
    },
    computed:{
        letterlist(){
            return this.$store.state.home.letter_city||[]
        },
    },
    mounted() {
        this.$store.dispatch("popularcity")
        this.$store.dispatch("lettercity")
        console.log(this.$store.state.home.letter_city)
    },
}
</script>

<style lang="less" scope>

.city-nav{
        position: fixed;
    right: .26667rem;
    top: 3.17333rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 1;
}
    .head_nav{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 1.17333rem;
            line-height: 1.17333rem;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #ebebeb;
            background-color: #fefefe;
            z-index: 100;
         
            .headfont{
                position: absolute;
                left: 0;
                width: 1.33333rem;
                height: 100%;
               
            }
    }
    .city_main{
        background: #f5f5f5;;
         margin-top:  1.17333rem;
            .city_div{
                margin-bottom: 10px;
                 padding: .34667rem 1.01333rem 0 .4rem;
            }
         span{
            font-size: .32rem;
            font-weight: 400;
            color: #999;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: .70667rem;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: .13333rem;
         }
         ul{
             display: flex;
             flex-wrap:wrap;
             li{
                 width: 31%;
                 height: .93333rem;
                 background: white;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 margin-right: 7px;
                 margin-bottom: 8px;
             }
         }
         .zm{ padding: .34667rem 1.01333rem 0 .4rem;}
         .city_region{
          
             background-color: #fefefe;
        
                li{
                    height: 1.33333rem;
                    width: 100%;
                    border-bottom: 1px solid #ebebeb;
                    font-size: .34667rem;
                     color: #232323;
                    margin-left: 13px;
                    justify-content: end;
                    margin-bottom: 0px
             }
            
         }
    }
</style>