DROP TABLE IF EXISTS items;

CREATE TABLE items(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  cost_price MONEY,
  retail_price MONEY,
  priced_by TEXT,
  taxable BOOLEAN,
  image_url TEXT,
  shop_id INTEGER
);

INSERT INTO items (name, description, cost_price, retail_price, priced_by, taxable, image_url, shop_id) 
VALUES (
  'Tomato',
  'A fruit  pretending to be a vegetable',
  10.00,
  15.00,
  'kg',
  1,
  '/images/tomato.svg',
  1
);

INSERT INTO items (name, description, cost_price, retail_price, priced_by, taxable, image_url, shop_id) 
VALUES(
  'Pretzel',
  'A german snack bread shaped into a knot',
  5.00,
  7.50,
  'each',
  1,
  '/images/pretzel.svg',
  2
);

INSERT INTO items (name, description, cost_price, retail_price, priced_by, taxable, image_url, shop_id) 
VALUES (
  'Oyster',
  'A delicious mollusc. Great with a drop or two of peated whisky',
  3.00,
  5.00,
  'each',
  1,
  '/images/oyster.svg',
  3
);

INSERT INTO items (name, description, cost_price, retail_price, priced_by, taxable, image_url, shop_id) 
VALUES (
  'Pizza',
  'Is there really only one?',
  4.00,
  20.00,
  'each',
  1,
  '/images/pizza.svg',
  4
);

INSERT INTO items (name, description, cost_price, retail_price, priced_by, taxable, image_url, shop_id) 
VALUES (
  'Pie',
  'A pastry crust containing delicious filling.',
  10.00,
  19.99,
  'each',
  1,
  '/images/pie.svg',
  2
);
