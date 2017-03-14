# Oi lib

# Modelo webpack aplicado

```
'use strict';
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './main.jsx', //jsx ou js inicial
    output: {
        filename: 'bundle-oilib.js' //js compilado
    },
    module: {
        loaders: [
            {
                test: /.js(x)?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css") //nome do css que vai ser gerado pelo build

    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ]
};

---------------------------------------------------
Render do seu App

import React, { Component } from 'react';
import { PageOiDigital } from 'oilib';

class App extends Component {

    render() {
        return (
            <PageOiDigital namePage="Minha Oi" themeFooter="pink" themeHeader="pink" layout="full">
                        teste
                    </PageOiDigital>
        )
    }
}

export default App
```

