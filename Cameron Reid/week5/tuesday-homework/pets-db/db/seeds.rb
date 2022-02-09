
Pet.destroy_all

Pet.create!(
  name: 'Sir Ruffington',
  age: 6,
  image_url: "https://images.pexels.com/photos/3009441/pexels-photo-3009441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  vaccinated: 'yes',
  favourite_food: 'cheeseburger',
)

Pet.create!(
  name: 'Not Garfield',
  age: 8,
  image_url: "https://images.pexels.com/photos/6865166/pexels-photo-6865166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  vaccinated: 'yes',
  favourite_food: 'sashimi salmon',
)

Pet.create!(
  name: 'Princess woof woof',
  age: 3,
  image_url: "https://i.pinimg.com/originals/0b/a6/58/0ba6581d048fdccf94b90af14c81d884.jpg",
  vaccinated: 'no',
  favourite_food: 'vegan cheese',
)

Pet.create!(
  name: 'Dogamir Dun Dun',
  age: 87,
  image_url: "https://i.dailymail.co.uk/i/pix/2013/09/19/article-2425854-1BEAA550000005DC-828_306x423.jpg",
  vaccinated: 'no',
  favourite_food: 'Less fortunate uhhh "things"',
)

