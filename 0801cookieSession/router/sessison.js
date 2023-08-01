const express = require('express')
const router = express.Router()
 
router.get('/setSession', function(request,response){
    //세션 생성하기!
    request.session.nickName = "apple"
    request.session.age = 20
    response.send("세션만들기")
})

router.get('/getSession',function(request,response){
    //세션에 있는 값 가져오기!
    let cookieData = response.cookie
    console.log(cookieData)

    let nick = request.session.nickName
    let age = request.session.age
    console.log(age)
})

router.get('/deleteSession',function(request,response){
    // 세션값 지우기 destroy:세션 전부 제거(매개변수는 안받음)
    delete request.session.nickName; // session의 값 하나를 지정해서 지울수 있는 함수
    // request.session.destroy(); 
    response.send("세션제거")
})

module.exports = router