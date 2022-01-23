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

INSERT INTO rentals ( street_address, suburb, cost ) VALUES ('8 Carrington Street','Strathfield', 690);
INSERT INTO rentals ( street_address, suburb, cost ) VALUES ('2E/19-21 George Street','North Strathfield', 610);
INSERT INTO rentals ( street_address, suburb, cost ) VALUES ( '2 Beronga Street', 'North Strathfield', 650 );
INSERT INTO rentals ( street_address, suburb, cost ) VALUES ( '11G/19-21 George Street', 'North Strathfield', 550 );
INSERT INTO rentals ( street_address, suburb, cost ) VALUES ( '1/2 Everton Road', 'Strathfield', 650);
INSERT INTO rentals ( street_address, suburb, cost ) VALUES ( '61/1 Clarence Street', 'Strathfield', 590);