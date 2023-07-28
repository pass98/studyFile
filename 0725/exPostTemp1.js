
exports.gradeTemp = function(queryData){
    
    let avge = (parseInt(queryData.htmlnum) + parseInt(queryData.cssnum) + parseInt(queryData.nonum)+parseInt(queryData.andnum))/4
    let grade = 'F'
    if(avge>=95 && avge<=100){
        grade = "A+"
    }else if(avge>=90){
        grade = 'A'
    }else if(avge>=85){
        grade = 'B+'
    }else if(avge>=80){
        grade = 'B'
    }else if(avge>=75){
        grade = 'C+'
    }else if(avge>=70){
        grade = 'C'
    }
    let result_html =" "
        result_html =
        "<html><body>" + 
        `<p>name : ${queryData.name}</p>`+
        `<p>html : ${queryData.htmlnum}</p>`+
        `<p>css : ${queryData.cssnum}</p>`+
        `<p>nodeJS : ${queryData.nonum}</p>`+
        `<p>android : ${queryData.andnum}</p>`+
        `<p>avg : ${avge}</p>`+
        `<p>grade: ${grade}</p>`+
        "</html></body>"
    return result_html;
}