# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

League.destroy_all

spain = League.create!(
    name:'La Liga',
    location: 'Spain',
    teams: '20',
    season: '2021/2022',
    date_start: '2021/08/21',
)

england = League.create!(
    name:'Premier League',
    location: 'England',
    teams: '20',
    season: '2021/2022',
    date_start: '2021/09/21',
)

Team.destroy_all

Team.create!(
    name:'Real Madrid',
    players: '22',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
    coach: 'Carlo Ancelloti',
    captain: 'Marcelo',
    sponsor: 'Adidads',
    league_id: spain.id

)

Team.create!(
    name:'Man United',
    players: '22',
    logo: 'https://lh3.googleusercontent.com/KNyKMfQqqVcLYAROYJ6KPW7nqmyMMcuc7npdzuzYI9KXhnZDJ3Wkfqy_apcQTDgq2QlNp9LzqQly06N5qsNxUOLT',
    coach: 'Ralf Rangnick',
    captain: 'Cristiano Ronaldo',
    sponsor: 'Adidads',
    league_id: england.id

)