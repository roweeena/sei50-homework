# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.destroy_all

nabokov = Author.create!(
    name: "Vladimir Nabokov",
    dob: "1899/04/22",
    nationality: "Russian",
    movement: "Modernism",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Vladimir_Nabokov_1973.jpg"

)
kurt = Author.create!(
    name: "Kurt Vonnegut",
    dob: "1922/11/11",
    nationality: "American",
    movement: "Postmodernism",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Kurt_Vonnegut_1972.jpg"

)
murakami = Author.create!(
    name: "Haruki Murakami",
    dob: "1949/01/12",
    nationality: "Japanese",
    movement: "Magic Realism",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Murakami_Haruki_%282009%29.jpg"

)
puts "Done! Created #{ Author.count } authors:"
puts Author.pluck( :name ).join(', ')

Book.destroy_all

Book.create!(
    name: "Lolita",
    date: "1955/05/12",
    genre: "Tragicomedy",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG",
    author_id: nabokov.id
)

Book.create!(
    name: "Speak, Memory",
    date: "1951/12/03",
    genre: "Autobiography",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/SpeakMemory.jpg",
    author_id: nabokov.id
)

Book.create!(
    name: "Cat's Cradle",
    date: "1963/04/05",
    genre: "Science Fiction",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Cat%27s_Cradle_%281st_ed._cover%29_-_Vonnegut.jpg",
    author_id: kurt.id
)

Book.create!(
    name: "Timequake",
    date: "1997/09/22",
    genre: "Semi-autobiography",
    image: "",
    author_id: kurt.id
)

Book.create!(
    name: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
    date: "2013/04/12",
    genre: "Realist Bildungsroman",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Colorless_Tsukuru_Tazaki_and_His_Years_of_Pilgrimage.jpg",
    author_id: murakami.id
)

Book.create!(
    name: "Dance Dance Dance",
    date: "1994/01/15",
    genre: "Psychological Fiction",
    image: "https://upload.wikimedia.org/wikipedia/en/3/33/Dancedancedancecover.jpg",
    author_id: murakami.id
)

puts "Done! Created #{ Book.count } books:"
puts Book.pluck( :name ).join(', ')