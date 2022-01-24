-- everytime run sql, initialise it
DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  todo TEXT,
  dueDate DATE,
  description TEXT,
  completed BOOLEAN
);


-- insert default items
INSERT INTO todos(
  todo, dueDate, description, completed
) VALUES (
  "CRUD homework",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tincidunt ipsum, vitae vehicula sem. Nulla facilisi. In hac habitasse platea dictumst. Morbi aliquet, mi non pellentesque euismod, neque turpis vehicula sapien, a porta mi mauris ut ex. Aliquam ligula turpis, tincidunt id rutrum ut, commodo a turpis. Donec interdum viverra purus ut faucibus. Quisque porttitor erat vel dolor volutpat finibus. Sed lacinia auctor ex sit amet vestibulum. Etiam a augue sit amet diam pulvinar commodo. Donec sollicitudin pellentesque dui. Donec in pharetra elit. Sed tincidunt urna sit amet justo pretium, nec malesuada nunc volutpat.",
  0
);

INSERT INTO todos(
  todo, dueDate, description, completed
) VALUES (
  "Outcome session homework",
  "",
  "Integer tristique nisl magna, nec volutpat dolor vulputate eget. Fusce interdum erat magna, eu feugiat justo faucibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse posuere molestie massa eget bibendum. Phasellus luctus hendrerit turpis id maximus. Duis nec massa vel justo placerat tristique nec nec quam. Cras quis sodales mi. Aliquam nunc nisl, bibendum eget aliquet pretium, vulputate quis nulla.",
  0
);

INSERT INTO todos(
  todo, dueDate, description, completed
) VALUES (
  "Play with my cat",
  "",
  "Cras lacinia nulla dignissim, vehicula nibh condimentum, consequat lorem. Mauris convallis dignissim mollis. Cras ut sapien suscipit, dictum ligula non, hendrerit orci. Maecenas feugiat enim in bibendum dignissim. Pellentesque ut felis at quam semper vestibulum. Etiam et nibh erat. Sed ut diam ut dolor euismod blandit nec vitae urna.",
  1
);