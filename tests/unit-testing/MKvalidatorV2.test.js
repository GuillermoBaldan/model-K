const MKvalidatorV2 = require('./MKvalidatorV2');
const extractTerm = require('./extractTerm')
const patternArray = require('./patternArray')


test('Al evaluar la expressión \"clock is object\" devuelve \"clock\" porque extrae el término', () =>{
    expect(extractTerm("clock is object",patternArray)).toBe("clock")
   });

test('Al evaluar la expressión \"car is object\" devuelve \"true\" porque está bien construida', () =>{
 expect(MKvalidatorV2("car is object",patternArray)).toBe(true)
});