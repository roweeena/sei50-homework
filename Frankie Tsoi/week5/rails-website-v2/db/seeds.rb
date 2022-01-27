# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
Brand.destroy_all

  suba = Brand.create!(
    name: 'Subaru',
    year: '1915',
    location: 'Japan',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Subaru_Corporation_logo.png/220px-Subaru_Corporation_logo.png',
  )

  toyo = Brand.create!(
    name: 'Toyota',
    year: '1937',
    location: 'Japan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg'
  )

  puts "Done created: #{Brand.count} brand:"
  puts Brand.pluck(:name).join(', ')

  Car.destroy_all

  Car.create!(
    name: 'Impreza',
    body_type: 'sedan',
    model: 'WRX STI',
    price: 60_000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Subaru_Impreza_WRX_STI_-_Blue_%28cropped%29.jpg',
    brand_id: suba.id
  )       

  Car.create!(
    name: 'BRZ',
    body_type: 'sport',
    model: 'Coupe S',
    price: 43_399,
    image: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/02/2022_Subaru_BRZ_056-1.jpg',
    brand_id: suba.id
  )

  Car.create!(
    name: 'Corolla',
    body_type: 'hatch',
    model: 'ZR',
    price: 36_498,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg',
    brand_id: toyo.id
  )

  Car.create!(
    name: 'Rav4',
    body_type: 'SUV',
    model: 'Cruiser',
    price: 50_420,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/2019_Toyota_RAV4_Excel_HEV_CVT_2.5_Front.jpg',
    brand_id: toyo.id
  )

  puts "Done created: #{Car.count} brand:"
  puts Car.pluck(:name).join(', ')