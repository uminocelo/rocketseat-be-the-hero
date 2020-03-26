const connection = require('../../database/connection');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const [count] = await connection('incidents').count();

        const incidents =  await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(
                'incidents.id', 
                'incidents.title', 
                'incidents.description', 
                'incidents.value', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf');

        res.header('x-total-count', count['count(*)']);
        return res.status(200).send(incidents);
    },
    
    async create(req, res){
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description, 
            value, 
            ong_id
        });
        
        return res.status(201).send({id});
    },

    async delete(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;
        //401
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        if(incident.ong_id !== ong_id){
            return res.status(401).send({error: "Not Authorized"});
        }
        
        await connection('incidents').where('id', id).delete();
        return res.status(204).send();
    }
}