DROP TABLE IF EXISTS pets;

CREATE TABLE albums(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    album_name TEXT,
    artist TEXT,
    genre TEXT,
    released_year INTEGER,
    explicity INTEGER,
    album_cover TEXT
);

INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        '1989',
        'Taylor Swift',
        'Pop',
        2014,
        0,
        'https://img9.doubanio.com/view/subject/m/public/s28041733.jpg'
    );
INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        'Future Nostalgia',
        'Dua Lipa',
        'Pop',
        2020,
        1,
        'https://img9.doubanio.com/view/subject/m/public/s33572392.jpg'
    );
INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        'Melodrama',
        'Lorde',
        'Pop',
        2017,
        1,
        'https://img9.doubanio.com/view/subject/m/public/s29391060.jpg'
    );
INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        'folklore',
        'Taylor Swift',
        'Folk',
        2020,
        0,
        'https://img9.doubanio.com/view/subject/m/public/s33693991.jpg'
    );
INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        'Sweetener',
        'Ariana Grande',
        'R&B',
        2018,
        1,
        'https://img9.doubanio.com/view/subject/m/public/s29797826.jpg'
    );
INSERT INTO albums (album_name,artist,genre,released_year,explicity,album_cover)
    VALUES (
        'SOUR',
        'Olivia Rodrigo',
        'Pop',
        2021,
        1,
        'https://img9.doubanio.com/view/subject/m/public/s33874259.jpg'
    );