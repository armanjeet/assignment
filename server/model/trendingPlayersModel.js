const mongoose = require('mongoose')

const trendingPlayerSchema = mongoose.Schema({
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

module.exports = mongoose.model('trendingPlayer', trendingPlayerSchema)