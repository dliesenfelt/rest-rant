const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Burgers & Beer',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Burgers, Beer',
        pic: '/images/burger.png'
    }, {
        name: 'Tacomania',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Mexican',
        pic: '/images/tacos.jpeg'
    }]
    res.render('places/index', { places })
})

module.exports = router