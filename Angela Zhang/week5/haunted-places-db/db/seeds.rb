
Place.destroy_all

Place.create!(
    name: 'Chateau de Brissac',
    location: 'France',
    built: '11th Century',
    ghosts_num: 1,
    ghost_name: "The Green Lady",
    ghost_description: "Murdered by husband, after caught having an affair. Seen roaming around the castle.",
    image_url:'https://live.staticflickr.com/2574/3725853252_5561d4240d_b.jpg'
)
Place.create!(
    name: 'Myrtles Plantation',
    location: 'USA',
    built: '1796',
    ghosts_num: 12,
    ghost_name: "Chloe",
    ghost_description: "Ear cut off by her master for eavesdropping. Seen wearing a green turban. Peers at visitors while they're sleeping and have been caught in photographs.",
    image_url:'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/fl_no_overflow,g_south,l_text:style_gothic2:%C2%A9%20GeekHelpTX,o_20,y_10/fl_no_overflow,g_center,l_watermark4,o_25,y_50/v1604583216/bixkc21bpmkr5tpcit9e.jpg'
)
Place.create!(
    name: 'Banff Springs Hotel',
    location: 'Canada',
    built: '1888',
    ghosts_num: 2,
    ghost_name: "Ghost Bride",
    ghost_description: "Fell down the stairs when her wedding dress caught fire. Often seen dancing in the ballroom with flames coming from the back of her dress.",
    image_url:'https://www.banff-springs-hotel.com/wp-content/uploads/2020/11/fairmont-banff-springs-exterior-hotel-winter-festive_hero.jpg'
)
Place.create!(
    name: 'Xunantunich',
    location: 'Belize',
    built: '800 AD',
    ghosts_num: 1,
    ghost_name: "Stone Lady",
    ghost_description: 'Spotted on the tallest building "El Castillo", dressed in all white and has fire-red glowing eyes. Believed to be a human sacrifice.',
    image_url:'https://amyscrypt.com/wp-content/uploads/2018/05/Xunantunich_-2-1024x682.jpg'
)
Place.create!(
    name: 'Tower of London',
    location: 'England',
    built: '1078',
    ghosts_num: 13,
    ghost_name: "Anne Boleyn",
    ghost_description: 'Henry VI second wife. She is seen on the Tower Green where she was executed, in St. Peter ad Vincula where she was buried, and wandering corridors as a headless body .',
    image_url: 'https://amyscrypt.com/wp-content/uploads/2018/07/Tower-of-London-Haunted-Featured.jpg'
)
Place.create!(
    name: 'Raynham Hall',
    location: 'England',
    built: '1619',
    ghosts_num: 1,
    ghost_name: "Brown Lady",
    ghost_description: 'Assumed to be the ghost of Lady Dorothy Walpole. There is a famous photo of her walking down the stairs in her brown brocade dress.',
    image_url: 'https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/03/ghostly-castle-okamatsu-fujikawa.jpg'
)

puts "Done Created #{ Place.count } haunted places."
puts Place.pluck( :name ).join(', ')

