DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT,
    release INTEGER,
    duration TEXT,
    rating FLOAT,
    image_url TEXT,
    video_url TEXT

);

INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Pulp Fiction',
        1994,
        '2h 34m',
        8.9,
        'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
        'https://youtu.be/WSLMN6g_Od4'

    );

INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Jackie Brown',
        1997,
        '2h 40m',
        7.5,
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQu1nRd70jdhd9iaqbZCK8k8Xq0w02Pi-QioCiilZOODQakFcJE',
        'https://youtu.be/9gs1_ndm3r4'

    );


INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Kill Bill: Vol. 1',
        2003,
        '1h 51m',
        8.1,
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2n6mrijVjYMAFEQ1DUaKCp0P02YwVyzAO9Hf1ypNEPvsJk835',
        'https://youtu.be/ZxJrdCIejus'

    );

INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Inglourious Basterds',
        2009,
        '2h 33m',
        8.3,
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvl1IAwSys6SpV0QzocNFln0PQSwod5gBsdJRX5Tj98vwyFxal',
        'https://youtu.be/eOcimzsviFA'

    );

INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Django Unchained',
        2012,
        '2h 45m',
        8.4,
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt',
        'https://youtu.be/0fUCuvNlOCg'

    );

INSERT INTO movies (title, release, duration, rating, image_url, video_url)
    VALUES (
        'Once Upon a Time in Hollywood',
        2019,
        '2h 51m',
        7.6,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToswZe6sYekUbOf0TpjhYo64Z8P7x2x3zjT9XO2R_-2oXeX06Y',
        'https://youtu.be/ELeMaP8EPAA'

);