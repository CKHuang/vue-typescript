"use strict"

const helper = require('./helper');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

const tsConfigFile = helper.root(`/tsconfig.json`);

const tsConfigPathsPlugin = new TsConfigPathsPlugin({
    compiler : `typescript`,
    configFileName : tsConfigFile
})

const dist = helper.root('/dist');

const config = {
    entry : {
        app : helper.root('/src/main.ts')
    },
    output : {
        path : dist,
        filename : `[name].js`,
        publicPath : '/'
    },
    devtool : 'source-map',
    resolve : {
        extensions : ['.js','.vue','.ts','.tsx'],
        plugins : [
            tsConfigPathsPlugin
        ] 
    },
    externals : {
        "vue" : "Vue"
    },
    module : {
        rules : [{
            test : /\.tsx?$/,
            exclude : /node_modules/,
            enforce : 'pre',
            loader : 'tslint-loader'
        },{
            test : /\.tsx?$/,
            exclude : /node_modules/,
            loader : 'awesome-typescript-loader',
            options : {
                configFileName : tsConfigFile
            }
        },{
            test : /\.vue$/,
            loader : 'vue-loader'
        }]
    },
    plugins : [
        new CleanWebpackPlugin([
            'dist'
        ],{
            verbose : true,
            root : helper.root()
        })
    ]
}

module.exports = config;