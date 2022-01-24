DROP TABLE IF EXISTS cars;

CREATE TABLE cars(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model TEXT,
    body_type TEXT,
    entered_market INTEGER,
    in_production BOOLEAN,
    photo_url TEXT,
    manufacturer_id INTEGER
);

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Model 3',
    '4-door Sedan',
    2017,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/800px-2019_Tesla_Model_3_Performance_AWD_Front.jpg',
    1
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Model X',
    '5-door SUV',
    2015,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/800px-2017_Tesla_Model_X_100D_Front.jpg',
    1
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Model Y',
    '5-door SUV',
    2020,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2020_Tesla_Model_Y%2C_front_8.1.20.jpg/800px-2020_Tesla_Model_Y%2C_front_8.1.20.jpg',
    1
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Model S',
    '5-door Liftback',
    2012,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/640px-2018_Tesla_Model_S_75D.jpg',
    1
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'F-150',
    '4-door Pickup Truck',
    1948,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg/800px-2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg',
    2
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Commodore',
    '4-door Sedan',
    1978,
    0,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2018_Holden_Commodore_%28ZB_MY18%29_LT_sedan_%282018-08-06%29_01.jpg/800px-2018_Holden_Commodore_%28ZB_MY18%29_LT_sedan_%282018-08-06%29_01.jpg',
    3
    );

INSERT INTO cars(model, body_type, entered_market, in_production, photo_url, manufacturer_id)
 VALUES (
    'Corolla',
    '4-door Hatchback',
    1966,
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/800px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg',
    4
    );

