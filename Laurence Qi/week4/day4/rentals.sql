-- make a new sql db

-- if existing db, then drop it

DROP TABLE IF EXISTS rentals;

CREATE TABLE rentals (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- manages IDs for us
    street_address TEXT,
    suburb TEXT, 
    cost FLOAT,
    travel_time INTEGER
);

INSERT INTO rentals ( street_address, suburb, cost )
    VALUES (
        '1/4 Beronga Street', 
        'North Strathfield',
        595
    );

INSERT INTO rentals ( street_address, suburb, cost )
    VALUES (
        '311/6 Avenue Of Oceania',
        'Newington',
        650
    );

