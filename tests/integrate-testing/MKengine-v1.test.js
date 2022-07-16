const patternOperatorArray = require('../unit-testing/patternOperatorArray')
const patternArray = require('../unit-testing/patternArray');
const { mainv1_2 } = require('../../MKengine-v1');
let databaseTest1 = loadDatabaseFrom("../unit-testing/database.test.json");

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

  describe('ITV1) Test for testing the version 1 level of the languaje ""model k"" in integrate testing ', () =>{
  
    test('ITV1_T1) Module: checkExpressionInDatabase-  When evaluating the expression, "car is object?" it returns "true" because because that information is on the database', () =>{
        console.log(patternOperatorArray[0])
        expect(mainv1_2("car is object?").toBe(true))
       })
    
    
    })