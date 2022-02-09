

DROP TABLE IF EXISTS authors;

CREATE TABLE authors(
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- manage IDs for us; we wont have to initialise them
  name TEXT,
  birthday TEXT,
  age INTEGER,
  nationality TEXT,
  image_url TEXT
);

INSERT INTO authors(name, birthday, age, nationality, image_url)
  VALUES (
    'Yoshihiro Togashi',
    '27/04/1966',
    55,
    'Japanese',
    'https://trend-vix.up.seesaa.net/image/images-742df-thumbnail2.jpg'
  );

  INSERT INTO authors(name, birthday, age, nationality, image_url)
  VALUES (
    'Akira Toriyama',
    '05/04/1955',
    66,
    'Japanese',
    'https://biographyhost.com/uploads/images/Akira-Toriyama-q.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-2'
  );

