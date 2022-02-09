DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image_url TEXT,
  location TEXT,
  style TEXT,
  stars INTEGER,
  chef_id INTEGER

);

INSERT INTO restaurants (name, image_url, location, style, stars, chef_id)
  VALUES (
    'The Fat Duck',
    'http://placekitten/200/300',
    'Bray, England',
    'Molecular Gastronomy',
    3,
    1
  );

  INSERT INTO restaurants (name, image_url, location, style, stars, chef_id)
  VALUES (
    'The Hinds Head',
    'http://placekitten/200/300',
    'Bray, England',
    'Historic British',
    1,
    1
  );

  INSERT INTO restaurants (name, image_url, location, style, stars, chef_id)
  VALUES (
    'The French Laundry',
    'http://placekitten/200/300',
    'Nappa Valley, America',
    'Modern French',
    3,
    2
  );

  INSERT INTO restaurants (name, image_url, location, style, stars, chef_id)
  VALUES (
    'Perse',
    'http://placekitten/200/300',
    'New York, America',
    'Modern American',
    3,
    2
  );

  INSERT INTO restaurants (name, image_url, location, style, stars, chef_id)
  VALUES (
    'Osteria Francescana',
    'http://placekitten/200/300',
    'Moderna, Italy',
    'Modern Italian',
    3,
    3
  );