'use strict'

//import { mainv1_1,mainv1_2 } from './MKengine-v1.js' 
const MKengineV1 = require('./MKengine-v1')

async function cli(){
recursiveTyped();
}

async function recursiveTyped(){
  console.log("Escribe una sentencia")
  process.stdin.once('data', async(data) => {
  //console.log(`You typed ${data.toString()}`);
  if(data.toString().trim()!=="exit"){
 await MKengineV1.mainv1_2(data.toString().trim())
 recursiveTyped();
  }else{
  process.exit();
  }
  })
 
}



//Main program
cli();