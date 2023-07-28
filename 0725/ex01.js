console.log('실행확인0725')

const http = require('http')
const m_url = require('url')
//http://192.168.21.32:4000
http.createServer(function(request, response){
    let queryData = m_url.parse(request.url, true).query
   // {
    //    number1 : 12,
    //    number2 : 12
    //}
    response.writeHead(200, {'Content-Type':'text/html;charset="UTF-8"'})
    response.write("<html>");
    response.write("<body>");
    console.log(queryData)
    // 쿼리스트링으로 넘겨받은 값은 무조건 문자열타입
    let number1 = parseInt(queryData.number1)
    let number2 = parseInt(queryData.number2)
    let cul = queryData.cul
    let plus = number1 + number2
    let minus = number1 - number2
    let mul = number1 * number2
    let div = number1 / number2
    switch(cul){
        case '+' :
            response.write(`<h1> ${number1} + ${number2}= ${plus} </h1>`);
        case '-' :
            response.write(`<h1> ${number1} - ${number2}= ${minus} </h1>`);
        case '*' :
            response.write(`<h1> ${number1} * ${number2}= ${mul} </h1>`);
        case '/' :
            response.write(`<h1> ${number1} / ${number2}= ${div} </h1>`);
    }

    // if(cul == '+'){
    //     response.write(`<h1> ${number1} + ${number2}= ${plus} </h1>`)
    // }else if(cul == '-'){
    //     response.write(`<h1> ${number1} - ${number2}= ${minus} </h1>`)
    // }else if(cul == '*'){
    //     response.write(`<h1> ${number1} * ${number2}= ${mul} </h1>`)
    // }else{
    //     response.write(`<h1> ${number1} / ${number2}= ${div} </h1>`)
    // }
    response.write("</body>");
    response.write("</html>");

    response.end()
}).listen(3000)