const MKvalidatorV2 = require('./MKvalidatorV2');
const patternArray = require('./patternArray')

test('Al evaluar la expressión \"car is object\" devuelve \"true\" porque está bien construida', () =>{
 expect(MKvalidatorV2("car is object",patternArray)).toBe(true)
});