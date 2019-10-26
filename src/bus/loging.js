import {Loading} from 'element-ui'
class MyLoading{
    constructor(){
        this.loadingOption={lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            customClass:"elelogin",
            background: 'white',};
    }
    close(){
        this.loading.close();
    }
    open(){
        this.loading=Loading.service(this.loadingOption)
    }
}
export default MyLoading