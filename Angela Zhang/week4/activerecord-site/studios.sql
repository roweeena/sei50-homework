
DROP TABLE IF EXISTS studios;



CREATE TABLE studios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    foundation_year INTEGER,
    founders TEXT,
    headquarters TEXT,
    website TEXT,
    studio_logo TEXT

);

INSERT INTO studios( name, foundation_year, founders, headquarters, website, studio_logo )
    VALUES(
        'Walt Disney Animation Studio',
        1923,
        'Walt Disney, Roy O. Disney',
        '2100 West Riverside Drive, Burbank, California, U.S.',
        'https://disneyanimation.com/',
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Walt_Disney_Animation_Studios_logo.svg/1024px-Walt_Disney_Animation_Studios_logo.svg.png'

    );

INSERT INTO studios( name, foundation_year, founders, headquarters, website, studio_logo )
    VALUES(
        'Pixar',
        1979,
        '	Edwin Catmull, Alvy Ray Smith, Steve Jobs',
        '1200 Park Avenue, Emeryville, California, U.S.',
        'https://www.pixar.com/',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pixar_logo.svg/1024px-Pixar_logo.svg.png'

    );

INSERT INTO studios( name, foundation_year, founders, headquarters, website, studio_logo )
    VALUES(
        'DreamWorks',
        1994,
        'Steven Spielberg, Jeffrey Katzenberg, David Geffen',
        '1000 Flower Street, Glendale, California 91201, U.S',
        'http://dreamworks.com/',
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/DreamWorks_Animation_SKG_logo_with_fishing_boy.svg/234px-DreamWorks_Animation_SKG_logo_with_fishing_boy.svg.png'

    );

INSERT INTO studios( name, foundation_year, founders, headquarters, website, studio_logo )
    VALUES(
        'Illumination',
        2010,
        'Chris Meledandri',
        'Santa Monica, California Los Angeles, California, U.S.',
        'https://www.illumination.com/',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Illumination_Entertainment_logo.svg/799px-Illumination_Entertainment_logo.svg.png'

    );



