

DROP TABLE IF EXISTS movies;



CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    release_year INTEGER,
    overview TEXT,
    poster_url TEXT

);

INSERT INTO movies( name, genre, release_year, overview, poster_url )
    VALUES(
        'Encanto',
        'Musical',
        2021,
        'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional familys last hope.',
        'https://www.themoviedb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'

    );


    INSERT INTO movies( name, genre, release_year, overview, poster_url )
    VALUES(
        'Big Hero 6',
        'Action',
        2014,
        'A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.',
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2mxS4wUimwlLmI1xp6QW6NSU361.jpg'

    );




