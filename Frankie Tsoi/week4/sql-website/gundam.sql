

DROP TABLE IF EXISTS gundams;

CREATE TABLE gundams (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- manage IDs for us; we wont have to initialise them
  name TEXT,
  model_number TEXT,
  pilot TEXT,
  designer TEXT,
  power_sources TEXT,
  height INTEGER,
  image_url TEXT
);

INSERT INTO gundams (name, model_number, pilot, designer, power_sources, height, image_url)
  VALUES (
    'Gundam',
    'RX-78-02',
    'Amuro Ray',
    'Kunio Okawara',
    'Minovsky Ultracompact Fusion Reactor',
    18,
    'https://www.hobbyco.com.au/assets/full/G0163280.jpg?20210816175559'
  );

  INSERT INTO gundams (name, model_number, pilot, designer, power_sources, height, image_url)
  VALUES (
    'Wing Gundam Zero',
    'XXXG-00W0',
    'Heero Yuy',
    'Hajime Katoki',
    'Nuclear-based',
    16.7,
    'https://www.gunjap.net/site/wp-content/uploads/2014/12/1.jpg'
  );

  INSERT INTO gundams (name, model_number, pilot, designer, power_sources, height, image_url)
  VALUES (
    'Strike Freedom Gundam',
    'ZGMF-X20A',
    'Kira Yamato',
    'Kunio Okawara',
    'Hyper-Deuterion Engine',
    18.88,
    'https://www.frontlinehobbies.com.au/assets/full/G5061617.png?20210617130405'
  );
