// views 안에 있는 html파일끼리 페이지 이동이 되게끔 설정해주는 역할

const express = require("express");
const router = express.Router();


// 기본 경로로 들어갔을 때 main페이지가 사용자에게 보여짐
router.get('/', function(req, res){
    res.render("main")
    //  이 기능을 서버 즉, app.js에 적용을 해줘야 함
})

// http://localhost:3000/login
router.get('/login', function(req, res){
    res.render('login')
})

// http://localhost:3000/join
router.get('/Join', function(req, res){
    res.render('join')
})

// http://localhost:3000/getAllUser
router.get('/getAllUser', function(req, res){
    res.render('getAllUser')
})

router.get('/Delete', function(req, res){
    res.render('Delete')
})

router.get('/Update', function(req, res){
    res.render('Update')
})

router.get('/SelectOne', function(req, res){
    res.render('SelectOne')
})

module.exports = router