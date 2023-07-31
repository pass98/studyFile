// 로그인, 회원가입, 삭제등의 기능만을 사용하려고 만든 js
const express = require('express')
const router = express.Router();

// mysql 서버 연결하는 곳
const mysql = require("mysql2") 

let conn = mysql.createConnection({
    host: "localhost",
    user : "root",   
    password : '12345', 
    port : '3306', 
    database : "nodejs_DB2" 
})
// mysql 서버 연결 끝


router.post('/join',function(request,response){

    let id = request.body.ID
    let pw = request.body.PW
    let nick = request.body.NICK
    
     conn.connect();
 
     let sql = `insert into member values (?,?,?)`;  
     conn.query(sql,[id,pw,nick],function(err,rows){ 
         
         if(!err){ 
             console.log('쿼리문 정상 실행 완료!')
            //  response.redirect("http://localhost:5501/0727Express/public/login.html")
         }  
         else{
             console.log(err)
             console.log("db 명령이 제대로 실행되지 않았습니다!")
             alter("다시 시도해주세요!")
         } 
 
 
     })
 })


module.exports = router;