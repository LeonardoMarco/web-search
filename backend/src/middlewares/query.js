var nlp = require('compromise');

module.exports = async (req, res, next) => {
    var text = nlp(req.body.text).nouns().slice(0, 50).out('frequency')
    var query = '';

    for(var i = 0; i < text.length; i++){
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