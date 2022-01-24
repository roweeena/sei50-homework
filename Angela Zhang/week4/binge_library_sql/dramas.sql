DROP TABLE IF EXISTS dramas;

CREATE TABLE dramas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    original_language TEXT,
    status TEXT,
    rating INTEGER,
    description TEXT,
    poster_url TEXT
);

INSERT INTO dramas ( name, genre, original_language, status, rating, description, poster_url)
    VALUES(
        'Vincenzo',
        'Action',
        'Korean',
        'Watched',
        10,
        'Italian Mafia arrives in korea',
        'https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg'
    );


INSERT INTO dramas ( name, genre, original_language, status, rating, description, poster_url)
    VALUES(
        'Its Okay to Not Be Okay',
        'Drama',
        'Korean',
        'Watched',
        10,
        'A beautiful insight and understanding about different mental illnesses and the path to self-love/self-reflection',
        'https://thefangirlverdict.com/ezoimgfmt/i0.wp.com/thefangirlverdict.com/wp-content/uploads/2020/09/Its-Okay-To-Not-Be-Okay-001.jpg?w=595&ssl=1&ezimgfmt=ng:webp/ngcb78'
    );