DROP TABLE IF EXISTS destinations;

CREATE TABLE destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    street_address TEXT, 
    suburb TEXT,
    visiting_frequency FLOAT, 
    person_id INTEGER
);

--Laurence's Destinations
INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '12 Bowler Avenue',
        'Fairfield',
        2,
        1
    );

INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '15 Broadway',
        'Ultimo',
        2,
        1
    );

INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '129 Harrington street',
        'Sydney',
        0.3,
        1
    );

-- Eddies Destinations
INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '85 Castlereagh street',
        'Sydney',
        3,
        2
    );

INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '657 Punchbowl road',
        'Punchbowl',
        0.75,
        2
    );

INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        '85 Castlereagh street',
        'Sydney',
        3,
        2
    );

--Patrick's Destinations
INSERT INTO destinations (street_address, suburb, visiting_frequency, person_id)
    VALUES (
        'F03, University of Sydney, Eastern Ave',
        'Camperdown',
        3,
        3
    );
