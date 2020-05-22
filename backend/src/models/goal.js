const { Schema, model} = require('mongoose');

const goalSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    valueTotal: {
        type: Number,
        required: true,
    },
    raised: {
        type: Number,
        required: true,
    },
    priority: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
}, { 
    timestamps: true, //createdAt, updatedAt
});

module.exports = model('Goal', goalSchema);