let expression = "car is system?";

let database = {};

let patternArray = ["[a-zA-Z]* is (object|property|sytem|)","[a-zA-Z]* is (object|property|sytem|)[?]"]

function MKparserv1(expression){

}

function MKvalidatorV1(expression){
let pattern = /[a-zA-Z]* is (object|property|sytem|)/;
return pattern.test(expression)

}

function MKvalidatorV2(expression,patternArray){
let flag = false;
patternArray.forEach(pattern => {
    if(new RegExp(pattern, "").test(expression)){
        flag = true
    }
})
return flag;
}
console.log(patternArray)
console.log(`expression: ${expression} is ${MKvalidatorV2(expression,patternArray)}`)