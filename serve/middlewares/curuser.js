
const keys = require("../config/key")
const jwt = require('jsonwebtoken')
const getCurrentUser = () => async (ctx, next) => {
    let user = null
    if (ctx.header && ctx.header.authorization) {
        user = await verToken(ctx.header.authorization)
    }
    ctx.state = {
        user,
    }
    await next();
}

const verToken = async (token) => {
    const user = await jwt.verify(token.split(' ')[1], keys.secretKey)
    return user
}

module.exports = getCurrentUser