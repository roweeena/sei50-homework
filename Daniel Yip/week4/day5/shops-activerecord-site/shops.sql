
DROP TABLE IF EXISTS shops;

CREATE TABLE shops(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  address TEXT,
  description TEXT,
  opening_time TIME,
  closing_time TIME,
  open_weekdays BOOLEAN,
  open_weekends BOOLEAN,
  rating INTEGER,
  image_url TEXT
);

INSERT INTO shops(name, address, description, opening_time, closing_time, open_weekdays, open_weekends, rating, image_url)
VALUES (
  'Groceries',
  '123 Shopping Street',
  'Supermarket for all your daily needs.',
  '07:00',
  '19:00',
  1,
  1,
  5,
  '/images/groceries.svg'
);

INSERT INTO shops(name, address, description, opening_time, closing_time, open_weekdays, open_weekends, rating, image_url)
VALUES (
  'Bakeries',
  '888 Cookie Lane',
  'Baked goods for everyone.',
  '06:00',
  '15:00',
  1,
  0,
  9,
  '/images/bakeries.svg'
);

INSERT INTO shops(name, address, description, opening_time, closing_time, open_weekdays, open_weekends, rating, image_url)
VALUES (
  'Fishies',
  'Under the sea',
  'Fish is the chicken of the sea!',
  '06:00',
  '18:30',
  1,
  1,
  8,
  '/images/fishies.svg'
);
