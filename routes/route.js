const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', { title: "Hello World!", message: '' })
})

router.post('/', (req, res) => {
    console.log(req.body)
    const { message } = req.body
    res.render('index', { title: "Hello World!", message: message })
})

module.exports = router