# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path                     | Purpose                                          |
|--------|:------------------------:|-------------------------------------------------:|
| GET    | /                        | Home Page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantid | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 Page                                         |

Places:
| Name | City | State | Food | Picture |
---|---|---|---|---
La Granja| Margate | FL | Peruvian | https://www.lagranjarestaurants.com/media/uploads/ofertas/promo-1-home.png?a=1 
Tajima | San Diego | CA | Ramen | https://tajimasandiego.com/wp-content/uploads/layerslider/Slider-1/Vegan-Tajima-Ramen-1-1024x684.jpg 
Mike Hess Brewing | Imperial Beach | CA | Tacos/Beer | https://www.mikehessbrewing.com/wp-content/uploads/2021/06/SteelBeach_IPA_MikeHess_2021_BeerCan.png
