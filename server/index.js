require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./db/db')
const authRoute = require('./routes/dummyRoute')
const cookieParser = require('cookie-parser')
const cors = require('cors')

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:3000" }))

//middleware
app.use('/api', authRoute)

app.listen(8000, () => {
    connectDb()
    console.log('server is running on port 8000')
})