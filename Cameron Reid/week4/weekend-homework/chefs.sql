DROP TABLE IF EXISTS chefs;

CREATE TABLE chefs (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT,
  name TEXT,
  years_cooking INTEGER,
  cuisine TEXT
);

INSERT INTO chefs ( image_url, name, years_cooking, cuisine)
  VALUES (
    'https://placebear.com/200/300',
    'Heston Blumenthal',
    '30',
    'British'
  );

  INSERT INTO chefs ( image_url, name, years_cooking, cuisine)
  VALUES (
    'https://placebear.com/200/300',
    'Thomas Keller',
    '42',
    'French'
  );

  INSERT INTO chefs ( image_url, name, years_cooking, cuisine)
  VALUES (
    'https://placebear.com/200/300',
    'Massimo Bottura',
    '32',
    'Italian'
  );