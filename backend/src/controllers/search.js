const Database = require('../models/dataBase');

module.exports = {
    async results(req, res) {
        Database.query(`SELECT titulo, link, COUNT(titulo) AS Qtd FROM pesquisa WHERE ${req.query} GROUP BY titulo ORDER BY COUNT(titulo) DESC`, function (error, results, fields) {
            if (error) {
                //throw error;
                return res.status(400)
            }
            return res.status(200).json( results )
        });
    },
}