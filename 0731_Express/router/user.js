const express = require("express");
const router = express.Router();

const mysql = require("mysql2") // express 와 mysql은 서로 관련없기 땜에 설치 해야함

let conn = mysql.createConnection({
    // mySql 서버의 주소(ip)
    host: "localhost",
    // mysql 접속할 id, pw
    user: "root",
    password: "123456",
    port: 3306,
    // sql에서 사용할 DB 이름
    database: "nodejs_DB"
})


router.post("/join", function (request, response) {
    console.log(request.body)
    let id = request.body.id
    let pw = request.body.pw
    let nick = request.body.nick

    // DB접속
    conn.connect();
    let sql = `insert into member values (?,?,?)`;

    conn.query(sql, [id, pw, nick], function (err, rows) {
        if (!err) {
            console.log("쿼리문 실행완료!")
            // response.redirect("http://localhost:5500/0727_Express/public/login.html")
        } else {
            console.log("db 명령이 제대로 실행되지 않았습니다.")
        }
    })
    let result = ""
})

router.post("/selectOne", function(req, res){
    console.log('접속확인')
    console.log(req.body)
    let id= req.body.id

    console.log(id)
    conn.connect();
    let sql="select * from member where id = ?"
    
    conn.query(sql,[id], function(err, rows){
        console.log(rows)
        if(!err){
            res.render("selectOne",{user:rows[0]})
        }else{
            console.log('오류')
        }
    })
})

module.exports = router;