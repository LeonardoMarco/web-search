const nlp = require('compromise');

module.exports = async (req, res, next) => {
    const text = nlp(req.body.text).nouns().slice(0, 50).out('frequency');
    let query = '';

    for(let i = 0; i < text.length; i++){
        if(i == text.length-1){
            query += `Palavra LIKE '%${text[i].normal}%' `
        } 
        else {
            query += ` Palavra LIKE '%${text[i].normal}%' OR `
        }
    }

    req.query = query
    next();
};