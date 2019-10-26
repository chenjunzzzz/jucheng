import axios from 'axios';
const state={
    slide_list:[],//轮播图
    popular_city:[],//热门城市
    letter_city:[],//城市名
    performance_list:[],//热门演出
    searchtext_list:[],//搜索热门城市
};
const mutations={
    CHANGEADDSLIDE_LIST(state,list){
        state.slide_list=list
    },
    CHANGEADDPOPU_LIST(state,list){
        state.popular_city=list
    },
    CHANGEADDLETTE_LIST(state,list){
        state.letter_city=list
    },
    CHANGEADDPERFORM_LIST(state,list){
        state.performance_list=list
    },
    CHANGEADDSEARCHTEXT_LIST(state,list){
        state.searchtext_list=list
    }
};
const actions={
   async hoemchart({commit}){
        const {data}=await axios.get("cj/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.6&referer=2");
        commit("CHANGEADDSLIDE_LIST",data.data.slide_list)
    },
    async popularcity({commit}){
        const {data}=await axios.get("/cj/city/city/getHotCityList?version=6.0.6&referer=2")
        commit("CHANGEADDPOPU_LIST",data.data.hot_city_List)
    },
    async lettercity({commit}){
        const {data}=await axios.get("/cj/city/city/getSortedCityList?version=6.0.6&referer=2")
        commit("CHANGEADDLETTE_LIST",Object.values(data.data))
    },
    async performance({commit}){
        const {data}=await axios.get("/cj/Show/Search/getHotWord?version=6.0.6&referer=2")
        commit("CHANGEADDPERFORM_LIST",data.data)
    },
    async searchtext({commit},value){
        let str=encodeURI(value).replace(/%/g,"%25")//给每个%后面增加25
        const {data}=await axios.get(`/cj/Show/Search/getShowList?keywords=${str}&page=1&sort_type=1&version=6.0.6&referer=2`)
        commit("CHANGEADDSEARCHTEXT_LIST",data.data.list)
    }
//encodeURI 和 decodeURI

};

export default{
    state,
    mutations,
    actions
}