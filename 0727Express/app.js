//express 사용 3단계
//1. npm init -> 프로젝트의 정보를 저장하는 package.json 생성
//2. 프로젝특 express 설치
//3. 프로젝트 구조 생성(config)
// config(환경설정), public(정적패키지), router(경로), app.js(서버)


//express 서버 생성
// 1. express 모듈 가져오기
const express = require('express')
// 2. express 실행정보를 app 변수에 담아주기
const app = express();

// 4.경로를 설정 할 수 있는 router 만들기
//const router = express.Router()
// router.get("/",function(request,respeonse){
//     console.log('접속확인')
// })
const router = require("./router/router")

// 동적 페이지를 사용할 수 있는 nunjucks 가져오기
const nunjucks = require('nunjucks')
//view engine 확장자를 html로 사용하겠다!
// html 파일들을 동적파일로 사용할 수 있게 만들겠다!
app.set('view engine','html')    
//views 안에 있는 html을 동적파일로 사용할 수 있게끔 만들겠다!!
// 동적 파일 --> 데이터가 바뀔때마다 화면 내용도 같이 바뀌는 파일
nunjucks.configure('views',{
    express: app,
    watch : true
})
// nunjucks.configure('사용하고자하는파일이름',{
//    express: app, 동적으로 표현할 방식
//    watch : true  시각적으로 표현가능한가?

// router.get("/response",function(request,response){
//     console.log('서버접속완료')
//     console.log(request.query.text)
// })

//5. reouter로 만든 경로를 서버로 가져오기
//서버에 등록 시킨다 -> 미들웨어
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(router)


// 3. 포트번호 달아주기
app.listen(3000)
