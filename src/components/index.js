const components={
    Goupiao:()=>import("@/components/goupiao/Goupiao"),
    Hoemchart:()=>import("@/components/home/Hoemchart")
}
export default{
    install(Vue){
        for(let key in components){
            Vue.component(key,components[key]);
        }
    }
}