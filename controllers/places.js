const router = require('express').Router()

//GET places
router.get('/', (req, res) => {
    let places = [{
        name: 'Tajima',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Ramen, Japaneese',
        pic: '/images/tajima.jpg',
    }, 
    {
        name: 'La Granja',
        city: 'Margate',
        state: 'FL',
        cuisines: 'Peruvian',
        pic: '/images/laGranja.png',
    },
]
    res.render('places/index', {places})
})

module.exports = router