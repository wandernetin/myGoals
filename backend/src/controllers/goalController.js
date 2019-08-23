const Goal = require('../models/goal');

module.exports = {
    async index(req, res) {
        const goals = await Goal.find({});

        return res.json(goals);
    },

    async store(req, res) {
        const { description, total, priority, dueDate, completed } = req.body;
        const goal = await Goal.create({
            description,
            total,
            priority,
            dueDate,
            completed
        });
        return res.json(goal);
    }
}