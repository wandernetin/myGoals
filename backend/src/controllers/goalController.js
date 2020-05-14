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

    async saveMoney(req, res) {
        var {currentGoalId, amount} = req.body;
        const goal = await Goal.findById(currentGoalId);
        const value = +goal.raised + +amount;
        await Goal.updateOne({_id: goal._id}, {$set:{raised:value}});

        const newGoal = await Goal.findById(currentGoalId);

        return res.json(newGoal);

    },

    async store(req, res) {
        
        var {description, date, valueTotal, raised, priority, completed, image} = req.body;
        const goal = await Goal.create({ 
            description,
            date,
            valueTotal, 
            raised, 
            priority,
            completed, 
            image
        });
        return res.json(goal);
    },

    async delete(req, res) {
        const success = await Goal.findByIdAndDelete(req.body.goal._id);
        if (success) {
            res.status(204).end();
        } else { 
            res.status(404).end();
        }
    }
}