const mongoose = require('mongoose')

const newPlayerSchema = mongoose.Schema({
    name: {
        type: String
    },
    team: {
        type: String
    },
    avg: {
        type: Number
    },
    growth: {
        type: Number
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('newPlayer', newPlayerSchema)