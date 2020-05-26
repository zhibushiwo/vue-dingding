const assert = require("assert")
function catchError() {
    return async (ctx, next) => {
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
            ctx.throw(err)
            ctx.res = `Server Error: ${err.message}`;
        }
    }
}
module.exports = catchError