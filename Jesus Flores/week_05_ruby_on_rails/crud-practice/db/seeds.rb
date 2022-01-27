# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.destroy_all #Destroy All data from table - simila to drop table if exists without deleteing the table

Student.create!( #! IF THE CREATE DOESN'T HAPPENS, IT'LL FAIL LAUDLY(IE: RAISES AN ERROR)
    name: 'Jesus Flores',
    email: 'XDDDD@gmail.com',
    phone_number: "1223412321",
    address: "Sydney, nsw 2000",
    year: 1
)

Student.create!( #! IF THE CREATE DOESN'T HAPPENS, IT'LL FAIL LAUDLY(IE: RAISES AN ERROR)
    name: 'ddddd Flores',
    email: 'XDDDD@gmail.com',
    phone_number: "1223412321",
    address: "Sydney, nsw 2000",
    year: 1
)