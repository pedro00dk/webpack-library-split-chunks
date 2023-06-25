import HtmlWebpackPlugin from 'html-webpack-plugin'
import 'webpack-dev-server'

export default {
    mode: 'development',
    entry: './index.js',
    output: { clean: true },
    devServer: { port: 5000 },
    plugins: [new HtmlWebpackPlugin()],
}
