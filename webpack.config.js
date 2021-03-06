const path = require('path');
const PATH_VIEWS = './src/components/';
const PATH_ASSETS = './src/assets/';

module.exports = {
    entry: {
        test: `./test/index.ts`
    },

    output: {
        path: path.resolve(__dirname, PATH_ASSETS),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'babel-loader',
            }
        ]
    }
};