let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inlineSource: '.(js|css)$',
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ],
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .options({
            svgo: {
                plugins: [{ removeViewBox: false }],
            },
        });
  },
};