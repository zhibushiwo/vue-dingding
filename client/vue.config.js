module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            },
        }
    },
    css: {
        loaderOptions: {
            scss: {
                data: ` @import "~@/style/variables.scss";
                       @import "~@/style/mixin.scss";
                `
            }
        }
    }
}