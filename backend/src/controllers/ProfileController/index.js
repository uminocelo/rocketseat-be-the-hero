const connection = require('../../database/connection');

module.exports = {
    async index(req, res){
        const ong_id = req.headers.authorization;
        console.log('profile/index', ong_id);
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        return res.status(200).send(incidents);
    }
}