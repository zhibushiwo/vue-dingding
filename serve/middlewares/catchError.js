const assert = require("assert")
function catchError() {
    return async (ctx, next) => {
        console.log(ctx, next)
        try {
            await next()
        } catch (err) {
            if (err instanceof assert.AssertionError) {
                ctx.body = {
                    code: 500,
                    msg: err.message
                }
                return
            }
            ctx.res = `Server Error: ${err.message}`;
            console.error('Unhandled Error\n', err);
        }
    }
}
module.exports = catchError