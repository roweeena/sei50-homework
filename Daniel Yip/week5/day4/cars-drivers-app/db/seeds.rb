# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
Driver.destroy_all

bill = Driver.create!(
  name: 'Bill Murray',
  dob: '1950/09/21',
  licenced: true,
  image: 'https://www.fillmurray.com/400/400'
)

mike = Driver.create!(
  name: 'Michael Schumacher',
  dob: '1969/01/03',
  licenced: true,
  image: 'https://en.wikipedia.org/wiki/Michael_Schumacher#/media/File:Michael_Schumacher_-_Fernand_Bachmann_-_Cropped.jpg'
)


puts "Done! Created #{Driver.count} drivers: "
puts Driver.pluck(:name).join ', '





Car.destroy_all

Car.create!(
  make: 'Toyota',
  model: 'Camery',
  manufacture_date: '2001/20/1',
  registered: true,
  cool_factor: 1,
  image: 'https://carsales.pxcrush.net/carsales//cars/private/c5uu4wah8n5pd6upv3i5kslgw.jpg',
  driver_id: bill.id

)

Car.create!(
  make: 'Ferrai',
  model: 'F40',
  manufacture_date: '2001/20/1',
  registered: true,
  cool_factor: 1,
  image: 'https://en.wikipedia.org/wiki/Ferrari_F40#/media/File:F40_Ferrari_20090509.jpg',
  driver_id: mike.id
)

Car.create!(
  make: 'Mazda',
  model: 'RX7',
  manufacture_date: '2002/20/1',
  registered: true,
  cool_factor: 9,
  image: 'https://www.jdmbuysell.com/wp-content/uploads/2020/05/mazda-rx7-e1589725786517.jpg',
  driver_id: bill.id
)

puts "Done! Created #{Car.count} cars: "
puts Car.pluck(:model).join ', '