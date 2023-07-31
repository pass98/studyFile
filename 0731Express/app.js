const express = require('express')
const app = express();
// const router = require("./router/router")
const page = require('./router/page')
const user = require('./router/user')


const nunjucks = require('nunjucks')

app.set('view engine','html')    
nunjucks.configure('views',{
    express: app,
    watch : true
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//app.use(router)

app.use('/page',page) // http://loacalhost:3000/page
app.use('/user',user) // http://localhost:3000/user



app.listen(3000)
