const MKvalidatorV2 = require('./MKvalidatorV2');
const extractTerm = require('./extractTerm')
const patternOperatorArray = require('./patternOperatorArray')
const patternArray = require('./patternArray')

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

test('V1T5) Al evaluar la expression \"bottle is object\" devuelve \"', () =>{

})


})