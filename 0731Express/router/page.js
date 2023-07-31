//views 안에 있는 html 파일끼리 페이지 이동이 되게끔 설정해주는 역할 --> 순수하게 시각적으로 표현만 하는 역할임!

const express = require('express')
const router = express.Router()

//http://localhost:3000/page
router.get('/',function(request,response){
    response.render('Main')
})
//http://localhost:3000/page/Login
router.get('/Login',function(request,response){
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


module.exports = router ;