<template>
    <div class="idnex" style="height:100%">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
export default {
    name:"idnex",
    methods: {
        sx(){
            this.$store.state.showBottomNav =true;
        }
    },
    mounted() {
        console.log(window.history)
    },
    components:{
        TabBar:()=>import("@/components/TabBar")
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        // console.log(this);
        //你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
        next((vm)=>{
            vm.sx()
          console.log(vm)
        });
      },
    
}
</script>

<style scoped>

</style>>