const express = require("express")
const app = express();
const page = require("./router/page")
const user = require("./router/user")
const nunjucks = require('nunjucks')

app.set("view engine", "html")

nunjucks.configure("views",{
    express: app,
    watch: true
})

app.use(express.urlencoded({extended:true}))
app.subscribe(express.json())
// app.use(router)
// 미들웨어 겅로 설정
app.use('/page',page)
// '/page' 설정하면, 이제 main으로 갈 때, /page/경로로 가야한다.
app.use('/user',user)

// 3. 포트번호 달아주기
app.listen(3000)

