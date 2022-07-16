'use strict'

import { main } from './MKengine-v1.js'

async function cli(){
recursiveTyped();
}

async function recursiveTyped(){
  console.log("Escribe una sentencia")
  process.stdin.once('data', async(data) => {
  //console.log(`You typed ${data.toString()}`);
  if(data.toString().trim()!=="exit"){
 await main(data.toString().trim())
 recursiveTyped();
  }else{
  process.exit();
  }
  })
 
}



//Main program
cli();