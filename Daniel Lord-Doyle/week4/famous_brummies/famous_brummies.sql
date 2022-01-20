DROP TABLE IF EXISTS famous_brummies;

CREATE TABLE famous_brummies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    famous_for TEXT,
    year_born INTEGER,
    year_died INTEGER,
    born_in_brum BOOLEAN,
    famous_brummy_rating INTEGER,
    image_url TEXT
);

INSERT INTO famous_brummies ( name, famous_for, year_born, year_died, born_in_brum, famous_brummy_rating, image_url )
    VALUES (
        'John Cadbury',
        'John was a Quaker and English proprietor, tea and coffee trader and founder of Cadbury, the chocolate business based in Birmingham, England.',
        1801,
        1889,
        1,
        8,
        'https://thenewsmen.co.in/public/upload/news/story_image_1625050127.jpeg'
    );

INSERT INTO famous_brummies ( name, famous_for, year_born, year_died, born_in_brum, famous_brummy_rating, image_url )
    VALUES (
        'John Ronald Reuel Tolkien CBE FRSL',
        'JRR Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.',
        1892,
        1973,
        1,
        10,
        'https://1.bp.blogspot.com/-Pfx_60-Q6TE/Xy_-jTkUFaI/AAAAAAAAbJM/kGWxO_YFT6EoKEWQ1TPYP9Fvn-rJKrG6gCLcBGAsYHQ/s1280/Tolkien.jpg'
    );

INSERT INTO famous_brummies ( name, famous_for, year_born, born_in_brum, famous_brummy_rating, image_url )
    VALUES (
        'Ozzy Osbourne',
        'John Michael "Ozzy" Osbourne is an English singer, songwriter, and television personality. He rose to prominence during the 1970s as the lead vocalist of the heavy metal band Black Sabbath, during which period he adopted the nickname "Prince of Darkness".',
        1948,
        1,
        10,
        'https://www.rollingstone.com/wp-content/uploads/2020/08/ozzy-osbourne-doc.jpg'
    );