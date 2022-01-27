# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Employee.destroy_all

laurence = Employee.create(
    name: 'Laurence Qi', 
    role: 'junior developer',
    salary: 80_000
)

daniel = Employee.create(
    name: 'Daniel Lord-Doyle',
    role: 'senior developer',
    salary: 100_000
)

jesus = Employee.create(
    name: 'Jesus Flores',
    role: 'CTO',
    salary: 500_000
)

cameron = Employee.create(
    name: 'Cameron Reid',
    role: 'junior developer',
    salary: 75_000
)

ethan= Employee.create(
    name: 'ethan zheng',
    role: 'devops engineer',
    salary: 80_000
)

apple = Company.create(
    name: 'Apple',
    industry: 'tech',
    revenue: 365_817
)

amazon = Company.create(
    name: 'Amazon',
    industry: 'e-commerce',
    revenue: 2_054_403
)

tesla = Company.create(
    name: 'Tesla',
    industry: 'car manufacturer',
    revenue: 53_800
)
