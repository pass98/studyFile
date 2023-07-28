const http = require('http') 
const qs = require('querystring')
const exPostTemp1 = require('./exPostTemp1')

http.createServer(function(request,response) {

    let bodyData = ''
    request.on('data',function(data){
        bodyData +=data
        console.log('test')
        console.log(data)
    })
    request.on('end',function(){
        let queryData = qs.parse(bodyData)
        response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
        response.write(exPostTemp1.gradeTemp(queryData))
        response.end()
    })
}).listen(3000)