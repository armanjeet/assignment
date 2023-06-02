const router = require('express').Router()
// const { dummyPlayer, getDummyPlayer } = require('../controller/dummyController')
const { postNewPlayer, getNewPlayer, getTopMover, getTrendingPlayer, postTopMover, postTrending } = require('../controller/trialController')

// router.post('/post', dummyPlayer)
// router.get('/', getDummyPlayer)
router.post('/post/newplayer', postNewPlayer)
router.post('/post/topmover', postTopMover)
router.post('/post/trending', postTrending)
router.get('/getnewplayer', getNewPlayer)
router.get('/gettopmover', getTopMover)
router.get('/gettrendingplayer', getTrendingPlayer)
module.exports = router