# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
Pet.destroy_all

Pet.create!(
  name: 'Lexi',
  species: 'Samoyed',
  fun: true,
  image_url: 'http://www.placekitten.com/400/400'
)

Pet.create!(
  name: 'Sprite',
  species: 'Small Samoyed',
  fun: true,
  image_url: 'http://www.placekitten.com/300/500'
)

Pet.create!(
  name: 'Garfield',
  species: 'Cat',
  fun: true,
  image_url: 'http://www.placekitten.com/200/200'
)

Pet.create!(
  name: 'Angry Bear',
  species: 'Bear',
  fun: false,
  image_url: 'http://www.placekitten.com/450/450'
)