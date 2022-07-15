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
recursiveTyped();
}

async function recursiveTyped(){
  console.log("Escribe una sentencia")
  process.stdin.once('data', async(data) => {
  console.log(`You typed ${data.toString()}`);

  recursiveTyped();
  })
 //process.stdin.on('end', () => console.log('Stdin has no more data'));
}

function closeProcess(){
  process.exit();
}


cli();