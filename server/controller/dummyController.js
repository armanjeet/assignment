const dummy = require('../model/dummyModel')

exports.dummyPlayer = async (req, res, next) => {
    try {
        const NewPlayer = await dummy.create(req.body)
        res.status(200).json(NewPlayer)
    } catch (err) {
        next(err)
    }
}


exports.getDummyPlayer = async (req, res, next) => {
    try {
        const getNewPlayer = await dummy.find()
        res.status(200).json(getNewPlayer)
    } catch (err) {
        next(err)
    }
}
