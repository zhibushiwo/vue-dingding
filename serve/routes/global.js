const Router = require("koa-router")
const router = new Router()
const fs = require("fs")
const { formatDate, GUID } = require("../utils/common")
const { staticPath } = require("../config/key")

router.post("/uploadfile", async ctx => {
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const ext = file.name.split('.').pop()
    const fileFolder = `/upload/${formatDate(new Date, 'yyyyMMdd')}`
    const fileFolderWithStatic = `${staticPath}/${fileFolder}`
    if (!fs.existsSync(fileFolderWithStatic)) {
        fs.mkdirSync(fileFolderWithStatic)
    }
    const fileName = `${GUID()}.${ext}`
    const filePath = `${fileFolderWithStatic}/${fileName}`
    const upStream = fs.createWriteStream(filePath)
    await reader.pipe(upStream)
    ctx.body = {
        filePath: `${fileFolder}/${fileName}`
    }
})
module.exports = router