const Router = require("koa-router");
const router = new Router();

const user_router = require("./user");
router.use('/user', user_router.routes(), user_router.allowedMethods());

module.exports = router;