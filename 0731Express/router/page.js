//views 안에 있는 html 파일끼리 페이지 이동이 되게끔 설정해주는 역할 --> 순수하게 시각적으로 표현만 하는 역할임!

const express = require('express')
const router = express.Router()

//http://localhost:3000/page
router.get('/',function(request,response){
    response.render('Main')
})
//http://localhost:3000/page/Login
router.get('/Login',function(request,response){
    console.log('로그인접속')
    response.render("Login")
})
//http://localhost:3000/page/Join
router.get('/Join',function(request,response){
    response.render('Join')
})
//http://localhost:3000/page/Delete
router.get('/Delete',function(request,response){
    response.render('Delete')
})
//http://localhost:3000/page/Update
router.get('/Update',function(request,response){
    response.render('Update')
})
//http://localhost:3000/page/SelectOne
router.get('/SelectOne',function(request,response){
    console.log('검색창 접속1')
    let info = request.cookies.info
    //let info = request.session.info
    console.log(info)
    response.render('SelectOne',{One:info}) //({userInfo :info})
})

module.exports = router ;