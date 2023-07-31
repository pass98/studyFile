const express = require('express')
const router = express.Router()

//DB연결 하는 방법 ( 07.28 공부 중 가장 중요한 방법)
//1.mysql 연결할 수 있는 mysql이라는 모듈 가져오기
const mysql = require("mysql2") // 현재 쓰는 버전이 8이상이라 mysql2가 붙는듯
//만약 mysql이 실행되지 않는다면 프로젝트를 실행할 때마다 모듈을 다시 설치해주어야함
// npm install mysql2
    
//2. mysql DB에 접근할 수 있는 정보를 저장 
//DB에 접근할 수 있는 기능을 conn에 저장 
let conn = mysql.createConnection({
    //mysql 서버의 주소(ip)
    host: "localhost",
    //mysql에 접속할 id
    user : "root",   //유저의 키값
    password : '12345', //mysql 설치시 입력했던 비밀번호
    port : '3306', //mysql 설치시 입력했던 포트번호
    database : "nodejs_DB2" //mysql 설치 후 생성한 데이터베이스 테이블
})
//DB 연결 종료 

// 기본 사이트 접속확인 라우터 사용법 *get방식
//http://localhost:3000
router.get("/",function(request,response){
    console.log('접속확인')
    response.render("ExTemp",{day:'월요일'})
})

// 입력을 필요하는 페이지와 일치하는지 확인하는법 -쿼리데이터를 연결함
router.get("/response",function(request,response){
    console.log('서버접속완료')
    console.log(request.query.text)
    response.send('Hello, world!');
})

router.get("/nextPage",function(request,response){
   // request.query.next
   // 페이지 이동하는 방법! : response.redirect('연결하고자 하는주소')
   console.log(request.query.next)
   let page = request.query.next
   let result = ""
   if(page == 'Google'){
    result = "https://www.google.co.kr/?hl=ko"
   
}else if(page == 'Naver'){
    result = "https://www.naver.com/"
    

}else if(page == 'Daum'){
    result = "https://www.daum.net/"
    
}
response.redirect(result)
})
let ID_2 = ""
let PW_2 = ""


// 로그인 화면 서버 select 쿼리를 이용해서 입력값과 쿼리를 비교
router.post('/login',function(request,response){
    console.log('로그인 화면 접속완료')
    let id = request.body.ID
    let pw = request.body.PW
    

    conn.connect();
    
    let sql = 'select * from member where id = ? and pw= ?'
    conn.query(sql,[id,pw],function(err,rows){
        if(!err){
            console.log('로그인 실행 완료!')
            console.log(rows)
            if(rows.length == 0){
                console.log('아이디나 비밀번호가 다릅니다.')
            }
            else{
                console.log('로그인 성공!')
                response.render('LoginS',{nick:rows[0].nick})
                // response.redirect("http://localhost:5500/0727Express/public/Main.html")
            }
        }else{
            console.log('로그인 실행 실패')
            console.log(rows)
        }
    })
    // 로그인 화면 종료 
    
    // if(id == ID_2 && pw == PW_2){
    //     console.log(`id : ${ID_2}, Pw : ${PW_2}`)
    //     res = "http://localhost:5501/0727Express/public/S.html"
    // }else{
    //     console.log(`id : ${ID_2}, Pw : ${PW_2}`)
    //     res = "http://localhost:5501/0727Express/public/F.html"
    // }
    // response.redirect(res)
})

// router.post('/join',function(request,response){
//     console.log('회원가입 사이트 접속 완료')
//     ID_2 = request.body.ID
//     PW_2 = request.body.PW
//     let ID_Nick = request.body.NICK
//     console.log(ID_2)
//     console.log(PW_2)
//     response.redirect("http://localhost:5501/0727Express/public/Login.html")
   // })  --> router의 값을 전역변수로 설정하는 경우에 한한  정답


//join(id,pw,nick) 전역변수
router.post('/join',function(request,response){
   let id = request.body.ID
   let pw = request.body.PW
   let nick = request.body.NICK
   
    //DB 접속
    conn.connect();

    let sql = `insert into member values (?,?,?)`;  // 쿼리문에서 변수가 많아질 때 쉽게 사용할 수 있는방법 
    //value값에 (?)문 사용 ? -> 나중에 값을 담아주겠습니다! (단! 순서를 맞춰서)
    //conn.quert(sql, function) -> sql 쿼리문을 실행 시키겠습니다!
    // 쿼리문을 실행 후 작업을 진행하겠습니다.
    conn.query(sql,[id,pw,nick],function(err,rows){ 
        //query(사용언어,[변수 집합],function(err,rowes){})
        //err -> 쿼리문 오류 내용을 받아오겠습니다
        //rows -> 정상 실행된 결과를 받아오겠습니다.
        //err 또는 rows 둘 중 하나만 값이 들어간다!
        if(!err){ //err가 아니라면! -> 정상으로 쿼리문이 실행 되었다면
            console.log('쿼리문 정상 실행 완료!')
            response.redirect("http://localhost:5501/0727Express/public/login.html")
        }  
        else{
            console.log(err)
            console.log("db 명령이 제대로 실행되지 않았습니다!")
            alter("다시 시도해주세요!")
        } 


    })
})

router.get('/delete',function(request,response){
    let deleteUser = request.query.deleteUser

    //1. 서버와 DB의 통로
    conn.connect();
    //2. 실행시킬 쿼리문작성
    let sql = "delete from member where nick = ?"
    //3. 쿼리문을 DB로 넘겨서 실행시킴
    conn.query(sql,[deleteUser],function(err,rows){
        if(!err){
            console.log("회원삭제 성공")
            response.redirect("http:localhost:5500/0727Express/public/Main.html")
        }   
        else{
            console.log("회원삭제 실패!")
        }
    })

})

router.get('/update',function(request,response){

    let updateID = request.query.updateID
    let updatePW = request.query.updatePW
    let updateNICK = request.query.updateNICK
conn.connect();
let sql = `UPDATE member SET pw=?,nick=? where id = ?`

conn.query(sql,[updatePW,updateNICK,updateID],function(err,rows){
    if(!err){
        console.log('회원 수정완료!')
        response.redirect('http://localhost:5501/0727Express/public/Main.html')
    }else{
        console.log('수정 실패!')
    }
})

})

router.get('/UserList',function(request,response){
    console.log('접근 확인!')
    conn.connect();
    let sql = 'select * from member;'
    conn.query(sql,function(err,rows){
        if(!err){
            //err -> 쿼리문에 대한오류, DB오류에 대한 정보를 가지고 있다.!
            //rows -> 쿼리문 실행 데이터  (반드시 err와 rows 둘 중 하나만 값이 담긴다.)
            console.log('쿼리실행')
            console.log(rows)
            response.render("UserList",{UserList:rows})
        }else{
            console.log('쿼리실행X')
        }
        

    })

})

//위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
//--> 모듈화 (router)
module.exports = router

