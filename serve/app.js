const Koa = require('koa');
const app = new Koa();
const mongoose = require("mongoose");
const KoaBodyParse = require("koa-bodyparser");
const db = require("./config/key").mongoURI;
const routes = require("./routes");
const catchError = require("./middlewares/catchError")
const response_formatter = require("./middlewares/response_formatter")
//const passport = require("passport");
const Koajwt = require('koa-jwt');
const keys = require("./config/key");
const tokenAccess = require("./middlewares/tokenAccess")
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("db connet"))
    .catch(err => console.log("err" + err));
app.use(KoaBodyParse());
app.use(catchError())
app.use(response_formatter())
app.use(
    Koajwt({
        secret: keys.secretKey
    }).unless({
        path: [/^\/login/, /^\/register/]
    })
);
app.use(tokenAccess)
// app.use(passport.initialize());
// require("./config/passport")(passport);

app.use(routes.routes(), routes.allowedMethods());

app.listen(3001);