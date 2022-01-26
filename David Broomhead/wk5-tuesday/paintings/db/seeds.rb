# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Painting.destroy_all

Painting.create!(
    name: 'Salvator Mundi',
    artist: 'Leonado da Vinci',
    price: 450,
    year: 1500,
    url: 'salvator.jpg'
)

Painting.create!(
name: 'Interchange',
artist: 'Willem de Kooning',
price: 300,
year: 1955,
url: 'interchange.jpg'
)

Painting.create!(
name: 'The Card Players',
artist: 'Paul Cezanne',
price: 250,
year: 1892,
url: 'card.jpg'
)

Painting.create!(
name: 'Nafea Faa Ipoipo When Will You Marry',
artist: 'Paul Gauguin',
price: 210,
year: 1892,
url: 'nafea.jpg'
)

puts "Done! Created #{Painting.count} paintings."
puts Painting.pluck(:name).join(', ')