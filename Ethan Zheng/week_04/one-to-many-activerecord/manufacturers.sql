DROP TABLE IF EXISTS manufacturers;

CREATE TABLE manufacturers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    location TEXT,
    date_established INTEGER
);

INSERT INTO manufacturers( name, location, date_established ) VALUES ( 'Grand Seiko', 'Japan', 1988);
INSERT INTO manufacturers( name, location, date_established ) VALUES ( 'Tianjin Seagull', 'China', 1955);
INSERT INTO manufacturers( name, location, date_established ) VALUES ( 'Sinn', 'Germany', 1961);
INSERT INTO manufacturers( name, location, date_established ) VALUES ( 'Zenith', 'Switzerland', 1865);