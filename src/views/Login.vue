<template>
    <div style="height:100%;overflow: hidden;">
        <div v-show="valiPhone" class="invalid-feedback">请输入手机号</div>
             <div class="views login_bg" >
                    <div class="navbar">
                        <div class="navbar-inner navbar-on-center">
                            <div class="left">
                                <a href="javascript:history.back(-1)" class="link">
                                    <span class="iconfont">&#xe75b;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main">
                        <div class="login-wrap">
                            <h1 class="xtitle login-xtitle">欢迎来到聚橙网</h1>
                            <div class="binded-iphone">
                                <div class="login-area">
                                    <form>
                                        <ul class="lg-list">
                                            <li class="lg-item">
                                                <input type="input" @blur="isValidate" v-model="phoneId" placeholder="请输入手机号/邮箱" class="lg-input" />
                                              
                                            </li>
                                            <li class="lg-item">
                                                <input type="input" v-model="code"  placeholder="请输入验证码" class="lg-input pwd-input"/> 
                                                <button style="width:88px;" :disabled="disabled" @click.prevent="sendCode">{{disabled?num:btnStr}}</button>  
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                <div class="login-btn">
                                    <a @click="login" :disabled="disabled" class="btn lg-btn">登录</a>
                                </div>
                              

                                <div class="login-toggle">
                                    <div class="tg-wrap tg-sms">
                                        <span class="left tg-mail">忘记密码</span>
                                        <span class="right tg-login">验证码登录/注册</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-wrap" >
                        <div class="footer-title">
                            <p class="footer-title-txt">其他登录方式</p>
                        </div>
                        <div class="footer-inner">
                            <div class="item">
                                <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq" class="img-media">
                                    <span class="icon qq-icon"></span>
                                </a>
                            </div>
                            <div class="item">
                                <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina" class="img-media">
                                    <span class="icon weibo-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
    </div>
</template>

<script>
export default {
    name:"login",
    data() {
        return {
            valiPhone:false,
            disabled:false,
            phoneId:"",//手机号
            code:"",//验证码
            num:60,
            btnStr:"获取验证码",
        }   
    },
      created() {
            this.$store.state.showBottomNav = false
        },
    methods: {
        isValidate(){
            if(this.phoneId<1 ||!/^1[345678]\d{9}$/.test(this.phoneId)){
                this.valiPhone=true
            }else{
                this.valiPhone=false
            }
            if(this.valiPhone===false){
                return true;
            }
        },
      async sendCode(){
            if(this.isValidate()){
                const res = await this.$store.dispatch("sendCode",{phoneId:this.phoneId});
                this.disabled=true;
                this.time=setInterval(()=>{
                this.num--;
                  console.log(this.num)
                  if(this.num<=0){
                 this.disabled=false;
                this.num=60;
              
                clearInterval(this.time)
            }else{
                    1673791  
                   }
            },1000)
         }
        },
       async login(){
            if(this.isValidate()){
                const sing = await this.$store.dispatch("singCode",{phoneId:this.phoneId,code:this.code})
                console.log(sing,"ss")
                if(sing.data.ok===1){
                      this.$store.commit("CHANG_PHONE_ID",{
                            phoneId:sing.data.phoneId,
                            code:sing.data.code,
                        });
                        this.$router.push("/")
                }else{
                       alert(sing.data.msg)
                   }
            }
        }
    },
}
</script>

