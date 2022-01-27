# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Owner.destroy_all

owner1 = Owner.create!(
    name: 'Ash Ketchum',
    age: 14,
    hometown: 'Pallettown',
    pokemon_owned: 1,
    champion: false,
    image: 'https://fictionhorizon.com/wp-content/uploads/2021/10/das-digda-problem.jpg'
)

Owner.create!(
    name: 'Brock The Rock',
    age: 14,
    hometown: 'Rocktown',
    pokemon_owned: 1,
    champion: false,
    image: 'https://static.wikia.nocookie.net/sonicpokemon/images/8/8c/Ashanime.png/revision/latest?cb=20200811025240'
)

puts "Done! Created #{ Owner.count } pokemon trainers:"
puts Owner.pluck( :name ).join(", ")

Pokemon.destroy_all

Pokemon.create!(
    name: 'Pikachu',
    level: 12,
    special_move: 'Lightening',
    owner_id: owner1.id
)

puts "Done! Created #{ Pokemon.count } pokemons."
puts Pokemon.pluck( :name ).join(", ")