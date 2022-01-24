
DROP TABLE IF EXISTS teams;
CREATE TABLE teams(
    id INTEGER PRIMARY KEY AUTOINCREMENT
    ,franchise  TEXT
    ,price     TEXT
    ,year      INTEGER
    ,owner_id  INTEGER
);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Arizona Cardinals','$50,000',1932,1);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Atlanta Falcons','545,000,000',2002,2);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Baltimore Ravens','900,000',2000,3);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Buffalo Bills','1,400,000,000',2014,4);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Carolina Panthers','2,275,000,000',2018,5);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Chicago Bears','100',1920,6);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Cincinnati Bengals','200,000,000',1968,7);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Cleveland Browns','1,050,000,000',2012,1);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Dallas Cowboys','140,000,000',1989,2);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Denver Broncos','71,000,000',1984,3);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Detroit Lions','4,500,000',1963,4);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Green Bay Packers',NULL,1923,5);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Houston Texans','700,000,000',1999,6);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Indianapolis Colts','19,000,000',1972,7);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Jacksonville Jaguars','760,000,000',2012,1);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Kansas City Chiefs','25,000',1960,2);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Las Vegas Raiders',NULL,2011,3);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Los Angeles Chargers','72,000,000',1984,4);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Los Angeles Rams','80,000,000',1995,5);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Miami Dolphins','1,000,000,000',2008,6);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Minnesota Vikings','600,000,000',2005,7);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('New England Patriots','175,000,000',1994,1);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('New Orleans Saints','64,000,000',1985,2);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('New York Giants','500',1925,3);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('New York Jets','635,000,000',2000,4);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Philadelphia Eagles','185,000,000',1994,5);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Pittsburgh Steelers','2,500',1933,6);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('San Francisco 49ers','17,000,000',1977,7);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Seattle Seahawks','200,000,000',1997,1);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Tampa Bay Buccaneers','192,000,000',1995,2);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Tennessee Titans','25,000',1959,3);
INSERT INTO teams(franchise,price,year,owner_id) VALUES ('Washington Football Team','800,000,000',1999,4);
