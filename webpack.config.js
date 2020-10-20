const path = require('path')
module.exports = {
    entry: "./script/index.js",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            }]//end rules
    }//end module

}//end modules.exports