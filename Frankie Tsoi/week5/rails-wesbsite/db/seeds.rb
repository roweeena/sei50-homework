# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# here is like the SQL bottom part from sinatra, inserts the vaules.

Shark.destroy_all

Shark.create!(
  name: 'Great White Shark',
  size: '6.4',
  color: 'Slate brown to black above, white below.',
  habitat: 'This is a coastal and offshore shark of continental and insular shelves. The shark has been found off oceanic islands, and it also occurs close inshore. It penetrates shallow bays in coastal waters and may even venture into the surf. The shark is frequently found in the vicinity of pinniped colonies and has been caught at a depth of 1280 m.',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg'
)

Shark.create!(
  name: 'Hammerhead Shark',
  size: '5.6',
  color: 'Dark olive green to brownish gray above, white below.',
  habitat: 'Coastal-pelagic and semi-oceanic shark occurring close inshore and well offshore. Found over the continental shelves, island terraces and in passes and lagoons of coral atolls, as well as over deep water near land. It is found near the surface and from depths of 3 ft to more than 262 ft [1 to 80 m]. It often favors continental and insular coral reefs.',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Scalloped_Hammerhead_Shark_Sphyrna_Lewini_%28226845659%29.jpeg'
)

Shark.create!(
  name: 'Basking Shark',
  size: '10',
  color: 'Darker above than below.',
  habitat: 'Coast to edge of the continental shelf.',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cetorhinus_maximus_by_greg_skomal.JPG'
)


puts "done! Create #{Shark.count} sharks"
puts Shark.pluck(:name).join(", ")