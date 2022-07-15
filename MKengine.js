'use strict';

let database = {};

let expression = "car is system?";

let filename ="database.json"

let patternArray = ["[a-zA-Z]* is (object|property|sytem|)","[a-zA-Z]* is (object|property|sytem|)[?]"]

const fs = require('fs');

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

function extractTerm(expression,patternArray){
    const term = expression.split(" ")[0];
    console.log(term)
   return term;
}

function checkTermInDatabase(database,term){
let flag = false //El término no se ha encontrado
database.forEach(item => {
    if (item.term === term){ //El término se ha encontrado
        flag = true;
    }
})
return term;
}

function checkExpressionInDatabase(term,expression,database){
    let flag = false //La expression no se encuentra en la base de datos.
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

function insertNewTermIntoDatabase(term,expression,database){
    let auxArray = [expression]
    database.push({term: term, expression: auxArray})
}

function insertNewExpressionIntoDatabase(term,expression,database){
    database.forEach(item => {
        if( item.term === term){
            item.expression.push(expression)
        }
    })
}




function databaseFeedV1(expression,patternArray,database){
    //Primero válidamos
    if ( MKvalidatorV2(expression,patternArray)){ //Si la expression es válida comprobamos que el término se encuentra en la base de datos
        const term = extractTerm(expression,patternArray)
       if (!checkTermInDatabase(term,database)){ //Si el término NO se encuentra en la base de datos la introducimos en la base de datos junto con su expression
          insertNewTermIntoDatabase(term,expression,database)
       }else if(checkInDatabase(term,database)){//Si el término SI se encuentra en la base de datos comprobamos si la expression se encuentra en la base de datos
        if(!checkExpressionInDatabase(term,expression,database)){//Si la expression NO se encuentra en la base de datos, la escribimos
            insertNewExpressionIntoDatabase(term,expression,database)
            console.log(`La expression ${expression} del término ${term} se añadió a la base de datos`)
        } else {
            console.log(`La información de la sentencia ${expression} ya se encuentra en la base de datos`)
        }
       }    

    }else{
      console.log(`La expression ${expression} no es válida`)
    }
}

async function loadDatabase(filename){
let data;
let database;
let path = "./database/"+filename
try {
/* data = await fs.readFileSync(path, 'utf-8')
const database = JSON.parse(data)

} */
let rawdata = fs.readFileSync(path);
database = JSON.parse(rawdata);
}
catch(err){
    console.log(err)
}
return database;
}

async function main(){
    database = await loadDatabase(filename);
    extractTerm(expression,patternArray)
    console.log(database)
    databaseFeedV1(expression,patternArray,database)
}


main();