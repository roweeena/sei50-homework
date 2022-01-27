Architect.destroy_all

antoni = Architect.create!(
    name: 'Antoni Gaudí',
    dob: '1852/06/25',
    nationality: 'Spainish',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Antoni_Gaudi_1878.jpg/800px-Antoni_Gaudi_1878.jpg',
)

jun = Architect.create!(
    name: 'Jun Itami',
    dob: '1937/06/25',
    nationality: 'Japanese',
    image: 'https://img.koreatimes.co.kr/upload/newsV2/images/201908/0a30e3db13434edf9a5c9a5ee0c5a704.jpg',
)

jurgen = Architect.create!(
    name: 'Jürgen Mayer',
    dob: '1965/10/30',
    nationality: 'German',
    image: 'https://archinect.imgix.net/uploads/2o/2oo85dappuf2aneo.jpg?fit=crop&auto=compress%2Cformat&w=1200',
)


############################


Architecture.destroy_all

Architecture.create!(
    title: "La Sagrada Familia",
    province: 'Barcelona',
    architect_id: antoni.id
)

Architecture.create!(
    title: "Park Guell",
    province: 'Barcelona',
    architect_id: antoni.id

)

Architecture.create!(
    title: "Church of Sky",
    province: 'Jeju',
    architect_id: jun.id

)

Architecture.create!(
    title: "Metropol Parasol",
    province: 'Seville',
    architect_id: jurgen.id

)