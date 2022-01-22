DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

INSERT INTO projects (name) VALUES ("Study");
INSERT INTO projects (name) VALUES ("Shopping");
INSERT INTO projects (name) VALUES ("Relaxing");