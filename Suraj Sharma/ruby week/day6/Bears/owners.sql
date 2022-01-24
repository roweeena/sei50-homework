DROP TABLE IF EXISTS owners;
CREATE TABLE owners(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

INSERT INTO owners(name, email) VALUES('thumb', 'thumb@ga.co');
INSERT INTO owners(name, email) VALUES('michel', 'Michel@ga.co');
INSERT INTO owners(name, email) VALUES('none', 'None@ga.co');
INSERT INTO owners(name, email) VALUES('Pim', 'Pim@ga.co');