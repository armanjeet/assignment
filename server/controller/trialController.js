const newPlayer = require('../model/newPlayersModel')
const trendingPlayer = require("../model/trendingPlayersModel")
const topMover = require("../model/topMoversModel")

exports.postNewPlayer = async (req, res, next) => {
    try {
        const NewPlayer = await newPlayer.create(req.body)
        res.status(200).json(NewPlayer)
    } catch (err) {
        next(err)
    }
}
exports.postTopMover = async (req, res, next) => {
    try {
        const TopMover = await topMover.create(req.body)
        res.status(200).json(TopMover)
    } catch (err) {
        next(err)
    }
}
exports.postTrending = async (req, res, next) => {
    try {
        const Trending = await trendingPlayer.create(req.body)
        res.status(200).json(Trending)
    } catch (err) {
        next(err)
    }
}


exports.getNewPlayer = async (req, res, next) => {
    try {
        const getNewPlayer = await newPlayer.find()
        res.status(200).json(getNewPlayer)
    } catch (err) {
        next(err)
    }
}
exports.getTopMover = async (req, res, next) => {
    try {
        const getTopMover = await topMover.find()
        res.status(200).json(getTopMover)
    } catch (err) {
        next(err)
    }
}
exports.getTrendingPlayer = async (req, res, next) => {
    try {
        const getTrendingPlayer = await trendingPlayer.find()
        res.status(200).json(getTrendingPlayer)
    } catch (err) {
        next(err)
    }
}
