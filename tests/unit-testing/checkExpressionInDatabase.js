function checkExpressionInDatabase(term,expression,database){
    let flag = false //La expression no se encuentra en la base de datos.
    expression = expression.replace("?","");
    database.forEach(item => {
        if (item.term === term){
            item.expression.forEach(itemExpression =>{
                if(itemExpression === expression){
                    flag = true;
                }
            })
        }
    })
    return flag;
}

module.exports = checkExpressionInDatabase;