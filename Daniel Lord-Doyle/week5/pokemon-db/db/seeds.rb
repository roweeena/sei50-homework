# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Owner.destroy_all

brock = Owner.create!(
    name: 'Brock',
    jap_name: 'Takeshi',
    age: 15,
    gender: 'Male',
    eye_colour: 'Black',
    hair_colour: 'Brown',
    hometown: 'Pewter City',
    region: 'Kanto',
    specializes_in: 'Rock type',
    anime_debut: 'Showndown in Pewter City',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/a/a6/Lets_Go_Pikachu_Eevee_Brock.png/243px-Lets_Go_Pikachu_Eevee_Brock.png'
)

puts "Done! Created #{ Owner.count } pokemon trainers:"
puts Owner.pluck( :name ).join(", ")

Pokemon.destroy_all

Pokemon.create!(
    name: 'Geodude',
    description: 'Rock Pokémon',
    image_one: 'https://archives.bulbagarden.net/media/upload/9/90/Spr_5b_074.png',
    image_two: 'https://archives.bulbagarden.net/media/upload/8/81/Spr_b_5b_074.png',
    pokedex_no: 74,
    pokemon_type: 'Rock / Ground',
    gender_ration: 50,
    catch_rate: 43,
    height: 0.4,
    weight: 20,
    ability_one: 'Sturdy',
    ability_two: 'Sand Veil',
    ability_three: 'Galvanize',
    ability_four: 'Magnet Pull',
    owner_id: brock.id
)

Pokemon.create!(
    name: 'Onix',
    description: 'Rock Snake Pokémon',
    image_one: 'https://archives.bulbagarden.net/media/upload/2/29/Spr_5b_095.png',
    image_two: 'https://archives.bulbagarden.net/media/upload/8/8f/Spr_b_5b_095.png',
    pokedex_no: 95,
    pokemon_type: 'Rock / Ground',
    gender_ration: 50,
    catch_rate: 45,
    height: 8.8,
    weight: 210,
    ability_one: 'Sturdy',
    ability_two: 'Rock Head',
    ability_three: 'Weak Armor',
    ability_four: 'Avalanche',
    owner_id: brock.id
)

puts "Done! Created #{ Pokemon.count } pokemons."
puts Pokemon.pluck( :name ).join(", ")