module.exports = {
    runtimeCompiler: true,  // 加入内容  
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8090,
        https: false,
        hotOnly: false
    }
}