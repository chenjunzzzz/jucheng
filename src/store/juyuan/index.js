import axios from "axios";

const state={
    juyuanList:[],
    wutaiList:[],
    details:[],//商品详情
    day:[],//票价
    getshowlist:localStorage.getshowlist,
    name:"",
    list:[],
    p:"",//标签内容
    city:localStorage.city||[],


}
const mutations={
    CHANGE_ADDJUYUANLIST(state,theatre_list){ 
        state.juyuanList=theatre_list
       
    },
    CHANGE_WUTAILIST(state,_id){
      
        let seesinstorg=JSON.parse(window.sessionStorage.store).juyuan.juyuanList
        let a=_id
       
        state.name=seesinstorg.find((v,i)=>{
            return seesinstorg[i].id==a
        }).name
        state.wutaiList=seesinstorg.find((v,i)=>{
            return seesinstorg[i].id==a
        }).showList

    },
    CHANGE_ADDSHOWLIST(state,list){
        state.getshowlist=localStorage.getshowlist=list.date.list;
        // state.name=localStorage.name=list.date.name;
    },
    CHANGE_ADDDETILST(state,list){
        state.details=list;
        state.p=list.show_desc.desc;
    },
    CHANGE_ADDDAY(state,list){
        state.day=list;
    },
    CHANGE_ADDCITY(state,list){
        state.city=localStorage.city=list;
    }
  
}
const actions={
   async getjuyuanlist({commit}){
        const {data}= await axios.get("/cj/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2")
        
        commit("CHANGE_ADDJUYUANLIST",data.data.theatre_list)
    },
    async getshowlist({commit},info){
        let {id,category}=info
        const {data}=await axios.get(`/ch/Theatre/showListData?tid=${id}&category=${category}&page=1`)
        let date={
            list:data.datas,
            name:data.theatre,
        }
        commit("CHANGE_ADDSHOWLIST",{date})
    },
    async getScheduleinfo({commit},id){
        const {data}=await axios.get(`/cj/Schedule/Schedule/getScheduleInfo?schedular_id=${id}&version=6.0.5&referer=2`)
        commit("CHANGE_ADDDETILST",data.data.static_data)
        
    },
    async getday({commit},id){
        const {data}=await axios.get(`/cj/Schedule/Schedule/getScheduleTicket?schedular_id=${id}&version=6.0.5&referer=2`)
        //const date=await axios.get(`/cj/Schedule/Schedule/getScheduleInfo?schedular_id=${id}&version=6.0.5&referer=2`)
        commit("CHANGE_ADDDAY",data.data.list) 
    },
    async province({commit},query){
        const {data}=await axios.get(`/cj/Schedule/Schedule/getTour?show_id=${query.show}&venue_id=${query.venue}&version=6.0.6&referer=2`)
  
        commit("CHANGE_ADDCITY",data.data.tour_list)
    },
    sendCode(content,{phoneId}){
        return axios.post("ele/sendCode",{
            phoneId
        })
    },
    singCode({commit},data){
        return axios.post("ele/userLogin",data)
    }
}

export default{
    state,
    mutations,
    actions
}