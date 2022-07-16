//const loadDatabaseFrom = require('./loadDatabaseFrom')
const loadDatabaseFrom = require ('./loadDatabaseFrom');
const checkExpressionInDatabase = require('./checkExpressionInDatabase')

/* import { loadDatabase } from './loadDatabase.js';
import path from 'path'; */
/* async function loadDataTest(path){
    const databaseTest = await loadDatabaseFrom("./tests/unit-testing/database.test.json")
  return databaseTest
} */
//const databaseTest = [{"term":"car","expression":["car is object","car is system"]},{"term":"house","expression":["house is object"]},{"term":"motorbike","expression":["motorbike is object"]},{"term":"clock","expression":["clock is object"]},{"term":"bottle","expression":["bottle is object"]},{"term":"boat","expression":["boat is object"]},{"term":"bridge","expression":["bridge is object"]},{"term":"laptop","expression":["laptop is object"]},{"term":"key","expression":["key is object"]},{"term":"blue","expression":["blue is property","blue is property?"]},{"term":"red","expression":["red is property"]},{"term":"pen","expression":["pen is object"]}];
//const databaseTest =  loadDataTest("./tests/unit-testing/database.test.json")
//const databaseTest = loadDatabaseFrom("./tests/unit-testing/database.test.json")
let  databaseTest1 = loadDatabaseFrom("./tests/unit-testing/database.test.json");
//console.log(databaseTest)

const awaitObjectWithPromise = async(obj) => {
    for (let prop in obj) {
      // If the propriety has a 'then' function it's a Promise
      if (typeof obj[prop].then === 'function') {
        obj[prop] = await obj[prop];
      }
      if (typeof obj[prop] === 'object') {
        obj[prop] = await awaitObjectWithPromise(obj[prop]);
      }
    }
    return obj;
  }


  awaitObjectWithPromise(databaseTest1).then((databaseTest2) => {
    databaseTest1 = databaseTest2
  });

  test('T1) Module: loadDatabaseFrom-  When evaluating the expression, "car is object?" it returns "true" because that information is on the database', () =>{
 

    expect(checkExpressionInDatabase("car","car is object?",databaseTest1)).toBe(true)
       
    })  

/* setTimeout(()=>{
    databaseTest =  loadDatabaseFrom("./tests/unit-testing/database.test.json");

},100)  */


 

