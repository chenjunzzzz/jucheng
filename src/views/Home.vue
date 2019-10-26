<template>
      <div style="overflow: hidden;">
          <header class="cjhheader">
              <div class="head-address" @click="city(true)"><strong class="iconfont">&#xe60c;</strong><span>全国</span></div>
              <div class="head-search" @click="city(false)"><img src="https://m.juooo.com//static/img/nav_icon_search.f194288.png" alt=""><span>搜索热门演出</span></div>
              <span class="head-space"><a data-v-2683b533="" href="https://m.juooo.com/Distributor/centre" class="head-space__block"><img data-v-2683b533="" src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png"></a></span>
          </header>
          <main>
              <Hoemchart></Hoemchart>
          </main>
            <p v-for="(item,index) in 5" :class="[{active: checkedGroup.indexOf(index) > -1},'class-item']"  @click="changeStyle(index)" >张三炮{{index}}</p>
          
      </div>
</template>

<script>
export default {
    name:"home",
    data() {
        return {
            checkedGroup:[]
        }
    },
    methods: {
        city(type){
          type?this.$router.push("index/selectCity"):this.$router.push("search/index");  
        },
         changeStyle(index) {
        if(this.checkedGroup.indexOf(index) == -1) {
          this.checkedGroup.push(index);
        }else {
          var spliceIndex = this.checkedGroup.indexOf(index);
          this.checkedGroup.splice(spliceIndex, 1);
        }
         }}
}
</script>

<style lang="less" scoped>
p{
    width: 150px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    line-height: 30px;
}
.active{
    background: yellow;
}
    .cjhheader{
        display: flex;
        align-items: center;
        height: 1.17333rem;
        width: 100%;
        padding: 0 .4rem;
        position: absolute;
        left: 0;
        right: 0;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 10;
        .head-search{
            width: 6.34667rem;
            height: .74667rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border: 1px solid hsla(0,0%,88%,.2);
            background-color: rgba(0,0,0,.2);
            border-radius: .53333rem;
            margin-left: .10667rem;

        }
        .head-address{
                display: flex;
            align-items: center;
            width: 1.56rem;
            height: .74667rem;
            border-radius: .46667rem;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
            
        }
        .head-space{
            width: .72rem;
            height: .66667rem;
            a{
                width: 100%;
                height: 100%;
                display: block;
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
</style>