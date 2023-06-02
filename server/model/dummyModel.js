const mongoose = require('mongoose')

const dummySchema = mongoose.Schema({
    topMovers: [{
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
    }],
    allList: [{
        trendingPlayers: {
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
        newPlayers: {
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
        }
    }]
},
    { timestamps: true }
)

module.exports = mongoose.model('dummy', dummySchema)