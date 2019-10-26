<template>
    <div>
        <!--布局未-->
        <el-drawer direction="btt" :visible.sync="drawer" size="50%"  title="选择日期" >
              <el-radio-group v-model="radio1" class="rqi" >
                <el-radio  label="1" border >2019.09.21 周六</el-radio>
                 <el-radio  label="2" border disabled:true >2019.09.21 周六</el-radio>
                 </el-radio-group>

            <div class="changci">
                <div class="xz">选择场次</div>
                    <el-radio-group v-model="radio2" class="rqi rqo" >
                <el-radio  label="1" border >14:00</el-radio>
                 <el-radio  label="2" border  >19:30</el-radio>
                 </el-radio-group>
              
            </div>
            <div class="price">
                <div class="xz">选择价格</div>
                <el-radio-group v-model="radio3" class="pricespan" >
                    <el-radio v-for="(item,index) in $store.state.juyuan.day" :label="index" :id="'zz'+index"  border >{{item.price}}元</el-radio>
                 </el-radio-group>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {

        return {
            radio3:0,
            radio1: '1',
            radio2: '1',
            direction:'btt',
            drawer: false,
        innerDrawer: false,
        week:this.$store.state.juyuan.week,
      
        }
    },
    methods: {
        //点击日期和场次 id变化查询 请求查询价格(未完成))

    },
    mounted() {
        this.$store.dispatch("getday",this.$router.history.current.params.id)
   
    },
    
    name:"goupiao",
}
</script>

<style lang="less" scope>
    .el-drawer {
        height: 66% !important;
        #el-drawer__title{
            font-size: .37333rem;
            font-weight: 700;
            color: #232323;
            margin-bottom: 10px;
            overflow: hidden;
        }
         .req1{
                flex-wrap: wrap;
                span{
                    margin-bottom: 12px;
                }
            }
        .rqi{
            height: 40px;
            display: flex;
            padding: 0 15px;
             flex-wrap: wrap;
            label{
                 margin-right:0px;
                span{
                   span{
                       display: none;
                   }
                }
            }
        }
        .xz{
            font-size: 0.37333rem;
            font-weight: 700;
            color: #232323;
            margin-bottom: 10px;
            padding: 20px 20px 0;
           
        }
        .el-radio-group.pricespan{
            display: flex;
             flex-flow: wrap;
             padding: 0 15px;
             label:nth-child(4){
                 margin-left: 0px;
             }
             label{
                 width: 30%;;
                     padding: 12px 20px 0 10px;
                     margin-right: 0px;
                     margin-bottom: 10px;
                     span{
                         span{
                             display: none;
                         }
                     }
             }
        }
        .el-drawer__body{
            .el-radio.is-bordered.is-checked{
                    border: 1px solid #ff6743;
                    color: #ff6743;
            }
            .el-radio__input.is-checked+.el-radio__label {
                    color: #ff6743;
            }   
        }
   
   
    }
 
</style>