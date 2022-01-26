Team.destroy_all

Team.create!(
    
    name: 'South Sydney Rabbitohs',
    founded: '1908',
    premierships: 21,
    still_active: true,
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/South-Sydney-Rabbitohs-logo2.png'
)

Team.create!(
    
    name: 'Sydney Roosters',
    founded: '1908',
    premierships: 15,
    still_active: true,
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Sydney_Roosters_logo.svg/2048px-Sydney_Roosters_logo.svg.png'
)

Team.create!(
    
    name: 'Parramatta Eeels',
    founded: '1946',
    premierships: 4,
    still_active: true,
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Parramatta_Eels_logo.svg/2048px-Parramatta_Eels_logo.svg.png'
)

puts "Done! Created #{Team.count} teams."
puts Team.pluck(:name).join(', ')
