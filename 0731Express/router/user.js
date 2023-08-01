// 로그인, 회원가입, 삭제등의 기능만을 사용하려고 만든 js

const express = require('express')
const router = express.Router();

const db = require('../config/datebase')
let conn = db.init()
// mysql 서버 연결하는 곳
const mysql = require("mysql2"); 
const { render } = require('nunjucks');
const session = require('express-session');


// let conn = mysql.createConnection({
//     host: "localhost",
//     user : "root",   
//     password : '12345', 
//     port : '3306', 
//     database : "nodejs_DB2" 
// })
// mysql 서버 연결 끝

// 회원 가입 폼 http://localhost:3000/user/join
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
            response.render('Main')
         }  
         else{
             console.log(err)
             console.log("db 명령이 제대로 실행되지 않았습니다!")
             alter("다시 시도해주세요!")
         } 

     })
 })

//  router.get('/SelectOne', function(request,response){
//     console.log('접속확인')

//     let nick = request.query.nick // get 방식에서 요청한(사이트)곳에서 보낸 데이터 
//     conn.connect();
//     let sql = 'select * from member where nick = ?'
//     conn.query(sql,[nick],function(err,rows){ 
//          if(!err){ 
//            console.log('쿼리문 정상 실행 완료!')
//            //  response.redirect("http://localhost:5501/0727Express/public/login.html")
//            console.log(rows)
        
//            response.render("SelectOne",{SelectOne:rows[0]})
//         }  
//         else{
//             console.log(err)
//             alter("다시 시도해주세요!")
//         } 


//     })
//  })

router.get('/selectOne',function(request,response){
    console.log('검색 사이트 접속')
    let Nick = request.query.nick
    console.log(Nick)

    conn.connect()
    let sql = 'select * from member where nick = ?'
    
    conn.query(sql,[Nick],function(err,rows){
        if(!err){ 
            console.log('쿼리문 실행완료 ')
            response.render('SelectOne',{One:rows[0]})
            console.log(rows[0].id)
            //[[1,2] [3,4]] 
            // [ { id: '1', pw: '1', nick: '1' }, { id: '1', pw: '1', nick: '1' } ]
        }else{
            console.log('접속이 안됨')
        }
    })
})

//http:localhost:3000/user/login
router.post('/Login',function(request,response){
    console.log('로그인 창 구입')
    
    let ID = request.body.ID
    let PW = request.body.PW
    console.log(request.body)
    
    conn.connect()

    let sql = "select * from member where id=? and pw=?"
    conn.query(sql,[ID,PW],function(err,rows){
        if(!err){
            console.log("야",rows)
            if(rows.length > 0){
                console.log("로그인 성공!")
                //로그인 성공했을 때 DB에서 가지고 온 정보를
                //Cookie나 session으로저장

                //쿠키 생성
                response.cookie("info",rows[0])
                //session 생성
                // request.session.info = rows[0]

                response.render('Main')
                // console.log(session)
            }
            else{console.log('로그인 실패')}
        }
        else{
            console.log('쿼리문 실행 실패!')
        }
    })
})


module.exports = router;