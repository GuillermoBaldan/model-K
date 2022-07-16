'use strict';

let database = {};

let expression = "car is system";

let filename ="database.json"

const patternOperatorArray = ["[a-zA-Z]* is (object|property|system)(?![?])"];

const patternQueryArray = ["[a-zA-Z]* is (object|property|system)[?]"];

const patternArray = [...patternOperatorArray, ...patternQueryArray]//Contiene el formato de todas las posibles expresiones que admite el motor como sentencias de código.


const fs = require('fs')


function MKparserv1(expression){

}

function MKvalidatorV1(expression){
let pattern = /[a-zA-Z]* is (object|property|system)/;
return pattern.test(expression)

}

function MKvalidatorV2(expression,patternArray){
let flag = false; //La expression no se encuentra en la base de datos
patternArray.forEach(pattern => {
    if(new RegExp(pattern, "").test(expression)){
        flag = true
    }
})
return flag;
}

function testRegex(){
    let expression = "car is egg";
    let pattern = /[a-zA-Z]* is (object|property|sytem)/
    return pattern.test(expression)
}

function extractTerm(expression,patternArray){
    const term = expression.split(" ")[0];
   return term;
}

function checkTermInDatabase(term,database){
let flag = false //El término no se ha encontrado
database.forEach(item => {
    if (item.term === term){ //El término se ha encontrado
        flag = true;
    }
})
return flag;
}

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




function databaseFeedV1(expression,patternArray,patternOperatorArray,database){
    let term;
    //Primero válidamos
    if ( MKvalidatorV2(expression,patternOperatorArray)){ //Si la expression es válida comprobamos que el término se encuentra en la base de datos
        term = extractTerm(expression,patternOperatorArray)
        console.log(`the value of term is ${term}`)
       if (!checkTermInDatabase(term,database)){ //Si el término NO se encuentra en la base de datos la introducimos en la base de datos junto con su expression
         console.log(`The term ${term} is not in the database`) 
         insertNewTermIntoDatabase(term,expression,database)
         console.log(`The term ${term} was added to the database`) 

       }else if(checkTermInDatabase(term,database)){//Si el término SI se encuentra en la base de datos comprobamos si la expression se encuentra en la base de datos
        console.log(`The term \"${term}\" si se encuentra en la base de datos`)
        if(!checkExpressionInDatabase(term,expression,database)){//Si la expression NO se encuentra en la base de datos, la escribimos
            insertNewExpressionIntoDatabase(term,expression,database)
            console.log(`La expression \"${expression}\" del término ${term} se añadió a la base de datos`)
        } else {
            console.log(`La información de la sentencia ${expression} ya se encuentra en la base de datos`)
        }
       }    

    }else{
      console.log(`The expression ${expression} is not valid`)
    }
    return database;
}

function saveDatabase(filename,database){
    let data = JSON.stringify(database);
    fs.writeFileSync("./database/"+filename, data);
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

async function loadDatabaseFrom(completepath){
    let data;
    let database;
    let path = completepath
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

function MKengineV1(expression,patternArray,patternOperatorArray,patternQueryArray,database){
//1) Validar expresión
    if(MKvalidatorV2(expression,patternArray)){
        console.log("MKvalidatorV2 result:")
        console.log(MKvalidatorV2(expression,patternArray))
    //2) Diferenciar entre una expresión de input o question
    if(inputOrQuestion(expression,patternOperatorArray,patternQueryArray)){
        //3.A) Si es una expresión de input usar databaseFeedV1
        databaseFeedV1(expression,patternArray,patternOperatorArray,database)
    }else{
        //3.B) Si es una expresión de question usar Kbrain
       return Kbrain(expression,patternQueryArray,database)
        console.log("Kbrain result:")
        console.log(typeof(Kbrain(expression,patternQueryArray,database)))
    }
    
   
    }
}

function inputOrQuestion(expression,patternOperatorArray,patternQueryArray){
    let flag = false //Se asume que es una question
    if (MKvalidatorV2(expression,patternOperatorArray)){
        //Si se valida la expression respecto al patternOperatorArray se devuelve true
        flag = true;
    }

    return flag
}

function Kbrain(expression,patternQueryArray,database){
    const term = extractTerm(expression,patternArray)
   console.log(database)
    return checkExpressionInDatabase(term,expression,database)
}

async function mainv1_1(expression){
    database = await loadDatabase(filename);
    console.log(`La expresion es: ${expression}`)
   // console.log(MKvalidatorV2(expression,patternOperatorArray))
    database = await databaseFeedV1(expression,patternArray,patternOperatorArray,database)
    saveDatabase(filename,database) 
}

async function mainv1_2(expression){
    database = await loadDatabase(filename);
    await MKengineV1(expression,patternArray,patternOperatorArray,patternQueryArray,database)
    saveDatabase(filename,database) 
}





module.exports = {mainv1_1,mainv1_2,MKengineV1};