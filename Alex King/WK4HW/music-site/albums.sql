DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    description TEXT,
    release INTEGER,
    album_art TEXT,
    artist_id INTEGER,
    grammy_winner BOOLEAN
);

INSERT INTO albums (name, genre, description, release, album_art, artist_id, grammy_winner)
    VALUES(
        'Faces',
        'Hip-Hop',
        'n/a',
        2014,
        'na',
        1,
        0
    );

INSERT INTO albums (name, genre, description, release, album_art, artist_id, grammy_winner)
    VALUES(
        'Blonde',
        'Pop',
        'n/a',
        2016,
        'na',
        2,
        0
    );