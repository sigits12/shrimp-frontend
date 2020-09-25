module.exports = {
    // proxy API requests to localhost during development
    devServer : {
        proxy: 'http://localhost:8000/api',
        hot: true,
        disableHostCheck: true,
        https: false

    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public',

    // modify the location of the generated HTML file.
    // make sure to do this only in production.
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resource/views/index.blade.php'
        : 'index.html'

}