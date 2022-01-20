DROP TABLE IF EXISTS balloons;

CREATE TABLE balloons(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  style TEXT,
  size TEXT,
  fun_factor INTEGER,
  exciting BOOLEAN,
  image_url TEXT
);

INSERT INTO balloons ( type, style, size, fun_factor, exciting, image_url)
VALUES (
  'Foil',
  'Animals',
  'Large',
  7,
  1,
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Balloonsanimals.jpg"
);

INSERT INTO balloons ( type, style, size, fun_factor, exciting, image_url)
VALUES (
  'Hot Air',
  'Transport',
  'Massive',
  8,
  1,
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Luftballong.jpg"
);
