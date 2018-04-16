"use strict"

const helper = require('./helper')

const config = {
    entry : {
        app : helper.root('/src/main.ts')
    },
    output : {
        filename : `[name].[hash].js`
    },
    resolve : {
        extensions : ['.js','.vue','.ts','.tsx']
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
            loader : 'ts-loader'
        }]
    }
}

module.exports = config;