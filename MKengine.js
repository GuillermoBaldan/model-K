let expression = "car is object";

let database = {};

function MKparserv1(expression){

}

function MKvalidatorV1(expression){
let patter = /[a-zA-Z]* is (object|property|sytem|)/;
return patter.test(expression)

}

console.log(MKvalidatorV1(expression));