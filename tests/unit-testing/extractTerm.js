function extractTerm(expression,patternArray){
    const term = expression.split(" ")[0];
    console.log(term)
   return term;
}

module.exports = extractTerm;