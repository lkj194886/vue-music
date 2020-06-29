module.exports = {
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8090,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null // string | Object
        
    }
}