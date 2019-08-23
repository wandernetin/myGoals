const restful = require('node-restful');
const {Schema} = require('mongoose');

const goalSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    current: {
        type: Number,
    },
    completed: {
        type: Boolean,
        required: true,
    }, 
}, {
    timestamps: true
})

module.exports = restful.model('Goal', goalSchema)