//4000번 포트로 서버 열기
//접속했을 때 --> 서버 생성완료
//require("http") --> http 모듈을 가져와서 사용하겠습니다.
const http = require('http')
const m_url = require('url')
//url모듈 : 클라이언트가 보낸 url정보를 사용할 수 있게 도와주는 모듈(기능)
//http://192.168.20.12:4000
http.createServer(function(request, response){ response.writeHead(200, {'Content-Type':'text/html;charset="UTF-8"'})
    //request : 클라이언트 -> 서버
    //response : 서버 -> 클라이언트
    //http://192.168.20.12:4000/?inputId=%E3%85%87%E3%84%B9%E3%84%B4%E3%84%B9&inputPw=sdfds
    // get 방식으로 쿼리스트링 형태로 데이터를 요청보낸다!
    // 쿼리스트링 : ? 를 기준으로 왼쪽에는 주소가 표시
    // 오른쪽 data(key-value) >> key  --> input 태그에 적은 name
    // 데이터가 여러개 라면 & 기호를 기준으로 나뉘어진다.
    
    // url에 담긴 데이터 꺼내기 
    
response.writeHead(200, {'Content-Type':'text/html;charset="UTF-8"'})
response.write("<html>");
response.write("<body>");
response.write("<h1>서버생성완료!</h1>");
response.write("<body>");
response.write("<html>");
console.log(request.url) // 클라이언트가 요청한 url값 
//true --> 쿼리스트링의 데이터부분만 사용하겠습니다.
//.query -> 사용할 수 있게끔 객체로 만들어 주겠습니다.
    let queryData = m_url.parse(request.url, true).query // 모듈의 url
    console.log(queryData)
    console.log("입력한 Id : " + queryData.inputId)
    console.log("입력한 Pw : " + queryData.inputPw) 
    let id = queryData.inputId
    let pw = queryData.inputPw


    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"})
    response.write("<html>")
    response.write('<body>')
    if(id === 'aischool' && pw=== '123'){
        //로그인 성공 ( 서버에서 로그인에 성공한 데이터를 사용자에게 '응답함')
        response.write("<h1>로그인 성공</h1>")
    } else {
        //로그인 실패
        response.write("<h1>로그인 실패</h1>")
    }
    response.write("<html>")
    response.write('<body>')
    //넘겨받은 값은
    //id : aischool, pw : 123
    //h1태그로 '로그인 성공!'
    // 둘중 하나라도 값이 다르다면
    //h1태그로 '로그인 실패!'
    
response.end()
}).listen(4000)
//포트 --> 중복x
//fevicon.ico - 사이트 왼쪽 위에 있는 모양 아이콘