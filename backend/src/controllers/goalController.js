const moment = require('moment');

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
        var {description, date, valueTotal, raised, priority, completed} = req.body;

        date = moment(date, "DD/MM/YYYY");
        const goal = await Goal.create({ 
            description,
            date,
            valueTotal, 
            raised, 
            priority,
            completed
        });
        return res.json(goal);
    },

    async delete(req, res) {
        const success = await Goal.findByIdAndDelete(req.query.id);
        if (success) {
            res.status(204).end();
        } else { 
            res.status(404).end();
        }
    }
}