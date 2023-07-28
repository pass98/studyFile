const http = require("http")
const qs = require('querystring')
//--> body안에 담긴데이터를 객체형식으로 변환해서 사용할 수 있게끔 도와주는 역할
const exPostTemp = require("./exPostTemp") 


http.createServer(function(request,response){
    
    //1. 클라리이언트가 보낸 데이터를 꺼내오겠습니다!
    let bodyData = ''
    request.on('data',function(data){
        bodyData +=data
        console.log('test')
        console.log(data)
    })     //getElement.eventlistner처럼 해당 정보가 전송이 완료되었을 때와 같음
    //2.모든 요청이 끝났을 때(데이터를 전부 전송했을 떄)
    //-> 받아온 데이터를 (개발자가 사용할 수 있게끔)변환시켜서 사용하겠습니다.
   
    request.on('end', function(){
        let queryData = qs.parse(bodyData)
        console.log(queryData)
        response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
        response.write(exPostTemp.postTemp(queryData))
        // response.write("<html>")
        // response.write("<body>")
        // response.write(`<p>ID : ${queryData.inputId}</p>`)
        // response.write(`<p>pw : ${queryData.pw}</p>`)
        // response.write(`<p>GENDER : ${queryData.gender}</p>`)
        // response.write(`<p>BLOOD : ${queryData.blood}</p>`)
        // response.write(`<p>Birth : ${queryData.birth}</p>`)
        // response.write(`<p>HOBBY : ${queryData.hobby}</p>`)
        // response.write(`<p>COLOR : ${queryData.color}</p>`)
        // response.write(`<p>InputText : ${queryData.inputText}</p>`)
        // response.write("</body>")
        // response.write('</html>')
        response.end()
        })

}).listen(3002)

