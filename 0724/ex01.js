
console.log("실행 확인2222")

const {write} = require('fs')
//파일을 서버로 만들기 위해서는 서버의 기능을 할 수 있는 
//모듈이라는 녀석들을 가져와서 사용해줘야한다!
//http 기능을 불러와서 사용하기!
const http = require('http')

//http://192.168.20.12(ip주소) : 내 주소를 이용하여 서버를 만든다.(cmd에서 ipconfig를 입력해서 ipv4주소 가져오기)
//ip 주소 확인 하는법 cmd창에 ipconfig
// 현재 내 컴퓨터의 ip주소를 확인 가능하다.

//http://192.168.20.12:3000 (포트까지 할당해야 비로소 서버가 만들어짐)
http.createServer(function(request, response){
    //1. creatServer : 현재 js 파일을 서버로 만들어 주는 역할!
    //2. function(request,response){실행로직} : 클라이언트가 요청을 보냈을 때 응답 실행할 로직

    //request : 클라이언트가 서버로 요청을 보냈을 때 정보를 가지고 있다
    let ip = request.connection.remoteAddress;
    console.log('요청보낸 주소 : '+ip)
    // 응답값 만들어 주기 -> html 형식!
    //200 -> 통신성공코드 
    //"'Content-Type':'text/html' --> 통신성공하면 html형식으로 응답
    response.writeHead(200, {'Content-Type':'text/html;charset="UTF-8"'})
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>두번째 응답</h1>");
    response.write("<body>");
    response.write("<html>");


    response.end();
}).listen(3000)

//서버 실행 : node 실행파일명
// 서버 중지 : Ctrl+ c

//CLI : command line interface -> 리녹스 기반에서 많이 사용
//GUI : 사용자에 초점 화면  --> window 명령

//cd : 경로 이동 ex) cd 경로명(파일명) cd .. 이전 경로로 이동
// ls : 현재 경로에서 접근할 수 있는 파일 확인.
// clear : 커맨드창 지우기
// tab : 자동완성

//1. 서버 http creatServer
//2, 포트번호  -> http://ip주소 : 3000
//3-> 서버 -> 클라이언트(response).write, respeonse.end


