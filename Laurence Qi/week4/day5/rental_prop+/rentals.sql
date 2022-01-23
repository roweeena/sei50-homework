DROP TABLE IF EXISTS rentals;

CREATE TABLE rentals (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    street_address TEXT, 
    suburb TEXT, 
    cost FlOAT, 
    net_cost FLOAT,
    total_travel_time FLOAT,
    total_time_value FLOAT
);

INSERT INTO rentals (street_address, suburb, cost)
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

