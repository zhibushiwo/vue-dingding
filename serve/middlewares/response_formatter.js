const response_formatter = () => async (ctx, next) => {
    await next()
    console.log(ctx.body)
    if (ctx.body) {
        ctx.body = {
            code: 200,
            message: 'success',
            data: ctx.body
        }
    } else {
        ctx.body = {
            code: 200,
            message: 'success'
        }
    }
}
module.exports = response_formatter