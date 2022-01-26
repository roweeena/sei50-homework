
DROP TABLE IF EXISTS manufacturers;

CREATE TABLE manufacturers (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    country TEXT,
    founded INTEGER,
    active BOOLEAN,
    logo_url TEXT
);

INSERT INTO manufacturers (name, country, founded, active, logo_url)
    VALUES (
        'Tesla',
        'USA',
        2003,
        1,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/372px-Tesla_Motors.svg.png'
    );
    
INSERT INTO manufacturers (name, country, founded, active, logo_url)
    VALUES (
        'Ford',
        'USA',
        1903,
        1,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/320px-Ford_logo_flat.svg.png'
    );

INSERT INTO manufacturers (name, country, founded, active, logo_url)
    VALUES (
        'Holden',
        'Australia',
        1856,
        0,
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Holden_%282019%29.svg/479px-Holden_%282019%29.svg.png'
    );

INSERT INTO manufacturers (name, country, founded, active, logo_url)
    VALUES (
        'Toyota',
        'Japan',
        1937,
        1,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/320px-Toyota_carlogo.svg.png'
    );


