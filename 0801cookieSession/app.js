const express = require('express')
const app = express()
const routerCookie = require('./router/cookie')
const routerSession = require('./router/sessison')

//쿠키에 있는 데이터를 꺼내올때
//사용할 수 있게끔 변환해주는 역할
const cookieParse = require('cookie-parser')
//세선 : 공통 저장 공간을 서버에 만들어서 사용하는 기능 
const session = require('express-session')
//가져온 기능을 사용하기위해서는 app.use의 미들웨어가 필요함
app.use(session({
    httpOnly : true , //http 통일때 허용하겠습니다.
    secret : 'secretkey', //암호화 키 
    resave : false,  //요청이 들어 왔을 때 세션에 수정 사항이 없더라도 다시 저장
}))
app.use('/s',routerSession)
app.use(cookieParse())
app.use('/c',routerCookie)

app.listen(3000)
