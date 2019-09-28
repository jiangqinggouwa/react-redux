const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:"./src/index.tsx",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist/"),
    },
    // watch:true,这里是监听全部
    devtool:"source-map",//可能会减慢速度
    resolve:{
        extensions:[".ts",".tsx",".js","json"]
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                // loader:"awesome-typescript-loader",
                use:{
                    loader:"awesome-typescript-loader",
                    loader:"babel-loader"
                },
                exclude: /node_modules/,
                // loader:["awesome-typescript-loader","babel-loader"]错误写法
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist/"),
        // publicPath:"/dist",
        port:3000,
        hot:true,
        open:true,
        
    },   
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLPlugin ({
            filename:'index.html',
            template:'template.html'
        })
    ]
}