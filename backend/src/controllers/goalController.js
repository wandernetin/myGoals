const Goal = require('../models/goal');

module.exports = {
    async index(req, res) {
        const { descriptions } = req.headers;

        if(descriptions) {
            const goals = await Goal.find({
                "description": descriptions
            })
            return res.json(goals);
        } else {
            const goals = await Goal.find();
            return res.json(goals);
        }
    },

    async store(req, res) {
        const {description, date, valueTotal, raised, priority} = req.body;

        const goal = await Goal.create({ 
            description, 
            date,
            valueTotal, 
            raised, 
            priority
        });
        return res.json(goal);
    },

    async delete(req, res) {
        const id = req.query.id;
        console.log(req.query.id);
        const success = await Goal.findByIdAndDelete(id);
        if (success) {
            res.status(204).end();
        } else { 
            res.status(404).end();
        }
    }
}