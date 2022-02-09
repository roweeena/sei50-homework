
Author.destroy_all

herbert = Author.create!(
    name: 'Frank Herbert',
    dob: "1920/10/8",
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRl14WI7PQdrph5uxk0F3TuQa4jqSgjw6txmMn_qS6LI1Wn1Y8ja9i5eBPJsc1R',
    bio:'Frank Herbert, in full Frank Patrick Herbert, (born October 8, 1920, Tacoma, Washington, U.S.—died February 11, 1986, Madison, Wisconsin), American science-fiction writer noted as the author of the best-selling Dune series of futuristic novels, a group of highly complex works that explore such themes as ecology, human evolution, the consequences of genetic manipulation, and mystical and psychic possibilities.',
)

dazai = Author.create!(
    name: 'Osamu Dazai',
    dob: "1909/6/19",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Osamu_Dazai.jpg',
    bio:'Osamu Dazai (太宰 治, Dazai Osamu, June 19, 1909 - June 13, 1948) was a Japanese author. A number of his most popular works, such as The Setting Sun (Shayō) and No Longer Human (Ningen Shikkaku), are considered modern-day classics With a semi-autobiographical style and transparency into his personal life, Dazais stories have intrigued the minds of many readers.',
)

puts "DONE! CREATED #{Author.count} AUTHORS:"
puts Author.pluck(:name).join(', ')


Book.destroy_all

Book.create!(
    title: "Dune",
    publish_date: 1965,
    genre: "sci-fi",
    image: "https://images-na.ssl-images-amazon.com/images/I/71MBvBhzu3L.jpg",
    bio: 'Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities.',
    pages:412,
    writer_id: herbert.id
)

Book.create!(
    title: "No Longer Human",
    publish_date: 1948,
    genre: "fiction",
    image: "https://images-fe.ssl-images-amazon.com/images/I/31H108p3WCL._SX342_SY445_QL70_ML2_.jpg",
    bio: 'No Longer Human is told in the form of notebooks left by one Ōba Yōzō (大庭葉蔵), a troubled man incapable of revealing his true self to others, and who, instead, maintains a facade of hollow jocularity. The work is made up of three chapters, or "memoranda", which chronicle the life of Ōba from his early childhood to his late twenties. ',
    pages:217,
    writer_id: dazai.id
)

puts "DONE! CREATED #{Book.count} BOOKS:"
puts Book.pluck(:title).join(', ')