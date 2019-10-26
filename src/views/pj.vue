<template>
    <div>
        
        <!-- 折线图 -->
        <div id="chartmainline" style="width:100%; height:400px;"></div>
        <!-- 柱状图 -->
        <div id="chartmainbar" style="width:100%; height:500px;"></div>
    </div>


   
</template>

<script>
export default {
    name:'pj',
    data(){
        return{
            optionline:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["Android","IOS","PC","Ohter"]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'line', //设置图表主题
                    data:[500,200,360,100]
                }]
            },
            optionbar:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                     labelLine: {
                normal: {
                  show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
                }
              },
              label: {
                normal: {
                  position: 'outer',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                  // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                  // {a}指series.name  {b}指series.data的name
                  // {c}指series.data的value  {d}%指这一部分占总数的百分比
                  formatter: '{c}'
                }
              },

                // xAxis:{
                   
                // },
                // yAxis:{
                //      data:["Android","IOS","PC","Ohter"]
                // },
                labelLine:{
                      normal: {
                  show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
                    }
                },
                series:[{
                    name:'访问量',
                    type:'pie', //设置图表主题
                    data:[
                        {value:500,name:'Android'},
                        {value:200,name:'IOS'},
                        {value:360,name:'PC'},
                        {value:120,name:'Ohter'}
                    ]
                }]
            }
        }
    },
    mounted() {
       this.drawLine()
    },
    methods: {
      drawLine(){
        //基于准本好的DOM，初始化echarts实例
        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
        let chartmainbar = this.$echarts.init(document.getElementById("chartmainbar"));
        //绘制图表
        chartmainline.setOption(this.optionline);
        chartmainbar.setOption(this.optionbar);
      }  
    },

      created() {
            this.$store.state.showBottomNav = false
        }
}
</script>

<style  scoped>

</style>