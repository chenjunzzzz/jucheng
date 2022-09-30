<template>
    <div class="banner-wrap">
        <div>34512313</div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in $store.state.home.slide_list">
                    <a href="banner-wrap__block">
                        <img :src="item.image_url" alt="">
                    </a>
                </div>
            </div>
             <div class="swiper-pagination">
                   
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import "../../../node_modules/swiper/dist/css/swiper.css";
export default {
    name:"homechart",
    data() {
        return {
            
        }
    },
    mounted() {
        this.$store.dispatch("hoemchart")
       
    },
    updated() {
         new Swiper(".swiper-container",{
           loop:true,
           autoplay:true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: 'my-bullet-active',
            },
       })
    },
}
</script>
<style >
      .my-bullet-active{
                background: #fff !important;
                opacity: 1 !important;
                width: .34667rem !important;
                border-radius: .06667rem !important;
            }
</style>
<style lang="less" scoped>
 
    .banner-wrap{
         height: 5.22667rem;
         .swiper-pagination{
                bottom: 11px;
                left: 0;
                width: 100%;
            
         }
     
        .swiper-container{
            height: 5.22667rem;
            width: 100%;
            height: 100%;
            .swiper-wrapper{
                width: 100%;
                height: 100%;
                display: flex;
            }
          
            .swiper-slide{
                width: 375px;
                height: 100%;
              flex-shrink: 0;
                
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    img{
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
     .my-bullet-active{
                background: #fff !important;
                opacity: 1 !important;
                width: .34667rem !important;
                border-radius: .06667rem !important;
            }
      
</style>