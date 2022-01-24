DROP TABLE IF EXISTS bradpitt;

CREATE TABLE bradpitt(
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT,
    release INTEGER,
    duration TEXT,
    rating INTEGER,
    role TEXT,
    image_url TEXT
);

INSERT INTO bradpitt (title, release, duration, rating, role, image_url)
    VALUES (
        'A River Runs Through It',
        1992,
        '2h 3m',
        7.2,
        'Paul Maclean',
        'https://i.gifer.com/2s5M.gif'
    );


INSERT INTO bradpitt (title, release, duration, rating, role, image_url)
    VALUES (
        'Interview With The Vampire',
        1994,
        '1h 58m',
        7.5,
        'Louis de Pointe du Lac',
        'https://pbs.twimg.com/media/Cs1yUq3WYAAIiVw?format=jpg&name=large'
    );


INSERT INTO bradpitt (title, release, duration, rating, role, image_url)
    VALUES (
        'Seven',
        1995,
        '2h 7m',
        8.6,
        'David Mills',
        'https://www.winwallpapers.net/w1/2013/10/Se7en-Wallpapers-9.jpg'
    );

INSERT INTO bradpitt (title, release, duration, rating, role, image_url)
    VALUES (
        'Meet Joe Black',
        1998,
        '3h 1m',
        7.2,
        'Death',
        'https://i0.wp.com/www.popbabble.org/wp-content/uploads/2015/01/brad-pitt-hair-meet-joe-black.jpg?resize=1024%2C554&ssl=1'
    );

INSERT INTO bradpitt (title, release, duration, rating, role, image_url)
    VALUES (
        'Fight Club',
        1999,
        '2h 19m',
        8.8,
        'Tyler Durden',
        'https://1.bp.blogspot.com/-45ismY3LhwQ/X9uszclDHnI/AAAAAAAAR7Q/7Czvb1yT3DEOJ8xx-vJU2W2AcmMWWK7ugCLcBGAsYHQ/s400/tyler%2Bdurden.gif'
    );