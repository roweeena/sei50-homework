DROP TABLE IF EXISTS watches;

CREATE TABLE watches (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    production BOOLEAN,
    diameter INTEGER,
    movement TEXT,
    year_made INTEGER,
    current_price INTEGER,
    image_url TEXT,
    manufacturer_id INTEGER 
);

INSERT INTO watches ( name, production, diameter, movement, year_made, current_price, image_url, manufacturer_id)
    VALUES (
        'SBGJ241',
        0,
        40,
        '9S96', 
        2019, 
        12000,
        'https://timeandtidewatches.com/wp-content/uploads/2020/11/SBGJ241G.png',
        1
    );

INSERT INTO watches ( name, production, diameter, movement, year_made, current_price, image_url, manufacturer_id)
    VALUES (
        'Seagull 1963',
        0,
        38,
        'Seagull ST19',
        1963,
        389,
        'https://m.media-amazon.com/images/I/51+K+vb73nL._AC_SY580_.jpg',
        2
    );

INSERT INTO watches ( name, production, diameter, movement, year_made, current_price, image_url, manufacturer_id)
    VALUES (
        'Sinn 104',
        1,
        41,
        'Sellita SW-220-1', -- very round
        0, 
        2019,
        'https://www.sinn.de/bilder/uhr-titel/900/104_St_Sa_I.jpg',
        3
    );