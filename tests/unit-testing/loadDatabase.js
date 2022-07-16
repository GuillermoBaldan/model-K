import fs from 'fs'

async function loadDatabase(filename){
    let data;
    let database;
    let path = "./"+filename
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

    export { loadDatabase}