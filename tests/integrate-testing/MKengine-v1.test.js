//Constants
const { patternOperatorArray } = require('../../MKengine-v1')
const { patternArray } = require('../../MKengine-v1')
const { patternQueryArray } = require('../../MKengine-v1')

//Functions
const EngineV1  = require('../../MKengine-v1');
const { loadDatabaseFrom } = require('../../MKengine-v1')
const myTools = require('../../my-libraries/my-tools')
let databaseTest = loadDatabaseFrom(process.cwd()+'/tests/unit-testing/database.test.json');
const databaseDefined = [{"term":"car","expression":["car is object","car is system"]},{"term":"house","expression":["house is object"]},{"term":"motorbike","expression":["motorbike is object"]},{"term":"clock","expression":["clock is object"]},{"term":"bottle","expression":["bottle is object"]},{"term":"boat","expression":["boat is object"]},{"term":"bridge","expression":["bridge is object"]},{"term":"laptop","expression":["laptop is object"]},{"term":"key","expression":["key is object"]},{"term":"blue","expression":["blue is property","blue is property?"]},{"term":"red","expression":["red is property"]},{"term":"pen","expression":["pen is object"]}]

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


  awaitObjectWithPromise(databaseTest).then((databaseTest2) => {
    databaseTest = databaseTest2
  });

  describe('ITV1) Test for testing the version 1 level of the languaje "model k" in integrate testing ', () =>{
  
    test('ITV1_T1) Module: MkengineV1 -  When evaluating the expression, "car is object?" it returns "true" because because that information is on the database', () =>{
        myTools.debugConsole("The databaseTest:")
        expect(EngineV1.MKengineV1("car is object?",patternArray,patternOperatorArray,patternQueryArray,databaseTest)).toBe(true)
       })
    
    
    })