const router = require('express').Router()

//GET places
router.get('/', (req, res) => {
    let places = [{
        name: 'Tajima',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Ramen, Japaneese',
        pic: 'https://i.ytimg.com/vi/VHkkKbedGsU/maxresdefault.jpg',
    }, 
    {
        name: 'La Granja',
        city: 'Margate',
        state: 'FL',
        cuisines: 'Peruvian',
        pic: 'https://www.lagranjarestaurants.com/media/uploads/ofertas/promo-2-home.png?a=1',
    },
]
    res.render('places/index', {places})
})

module.exports = router