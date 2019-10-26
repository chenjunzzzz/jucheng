export default[
    {
        name:"selectCity",
        path:"/index/selectCity",
        component:()=>import("../../views/SelectCity.vue")
    },
    {
        name:"search",
        path:"/search/index",
        component:()=>import("../../views/Search.vue")
    }
]