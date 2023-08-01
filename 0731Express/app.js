const express = require('express')
const app = express();
// const router = require("./router/router")
const page = require('./router/page')
const user = require('./router/user')
const cookieParse = require('cookie-parser')
//쿠키에 있는 데이터를 꺼내올 때 사용! -> cookiParser

const session = require('express-session')
const nunjucks = require('nunjucks')

app.set('view engine','html')    
nunjucks.configure('views',{
    express: app,
    watch : true
})
//미들웨어 설정법.
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//app.use(router)
app.use(cookieParse())
app.use(session({
    httpOnly : true,
    secret : 'secretkey',
    resave : false
}));


app.use('/page',page) // http://localhost:3000/page
app.use('/user',user) // http://localhost:3000/user

app.listen(3000)
