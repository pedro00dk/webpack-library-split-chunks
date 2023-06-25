export default {
    mode: 'development',
    entry: './index.js',
    output: { publicPath: '/', library: { type: 'module' } },
    experiments: { outputModule: true },
}
