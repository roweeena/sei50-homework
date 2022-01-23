DROP TABLE IF EXISTS people;

CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    preferred_travel TEXT,
    time_value INTEGER
);


INSERT INTO people (name, preferred_travel, time_value)
    VALUES (
        'Laurence',
        'TRANSIT',
        15
    );

INSERT INTO people (name, preferred_travel, time_value)
    VALUES (
        'Eddie',
        'TRANSIT',
        25
    );


INSERT INTO people (name, preferred_travel, time_value)
VALUES (
    'Patrick',
    'TRANSIT',
    10
);