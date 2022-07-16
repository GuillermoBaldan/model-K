const fs = require("fs")

async function loadDatabaseFrom(completepath){
    let database;
    let path = completepath
    try {
    /* data = await fs.readFileSync(path, 'utf-8')
    const database = JSON.parse(data)
    
    } */
    let rawdata = fs.readFileSync(path);
    database = JSON.parse(rawdata);
    }
    catch(err){
        console.log(err)
    }
    return database;
    }

    //module.exports = loadDatabaseFrom;
  module.exports = loadDatabaseFrom