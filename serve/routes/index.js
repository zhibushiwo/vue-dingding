const Router = require("koa-router");
const router = new Router();

const user_router = require("./user");
const friend_router = require("./friend");
const msg_router = require("./message")

router.use('/user', user_router.routes(), user_router.allowedMethods());
router.use('/friend', friend_router.routes(), friend_router.allowedMethods());
router.use('/message', msg_router.routes(), msg_router.allowedMethods());


module.exports = router;