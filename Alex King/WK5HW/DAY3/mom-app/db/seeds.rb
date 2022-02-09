# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Artist.destroy_all

repin = Artist.create!(
    name: 'Ilya Repin',
    nationality: 'Russia',
    dob: '1844/8/5',
    period: '19th century',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/RepinSelfPortrait.jpg',
    roundness: 3,
    bio: 'Realist'
)

klint = Artist.create!(
    name: 'Hilma af Klint',
    nationality: 'Sweden',
    dob: '1862/10/26',
    period: '20th century',
    image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQVz4NWWz2-L4QKIRcWTzvVVvJM6yuWv1udEENehrTMN3idH2t-KZ55WWTSSzro',
    roundness: 3,
    bio: 'Early abstraction-ist'
)
takano = Artist.create!(
    name: 'Aya Takano',
    nationality: 'Japan',
    dob: '1976/12/22',
    period: '21st century',
    image: 'https://alchetron.com/cdn/aya-takano-1436d3e4-048d-4902-989c-8a667c0e6c5-resize-750.jpeg',
    roundness: 2,
    bio: 'Superflat-ist'
)
basquiat = Artist.create!(
    name: 'Jean-Michel Basquiat',
    nationality: 'USA',
    dob: '1960/12/22',
    period: '20th century',
    image: 'https://www.artimage.org.uk/imageGen.ashx?image=/media/507776/15721-3508.jpg',
    roundness: 4,
    bio: 'Neo-expressionist'
)

puts "DONE! CREATED #{Artist.count} ARTISTS:"
puts Artist.pluck(:name).join(', ')

Work.destroy_all

Work.create!(
    title:'Sadko',
    year:"1876",
    medium:"Oil on canvas",
    style:"Realism",
    image:"https://uploads5.wikiart.org/00340/images/ilya-repin/sadko.jpg!Large.jpg",
    artist_id: repin.id
)

Work.create!(
    title:'The Ten Largest, No. 7, Adulthood',
    year:"1907",
    medium:"Oil on canvas",
    style:"Abstractonism",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/62/Hilma_af_Klint_-_The_Ten_Largest_No._7_-_Adulthood_-_1907.jpg",
    artist_id: klint.id
)

Work.create!(
    title:'We, human race made this structure',
    year:"2021",
    medium:"Oil on canvas",
    style:"Superflat",
    image:"https://img2.storyblok.com/400x416/f/119968/1600x2130/6b2098a1da/wethehumanrace.jpg",
    artist_id: takano.id
)

Work.create!(
    title:'Shibuya Sprint',
    year:"2020",
    medium:"Pen on paper, watercolor",
    style:"Superflat",
    image:"http://www.dreamideamachine.com/en/wp-content/uploads/sites/3/2020/09/015.jpg",
    artist_id: takano.id
)

Work.create!(
    title:'Riding with death',
    year:"1988",
    medium:"Oil on canvas",
    style:"Neo-expressionism",
    image:"https://blog.singulart.com/wp-content/uploads/2020/02/riding-with-death.jpg",
    artist_id: basquiat.id
)



puts "DONE! CREATED #{Work.count} works:"
puts Work.pluck(:title).join(', ')