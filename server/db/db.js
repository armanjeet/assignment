const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(console.log('Db connected'))
        mongoose.connection.on('diconnected', () => {
            console.log('db disconnected')
        })
    } catch (err) {
        throw (err)
    }
}

module.exports = connectDb

