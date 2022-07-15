'use strict'

//import { main } from './MKengine.js'

/* let stdin;

async function readKeyboard(){
console.log("Escribe una sentencia");

stdin = process.openStdin();

stdin.addListener("data", function(d) {
     console.log(d)
  });
}

readKeyboard(); */
function cli(){
  let stdin
  console.log("Escribe una sentencia chulísima 3");

  stdin = process.openStdin();
  
  stdin.addListener("data", function(d) {
       console.log(d)
       if(d!="exit"){
       cli();
       }else{
        console.log("saliste del programa")
       }
    });
  }


cli();