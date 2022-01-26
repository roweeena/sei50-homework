# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all

Book.create!( # gives a more verbose error 
    title: 'Godel Escher Bach',
    author: 'Douglas Hofstadter',
    image_url: 'https://abbeys-product-images.s3.ap-southeast-2.amazonaws.com/original/978/046/502/9780465026562.jpg', 
    rating: 4.5
)

Book.create!( # gives a more verbose error 
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX318_.jpg', 
    rating: 4.0
)

puts "Your seeded Data base has the following Entries
#{Book.all}"