<template>
<!-- v-show="$route.name!=='index'"-->

       <div class="tabbar" v-show="$store.state.showBottomNav">
           <nav class="nav">
            <router-link @click.native="clciktp(false)" class="tab-item" to="/" >
                <div ref="sy" class="tab-item-icon home-icon"><i class="iconfont iconSSS"></i></div>
                <div class="tab-item-label">首页</div>
            </router-link>
            
            <router-link @click.native="clciktp(true)"  class="tab-item" to="/theatre/theatreList">
                <div :class="[isShow?'active':'']" class="tab-item-icon theater-icon" ><img v-show=isShow style="width: 30px;" src="../assets/style/img/download.png" alt=""></div>
                <div  class="tab-item-label">剧院</div>
            </router-link>

            <router-link class="tab-item " to="/pj">
                <div class="tab-item-icon ticket-icon"><i class="iconfont iconicon-test"> </i></div>
                <div class="tab-item-label" >票夹</div>
            </router-link>

            <router-link class="tab-item" to="/login">
                <div class="tab-item-icon my-icon"><i class="iconfont iconicon-test"> </i></div>
                <div class="tab-item-label">我的</div>
            </router-link>
           </nav>
    </div>
</template>
<script>
export default {
    name:"tabbar",
    data(){
        return{
            isShow:false,
           
        }
    },
    methods: {
        clciktp(isShow){
          this.isShow=isShow
          this.isShow?this.$refs.sy.id="zz":this.$refs.sy.id='';
        }
    },
    
}
</script>

<style lang="less" scope>
.tabbar .nav .theater-icon{
     background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKgso/AAAAI3RSTlMAoJD249lr8d/OwrSUdCgiEg0Fu6t6Vk5HLevam5qLb1MwLww+CtkAAAEsSURBVEjH7dTLjoIwGIZhoJSjICAieNb3/u9xYuxiBuzfzmI2E94VyedjBEODtbW1P60Ojwgdw9puB4UjNdjspKCIhApQkwX3kARiCfSWKSUPHOWklgVCFw5hxf8Gd1Wy/T5sk6rzxntAR2P7um7HSAN7X9zFvMvLMudd3HniO/SRBkw66uHuiQvYvm40zOM4D5PXNRR+eIJyPpUweeELjPNphIsPbhSn5XZCNR64gttyu0HlgTPSdrm1KZkbH2DzadzAwYl3UH8aa9g5sPnMMvOtIja/bpm5HxGb57LMPEkRJ1DZcAWJiDWqseFGoSUcwzmwdoZYwMDTjp+AiItAqHDgQcKDjM1p87hGP7o+zPkkYnPOaWZpczLacUnWmLeAWRvzb2WUwdraL/oCOmw2A/vD0QUAAAAASUVORK5CYII=)  no-repeat 50%;
     width:.8rem ;
     height: .8rem;
     background-size: .8rem .8rem;
     text-align: center;
     display: inline-block;
   
}
    .tabbar{
        position: fixed;
        z-index: 100;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.30667rem;
        background-color: #fefefe;
        -webkit-box-shadow: 0 0 0.06667rem #ebebeb;
        box-shadow: 0 0 0.06667rem #ebebeb;
        .nav{
                height: 100%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                a{
                    text-align: center;
                }
                .tab-item{
                    flex:1;
                    height: 100%;
                    line-height:0.374rem;
                }
            }       
    }
    .tabbar .nav .home-icon{
     background:url(data:image/png;base64,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)  no-repeat 50%;
     width:100%;
     height: 100%;
     background-size: 1.12rem 1.12rem;
}

.tabbar .nav .ticket-icon{
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAS1BMVEUAAAA4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTV6K33hAAAAGHRSTlMAsEFw3PLRhDNmCa0UxfDGuo1iUEwvIG1UI89BAAAA5ElEQVRIx+3V626EIBCG4ZGiLKh7cE/v/V9p27Qp22bG2EyadBOefyJfMAIz0jRN89Nu7KniJNXMh37c6dmF7x6mTVSLui4QuyrJg/vnYAS0tUeo800JRmV4T5QNIntlFLot4Q7+NlzS/XfhWaoM+o7OaniAIX89vUBQJuX3Wcr4BeAwrYWnA8BFFOEIDMUOlwE4BtFdIyQ7nCBexXTr6YsVLm8vb7LiBMEKBzjJmjNkK5zh7Av7Ptv5w3xb5TokruPpuhiOK+ksBv+qhjlKr6/o13Zjs9uNLGyy2C3WVFts0zyFV7hJH05/U1+QAAAAAElFTkSuQmCC)  no-repeat 50%;
    width:.8rem ;
    height: .8rem;
    background-size: .8rem .8rem;
    text-align: center;
    display: inline-block;
}
.tabbar .nav .my-icon{
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAflBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMsQtpcAAAAKXRSTlMA8SYH/NKUDwP33sD06dl1ZlxGPR4U4qil7MvIuKufgnpsNrRTTi4XDexg0X0AAAG6SURBVEjH7ZXZeqowFEYJJJF5rqJVq53X+7/gOTW0thaSeF3/G8LerIQ9fDvBTTf9Nb03e5VDrvbN+5VorxO+lOj+CjSukhOkskyZVRX7sostkOsu+niJOp0D24UnuwH03dlwp4GNFx1nINqftlZA5vPnDyBeL42vAh7cbCiR7W9z+98cOuEV6Cm7hpWLfZOIxWQaBfLNAdfm4Omjawe8g27a08HOAZfIaNoTSUoHnLOccy3JHTCoOZcCByxtJ0sHvCSJZ9o2YemAt/A47XmErQM+nHs4Gh/nnj+4WhsK83mFOjw/HxSV2aMAZ3NnUI2LUZnZyyzs6iAJTzHeG/b+lIMwgS5waoDUjJG+qaqmN8MkhcFnCpVQXkQXfti85lBYgKjjbxWuBRRmPzedAqr+LFWtgDT0nr07k+Vz1neLwFuRBoRZC0BH3mg3CIC1eVsDiKHzQtuxvmk9DqZ0rHfrDncAKPYv32+Ml30BMDgC70tANfGlPW4UUPbzpGmk/GjQS/yYm9ab1ROkoa38T5Zcwbq3xLSG1nbVNLaoGtuVUyAia+8IilknbAKrNjD/2/Joh49yFdx00zX6B22TLs3kGFQqAAAAAElFTkSuQmCC)  no-repeat 50%;
    width:.8rem ;
    height: .8rem;
    background-size: .8rem .8rem;
    text-align: center;
    display: inline-block;
}
#zz{
     background:url("../assets/style/img/1.png")  no-repeat 50%;
    width:.8rem ;
    height: .8rem;
    background-size: .8rem .8rem;
    text-align: center;
    display: inline-block;
}
</style>