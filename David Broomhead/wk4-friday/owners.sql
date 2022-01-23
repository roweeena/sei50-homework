DROP TABLE IF EXISTS owners;

CREATE TABLE owners(
    id INTEGER PRIMARY KEY AUTOINCREMENT
    ,name TEXT
    ,age INTEGER
    ,wealth_m TEXT
);

INSERT INTO owners(name,Age,Wealth_m) VALUES ('Arthur Blank',79,7600);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('David Tepper',64,15800);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('Jerry Jones',79,10500);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('Jimmy Haslam',67,3800);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('Mike Brown',86,925);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('Steve Bisciotti',61,5700);
INSERT INTO owners(name,Age,Wealth_m) VALUES ('Virginia Halas McCaskey',99,1700);
