

DROP TABLE IF EXISTS mangabooks;

CREATE TABLE mangabooks(
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- manage IDs for us; we wont have to initialise them
  name TEXT,
  author_id INTEGER,
  volumes INTEGER,
  end BOOLEAN,
  image_url TEXT
);

INSERT INTO mangabooks(name, author_id, volumes, end, image_url)
  VALUES (
    'Hunter X Hunter',
    1,
    36,
    0,
    'https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg'
  );

  INSERT INTO mangabooks(name, author_id, volumes, end, image_url)
  VALUES (
    'YuYu Hakusho',
    1,
    19,
    1,
    'https://upload.wikimedia.org/wikipedia/en/4/4d/YuYu_Hakusho_volume_1.jpg'
  );

  INSERT INTO mangabooks(name, author_id, volumes, end, image_url)
  VALUES (
    'Dragon Ball Z',
    2,
    42,
    0,
    'https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png'
  );

  INSERT INTO mangabooks(name, author_id, volumes, end, image_url)
  VALUES (
    'Dr.Slump',
    2,
    18,
    1,
    'https://upload.wikimedia.org/wikipedia/en/c/cd/DrSlump1.jpg'
  );