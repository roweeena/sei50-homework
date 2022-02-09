# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#


Artwork.destroy_all

Artwork.create!(
    name: 'Vanitas Still Life',
    year: 1625,
    artist: 'Peter Claez',
    image_url: 'https://lh3.googleusercontent.com/PRGh9uf9J2zW597TihrACK4rbpD0WreAnBRTdWecupQho8c1KykL49NKoc76ATptSQ=s1200',
    tags: 'protestant_reformation_art oil_painting skull flower candle still_life vanitas dark high_contrast panel black gold realistic'


)

Artwork.create!(
    name: 'Golden Summer, Eaglemonst',
    year: 1889,
    artist: 'Arthur Streeton',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Arthur_Streeton_-_Golden_summer%2C_Eaglemont_-_Google_Art_Project.jpg/1280px-Arthur_Streeton_-_Golden_summer%2C_Eaglemont_-_Google_Art_Project.jpg',
    tags: 'impressionism australian_impressionism oil canvas plein air blue gold landscape summer romanticist heidelburg_school australia'
)

Artwork.create!(
    name: 'In the Big Horn Mountains, Wyoming',
    year: 1899,
    artist: 'Thomas Moran',
    image_url: 'https://media.mutualart.com/Images/2014_04/29/14/143649623/ade448c6-546a-413c-96fd-19af8a79743d_570.Jpeg',
    tags: 'hudson_river_school romanticist watercolor pencil paper mountain landscape usa wyoming purple pink snow green'
)

Artwork.create!(
    name: 'Beach facing New Caledonia',
    year: 2019,
    artist: 'Ethan Zheng',
    image_url: 'https://i.imgur.com/QLygrTu.jpg',
    tags: 'blue yellow cartoon watercolor paper new_caledonia bird seagull rock ocean beach mountain landscape'
)

