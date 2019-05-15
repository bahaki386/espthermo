let express = require('express')
let router = express.Router()
let temp = 0
/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(temp)
  res.render('index', { title: '遠隔温度計', temp: temp })
})

router.post('/', (req, res, next) => {
  temp = req.body.temp
  console.log(req.body)
  console.log(req.body.temp)
  console.log(temp)
  res.end()
})

module.exports = router
