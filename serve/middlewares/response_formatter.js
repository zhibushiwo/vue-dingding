const response_formatter = () => async (ctx, next) => {
    await next()
    if (ctx.body) {
        ctx.body = {
            code: 200,
            message: 'success',
            data: ctx.body
        }
    } else {
        // TODO: 404 not found
        // ctx.body = {
        //     code: 200,
        //     message: ""
        // }
    }
}
module.exports = response_formatter