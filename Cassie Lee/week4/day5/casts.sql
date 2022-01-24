DROP TABLE IF EXISTS casts;

CREATE TABLE casts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    born TEXT,
    awards TEXT,
    image_url TEXT,
    movie_id INTEGER
   

);

INSERT INTO casts( name, born, awards, image_url, movie_id ) 
    VALUES (
        'Leonardo DiCaprio',
        '11 November 1974',
        'Academy Award for Best Actor in a Leading Role',
        'https://i.pinimg.com/originals/a4/10/ed/a410eddefc7b3140e499a5940ad91dd8.png',
        5
        

    );

INSERT INTO casts( name, born, awards, image_url, movie_id ) 
    VALUES (
        'Brad Pitt',
        '18 December 1963',
        'Academy Award for Best Supporting Actor',
        'https://prod-images.tcm.com/Master-Profile-Images/BradPitt.152994.jpg',
        4
        

    );

INSERT INTO casts( name, born, awards, image_url, movie_id ) 
    VALUES (
        'Uma Thurman',
        '29 April 1970',
        'Academy Award for Best Supporting Actor',
        'https://data.whicdn.com/images/55827879/original.jpg',
        1
        

    );

INSERT INTO casts( name, born, awards, image_url, movie_id) 
    VALUES (
        'Samuel L. Jackson',
        '21 December 1948',
        'Academy Award for Best Supporting Actor',
        'https://www.indiewire.com/wp-content/uploads/2019/01/samuel-l-jackson-body-measurements-religion-horoscope-net-worth.jpg',
        1
        

    );

INSERT INTO casts( name, born, awards, image_url, movie_id ) 
    VALUES (
        'Christoph Waltz',
        '4 October 1956',
        'Cannes Best Actor Award',
        'https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/15/01/640x575/54a756235d83a_-_elle-christoph-waltz-blog.jpg?resize=480:*',
        4
        

    );