const http = require('http')
const m_url = require('url')

//http://http://192.168.21.32:4000
http.createServer(function(request, response){
let data = m_url.parse(request.url, true).query
let count = parseInt(data.inputTd)

response.writeHead(200, {'Content-type':'text/html;charset=uef-8'})
response.write('<html>');
response.write('<body>');
response.write(`<table>`);
response.write(`<tr>`);
for(let i=1; i<count+1;i++){
    response.write(`<td>${i}</td>`)
}
response.write(`</tr>`);
response.write(`</table>`);
response.write('</body>');
response.write('</html>');
response.end()
}).listen(3002)