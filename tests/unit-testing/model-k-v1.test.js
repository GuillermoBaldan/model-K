
//Funciones
const MKvalidatorV2 = require('./MKvalidatorV2');
const extractTerm = require('./extractTerm')
const checkExpressionInDatabase = require('./checkExpressionInDatabase')
const loadDatabaseFrom = require('./loadDatabaseFrom')

//Constantes
const patternOperatorArray = require('./patternOperatorArray')
const patternArray = require('./patternArray')
let databaseTest1 = loadDatabaseFrom("./tests/unit-testing/database.test.json");

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



describe('V1) Test for testing the version 1 level of the languaje \"model k\" ', () =>{
test('V1T1)Module: extractTerm - Al evaluar la expressión \"clock is object\" devuelve \"clock\" porque extrae el término', () =>{
    expect(extractTerm("clock is object",patternArray)).toBe("clock")
   });

test('V1T2) Module: MKvalidatorV2 -  Al evaluar la expressión \"car is object\" devuelve \"true\" porque está bien construida', () =>{
 expect(MKvalidatorV2("car is object",patternArray)).toBe(true)
})

test('V1T3) Module: MKvalidatorV2 -  When evaluating the expression, \"car is object\" and using the \"patternOperatorArray\" it returns \"true\" because it is well constructed', () =>{
    console.log(patternOperatorArray[0])
    expect(MKvalidatorV2("car is object",patternOperatorArray)).toBe(true)
   })

test('V1T4) Module: MKvalidatorV2 -  When evaluating the expression, "car is object?" and using the "patternOperatorArray" it returns "false" because it is well constructed', () =>{
    console.log(patternOperatorArray[0])
    expect(MKvalidatorV2("car is object?",patternOperatorArray)).toBe(false)
   })

/* test('V1T5) Al evaluar la expression \"bottle is object\" devuelve \"', () =>{

}) */
test('V1T6) Module: checkExpressionInDatabase-  When evaluating the expression, "car is object?" it returns "true" because because that information is on the database', () =>{
    console.log(patternOperatorArray[0])
    expect(checkExpressionInDatabase("car","car is object?",databaseTest1)).toBe(true)
   })


})