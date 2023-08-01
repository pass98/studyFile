//config --> 개발에 관련된 환경설정에 대한 정보를 관리한다!
const mysql = require("mysql2"); 


let conn = {
    host: "localhost",
    user : "root",   
    password : '12345', 
    port : '3306', 
    database : "nodejs_DB2" 
}

module.exports = {
    init : function(){
        return mysql.createConnection(conn)
    }
}