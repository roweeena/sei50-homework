

DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    release_year INTEGER,
    overview TEXT,
    poster_url TEXT,
    studio_id INTEGER

);


INSERT INTO movies( name, genre, release_year, overview, poster_url, studio_id )
    VALUES(
        'Encanto',
        'Musical',
        2021,
        'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional familys last hope.',
        'https://www.themoviedb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
        1

    );


    INSERT INTO movies( name, genre, release_year, overview, poster_url, studio_id )
    VALUES(
        'Big Hero 6',
        'Action',
        2014,
        'A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.',
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2mxS4wUimwlLmI1xp6QW6NSU361.jpg',
        2

    );

  INSERT INTO movies( name, genre, release_year, overview, poster_url, studio_id )
    VALUES(
        'Shrek',
        'Comedy',
        2001,
        'It aint easy being green -- especially if youre a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.',
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2mxS4wUimwlLmI1xp6QW6NSU361.jpg',
        3

    );

    INSERT INTO movies( name, genre, release_year, overview, poster_url, studio_id )
    VALUES(
        'Minions',
        'Comedy',
        2015,
        'Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.',
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7yzu84zZOp2pgFhQ6Wfd0LPjbIr.jpg',
        4

    );



