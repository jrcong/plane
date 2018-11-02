	module.exports = {
    //项目入口文件
    entry : "./js/index.js",
    //编译之后的输出文件信息
    output : {
        //编译之后的文件路径
        path : __dirname + "/dist",
        //编译之后的文件名称
        filename : "bundle.js"
    },
    //要使用的模块
    module : {
         //加载器
        loaders : [
              //处理css
            {test : /\.css$/, loader : "style-loader!css-loader"},
              //处理图片
             {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2048, // 小于2kb的图片处理成base64
                    name: 'img/[name].[ext]',
                    publicPath:"./dist/"
                }
            }
        ]
    }
}