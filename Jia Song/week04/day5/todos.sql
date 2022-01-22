-- everytime run sql, initialise it
DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  todo TEXT,
  dueDate DATE,
  completed BOOLEAN,
  project_id INTEGER
);


-- insert default items
INSERT INTO todos(
  todo, dueDate, completed, project_id
) VALUES (
  "CRUD homework",
  2022-01-23,
  0,
  1
);

INSERT INTO todos(
  todo, dueDate, completed, project_id
) VALUES (
  "Outcome session homework",
  "",
  0,
  2
);

INSERT INTO todos(
  todo, dueDate, completed, project_id
) VALUES (
  "Play with my cat",
  "",
  1,
  1
);