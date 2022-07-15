let pattern = /[a-zA-Z]* is (object|property|system)?![?]/;
let expression = "blue is property?" 
console.log("Prueba de Test")
console.log(pattern.test(expression))
console.log("Prueba de match")
console.log(expression.match(pattern))
console.log("Prueba del exec")
console.log(pattern.exec(expression))