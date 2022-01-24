DROP TABLE IF EXISTS artists;
CREATE TABLE artists(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    birth_year INTEGER
);
INSERT INTO artists( name, birth_year) VALUES ('Mac Miller', 1992);
INSERT INTO artists( name, birth_year) VALUES ('Frank Ocean', 1987);