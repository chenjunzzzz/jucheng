module.exports = {
    devServer:{
        open:true,
        host:"127.0.0.1",
        port:8085,
        proxy:
        {
            "^/ele":{
                // 代理的服务器地址  http://127.0.0.1/adminLog
                target:"http://127.0.0.1",
                // 是否开启代理
                changeOrigin:true,// http://127.0.0.1/lala
                // 地址重写
                pathRewrite:{
                    "^/ele":""
                }
            },
            "^/cj":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/cj":""
                }
            },
            "^/ch":{
                target:"https://m.juooo.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/ch":""
                }
            }
        },
    }
}