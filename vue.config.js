module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        devServer: {
            headers: { "Access-Control-Allow-Origin": "http://localhost:8081" }
        }
    }
}