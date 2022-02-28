# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create! name: 'Test user 1', email: 'one@one.com', password: 'chicken'
u2 = User.create! name: 'Test user 2', email: '2@2.com', password: 'chicken'
u3 = User.create! name: 'Test user 3', email: '3@3.com', password: 'chicken'

puts "created #{User.count} users."


Airplane.destroy_all
print "creating Airplanes"


a1 = Airplane.create! name: '747', rows: 40, cols: 6
a2 = Airplane.create! name: '737 max', rows: 40, cols: 6

puts "Crated airplanes #{Airplane.count} airplanes"


Flight.destroy_all

print "creating flights"

f1 = Flight.create! flight_number: "BA256", departure_date: '2022-03-01 04:20', origin: 'SYD', destination: 'MEL', airplane_id: a1.id
f2 = Flight.create! flight_number: "BADDD", departure_date: '2022-03-01 04:20', origin: 'SYD', destination: 'SIN', airplane_id: a1.id
f3 = Flight.create! flight_number: "LOLSITO", departure_date: '2022-03-01 04:20', origin: 'SYD', destination: 'LAX', airplane: a2

puts "created #{Flight.count} flights"

Reservation.destroy_all

print "Creating reservations..."
r1  = Reservation.create! flight_id: f1.id, user_id: u1.id, row: 10, col: 2
r2  = Reservation.create! flight_id: f1.id, user_id: u2.id, row: 10, col: 2
r3  = Reservation.create! flight_id: f3.id, user_id: u3.id, row: 10, col: 2
r4  = Reservation.create! flight_id: f2.id, user_id: u3.id, row: 10, col: 2


puts "Reservations created #{Reservation.count} reservations"
puts "Flight #1 has #{Flight.first.reservations.length} reservatios"
puts "User #3 has #{User.third.reservations.length} reservartions"
puts "Flight #1 has airplane name #{Flight.first.airplane.name}"
puts "Reservation #1 has user name #{Reservation.first.user.name}"