# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Soundtrack.destroy_all

Soundtrack.create!(
    title: 'Call me by your name',
    artists: 'Sufjan Stevens and 12 more',
    nomination: 'Grammy Award for Best Compilation Soundtrack for Visual Media',
    release: '3 November 2017',
    songs: 'Hallelujah Junction - 1st Movement and 16 more',
    link_url: 'https://youtu.be/4WTt69YO2VI',
    image_url: 'https://light-in-the-attic.s3.amazonaws.com/uploads/release_image/28062/image/tmp_2F1622824401349-y2aiwt7pnrh-9a0051acc69972677d4f379c407bd249_2Fcallme.jpg'

)

Soundtrack.create!(
    title: 'Drive',
    artists: 'Cliff Martinez and 9 more',
    nomination: 'n/a',
    release: '6 September 2011',
    songs: 'Nightcall and 14 more',
    link_url: 'https://youtu.be/ai1g9qWSW5I',
    image_url: 'https://i.scdn.co/image/ab67616d0000b2732d5afc57b8290f7d62915e71'

)

Soundtrack.create!(
    title: 'Spider-Man: Into the Spider-Verse',
    artists: 'Daniel Pemberton',
    nomination: 'Grammy Award for Best Compilation Soundtract for Visual Media',
    release: '14 December 2018',
    songs: 'Sunflower and 10 more',
    link_url: 'https://youtu.be/ApXoWvfEYVU',
    image_url: 'https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f'

)

Soundtrack.create!(
    title: 'Inside Llewyn Davis',
    artists: 'Oscar Isaac',
    nomination: 'n/a',
    release: '16 January 2014',
    songs: 'Hang me, Oh Hand Me and 5 more',
    link_url: 'https://youtu.be/ApXoWvfEYVU',
    image_url: 'https://i.scdn.co/image/ab67616d0000b273f8d5789d074561f5169a2130'

)

puts "Done! Create #{Soundtrack.count} soundtracts."
puts Soundtrack.pluck(:title).join(', ')

