DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    team_name TEXT,
    home_ground TEXT,
    state TEXT,
    founded INTEGER,
    premierships INTEGER,
    still_active BOOLEAN,
    club_logo_url TEXT
);

INSERT INTO teams (team_name, home_ground, state, founded, premierships, still_active, club_logo_url)
    VALUES (
        'South Sydney Rabbitohs',
        'Stadium Australia',
        'NSW',
        1908,
        21,
        1,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/South-Sydney-Rabbitohs-logo2.png/320px-South-Sydney-Rabbitohs-logo2.png'
    );