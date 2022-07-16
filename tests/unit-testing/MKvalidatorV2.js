function MKvalidatorV2(expression,patternArray){
    let flag = false; //La expression no se encuentra en la base de datos
    patternArray.forEach(pattern => {
        if(new RegExp(pattern, "").test(expression)){
            flag = true
          }
    })
    return flag;
    }

module.exports = MKvalidatorV2;