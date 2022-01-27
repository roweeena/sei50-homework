# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all

Snack.create!(
  name: 'Tortina',
  image_url: 'https://www.loacker.com/mediaObject/importedProducts/ProdWeb-1860098_ca-en_packaged/original/ProdWeb-1860098_ca-en_packaged.png',
  review: "Yum",
  rate: 4
)

Snack.create!(
  name: 'Hagendaz strawberry',
  image_url: 'https://navyaa.com/wp-content/uploads/2021/05/1-5.jpg',
  review: "Yum",
  rate: 5
)