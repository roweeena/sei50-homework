DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    original_language TEXT,
    status TEXT,
    rating INTEGER,
    description TEXT,
    poster_url TEXT
);

INSERT INTO movies ( name, genre, original_language, status, rating, description, poster_url)
    VALUES(
        'Encanto',
        'Animation',
        'English',
        'Watched',
        10,
        'Amazing Disney Musicals',
        'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg'
    );


INSERT INTO movies ( name, genre, original_language, status, rating, description, poster_url)
    VALUES(
        'Spider-Man No Way Home',
        'Action',
        'English',
        'Watched',
        7.5,
        'mixed feelings',
        'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg'
    );