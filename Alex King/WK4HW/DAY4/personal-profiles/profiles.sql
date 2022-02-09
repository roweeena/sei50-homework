DROP TABLE IF EXISTS records; 

CREATE TABLE records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    artist TEXT,
    bio TEXT,
    genre TEXT,
    release_year INTEGER,
    grammy_winner BOOLEAN,
    image_url TEXT
);

INSERT INTO records (name, artist, bio, genre, release_year, grammy_winner, image_url)
    VALUES (
        "In Rainbows",
        "Radiohead",
        "hi",
        "Alternative/Indie",
        2007,
        1,
        "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg"
    );