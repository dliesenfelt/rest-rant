const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'La Granja',
        city: 'Margate',
        state: 'FL',
        cuisines: 'Peruvian',
        pic: 'https://www.lagranjarestaurants.com/media/uploads/ofertas/promo-1-home.png?a=1'
    }, {
        name: 'Mike Hess Brewing',
        city: 'Imperial Beach',
        state: 'CA',
        cuisines: 'Tacos, Beer',
        pic: 'https://www.mikehessbrewing.com/wp-content/uploads/2021/06/SteelBeach_IPA_MikeHess_2021_BeerCan.png'
    }, {
        name: 'Tajima',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Japanese, Ramen',
        pic: 'https://tajimasandiego.com/wp-content/uploads/layerslider/Slider-1/Vegan-Tajima-Ramen-1-1024x684.jpg'
    }]
    res.render('places/index', { places })
})

module.exports = router