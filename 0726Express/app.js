// const http = require('http')

// http.createServer(function(request, response){

// }).listen(3000)  ---> 기준 서버 생성 방식

const exPostTemp = require('./exPostTemp1')

//1. eexpress 사용 기능 가져오기 
const express = require('express')

//2. express 실행 정보를 app 변수에 저장
const app = express()

//3.router 기능 사용 선언  
const router = express.Router()

//body 영역 사용등록 --> post 방식때 사용되어짐
app.use(express.urlencoded({extended:true})) //body영역 허용
app.use(express.json())//받은 데이터를 json객체로 변환

//4.서버등록 
app.use(router)
//클라이언트가 요청보낸 주소값에 따라서 서버를 사용하겠습니다.

//5. 포트번호 등록
app.listen(3000)

//6. 요청을 보낸 주소값에 대해서 처리!
// http://localhost:3000  --> / 
router.get('/', function(request,response){
    console.log('서버접속 확인')
})
router.get('/plus', function(request,response){
    console.log('plus서버접속 확인')
    
    let num1 = parseInt(request.query.number1)
    let num2 = parseInt(request.query.number2)
    console.log(num1)
    console.log(num2)

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    response.write('<html>')
    response.write('<body>')
    response.write(`${num1}+${num2} = ${num1+num2}`)
    response.write('</body>')
    response.write('</html>')

})

//router를 통해서 각각의 주소값에 따라 다른 기능을 실행 시킬 수 있다!
//주의!! router.get, route.post 각각에 상황에 맞게 사용해야함
router.post('/login', function(request,response){
    console.log('로그인 접속 확인')
    let Id = request.body.inputId
    let pw = request.body.inputPw

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    response.write('<html>')
    response.write('<body>')
    if(Id==='aischool'&&pw==='1234'){
        response.write(`<h1>로그인성공!</h1>`)
        console.log(Id)
        console.log(pw)
        console.log('로그인성공!')
    }else{
        console.log(Id)
        console.log(pw)
        response.write(`<h1>로그인실패!</h1>`)
        console.log('로그인실패!')
    }
    response.write('</body>')
    response.write('</html>')
})

router.post('/grade', function(request,response){
    console.log('서버접속 확인')
    // response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // response.write(exPostTemp.gradetemp(request.body))
    // let name = request.body.name
    // let html = request.body.htmlnum
    // let css = request.body.cssnum
    // let node = request.body.nonum
    // let android = request.body.andnum
    // let avg = request.body.name

    // response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // response.write('<html>')
    // response.write('<body>')
    // response.write(`이름 : ${name} <br>`)
    // response.write(`html : ${html} <br>`)
    // response.write(`css : ${css} <br>`)
    // response.write(`node: ${node} <br>`)
    // response.write(`android : ${android} <br>`)
    // response.write('</body>')
    // response.write('</html>')
})



