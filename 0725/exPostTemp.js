// 화면에 대한 구조 정의! ---> 모듈화
exports.postTemp = function(queryData){
    let result_html = ""
        result_html = 
        "<html><body>" + 
        `<p>ID : ${queryData.inputId}</p>` +
        `<p>pw : ${queryData.pw}</p>`+
        `<p>GENDER : ${queryData.gender}</p>`+
        `<p>BLOOD : ${queryData.blood}</p>`+
        `<p>Birth : ${queryData.birth}</p>`+
        `<p>HOBBY : ${queryData.hobby}</p>`+
        `<p>COLOR : ${queryData.color}</p>`+
        `<p>InputText : ${queryData.inputText}</p>`+
        "</body></html>" 

    return result_html;
}