<style scope>
   .views{
    position: relative;
    width:100%;
    height:90%;
    background-color: #fdfdfd;
    z-index: 2;
}
.login_bg{
    background-image: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png");
    background-repeat: no-repeat;
    background-size:100%;
    padding-top: 28px;
    padding-bottom:39px;
    /* background-position: center center; */
}
.navbar{
    width: 100%;
    height: 44.1331px;
    font-size: 17.0491px;
    color: #212121;
    backface-visibility: hidden;
    margin: 0;
    position: absolute;
    z-index: 500;
    left: 0;
    top: 0;
}
.navbar-inner{
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 16.0434px 0 15.08px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.left{
    top: 0;
    height: 44.1331px;
    line-height: 44.1331px;
    margin-right: 5px;
    font-size: 14.0331px;
    display: flex;
    z-index: 5;
}
.navbar .left a{
    vertical-align: middle;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
}
.navbar .left a .icon{
    vertical-align: text-top;
    margin-right: 9px;
    font-size: 20.1051px;
    color: inherit;
}
/*@font-face {*/
/*    font-family: 'iconfont';*/
/*    src: url('iconfont.eot');*/
/*    src: url('iconfont.eot?#iefix') format('embedded-opentype'),*/
/*    url('iconfont.woff2') format('woff2'),*/
/*    url('iconfont.woff') format('woff'),*/
/*    url('iconfont.ttf') format('truetype'),*/
/*    url('iconfont.svg#iconfont') format('svg');*/
/*}*/
.left .iconfont {
    font-family: "iconfont" !important;
    color: #666;
    font-size: 20.0017px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.views .main{
    position: relative;
    padding: 10px 20px 0;
 
}
.views .login-wrap {
    padding-top: 57.3051px;
}
.views .login-wrap .login-xtitle {
    text-align: center;
}
.views .login-wrap .xtitle {
    height: 0px;
    font-size: 25px;
    font-weight: 700;
    font-stretch: normal;
    line-height: 0px;
    color: #232323;
}
h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem;
}
.views .login-area {
    padding-top: 75px;
}
form {
    display: block;
}
.views .login-area .lg-list {
    padding-bottom: 15px;
}
ul {
    display: block;
    /* list-style-type: disc; */
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem; */
    padding-inline-start:20px;
}
.views .binded-iphone .login-area .lg-item {
    padding: 12.6px 0;
    margin-bottom: 11px;
}
.views .login-area .lg-list .lg-item {
    list-style: none;
    width: 100%;
    border-bottom: 1px solid #666;
    font-size: 16px;
    color: #232323;
    line-height: 20px;
    padding-bottom: 17.53px;
}
li {
    display: list-item;
}
.views .login-area .lg-list .lg-item .lg-input {
    width: 225px;
    height: 20px;
    font-size:17px;
    border: none;
    background-color: #fdfdfd;
}
.views .binded-iphone .login-area .lg-item .remove-btn {
    display: inline-block;
    width: 13.04px;
    height: 13.04px;
    vertical-align: middle;
    background-image: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_icon_delete.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
}
.views .binded-iphone .login-area .lg-item:last-child {
    margin-bottom: 0;
}
.views .login-area .lg-list .lg-item .lg-input {
    width: 225px;
    height: 20px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: #fdfdfd;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
.views .binded-iphone .login-area .lg-item .btn-eye.visualise {
    background-image: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_icon_visible.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
}
.views .binded-iphone .login-area .lg-item .btn-eye {
    margin-left: 15px;
    /* display: inline-block; */
    width: 14px;
    height: 14px;
    vertical-align: middle;
}
.views .login-btn {
    padding-top: 23.5px;
}
.views .login-btn .btn {
    display: block;
    width: 100%;
    height: 50.1px;
    line-height: 50.1px;
    font-size: 18px;
    color: #fefefe;
    border-radius: 30px;
    background-color: #ebebeb;
    border: none;
}
.btn {
    /* display: inline-block; */
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    /* border: 0.0213rem solid #b2b2b2; */
    /* -webkit-border-radius: 5.0149px; */
    /* border-radius: 5.0149px; */
    /* padding: 0 25.0651px; */
    margin: 0;
    /* height: 60.16px; */
    text-decoration: none;
    text-align: center;
    /* line-height: 58.1531px; */
    -webkit-appearance: none;
    /* -moz-appearance: none;
    -ms-appearance: none; */
    /* appearance: none; */
    white-space: nowrap;
    text-overflow: ellipsis;
    /* font-size: 24.064px; */
    font-family: inherit;
    /* color: #999; */
    background: none;
    cursor: pointer;
}
.views .login-toggle {
    margin-top: 30px;
}
.views .login-toggle .tg-wrap {
    overflow: hidden;
}
.views .login-toggle .tg-wrap .left {
    float: left;
}
.views .login-toggle .tg-wrap span {
    font-size: 15px;
    color: #232323;
}
.views .login-toggle .tg-wrap .right {
    float: right;
    margin-top: 9px;

}
.views .login-toggle .tg-wrap span {
    font-size: 15px;
    color: #232323;
}
.views .footer-wrap {
    box-sizing: border-box;
    padding-left: 71px;
    padding-right: 71px;
    position: absolute;
    width: 100%;
    bottom:30px;
}
.footer-wrap {
    bottom: 56px !important;
}
.views .footer-wrap .footer-title {
    margin-top: -23.5px;
    position: relative;
    height: 31px;
    border-top: 1px solid #999999;
}
.views .footer-wrap .footer-title .footer-title-txt {
    position: absolute;
    left: 50%;
    padding: 0 10px;
    font-size: 13px;
    color: #999999;
    height: 25px;
    line-height: 25px;
    background-color: #FEFEFE;
    transform: translate3d(-50%, -50%, 0);
    /* transform: translate3d(-50%, -50% 0); */
}
p{
    display: block;
    /* margin-right: 10%; */
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem; */
}
.views .footer-wrap .footer-inner {
    display: flex;
}
.views .footer-wrap .footer-inner .item {
    flex: 1;
    justify-content: center;
    text-align: center;
}
.views .footer-wrap .footer-inner .img-media {
    display: block;
    height: 36px;
}
a{
    text-decoration: none;
    color: inherit;
}
.views .footer-wrap .footer-inner .qq-icon {
    background-image: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/qq.png");
}
.views .footer-wrap .footer-inner .icon {
    display: inline-block;
    width: 36px;
    height: 36px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.icon {
    font-family: "iconfont" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    /* -webkit-text-stroke-width: 0.0043rem; */
    color: #d8d8d8;
    cursor: pointer;
}
.views .footer-wrap .footer-inner .weibo-icon {
    background-image: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/weibo.png");
}
.dialog {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5.0149px;
    padding: 7.5px 14px;
    max-width: 82px;
    word-wrap: break-word;
    word-break: normal;
    position: fixed;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    line-height: 1.2;
}
.dialog .tips-text {
    font-size: 15.04px;
    line-height: 15.04px;
    color: #fff;
}
.dialog .tips-text {
    font-size: 24.064px !important;
}

</style>