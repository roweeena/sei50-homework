DROP TABLE IF EXISTS bears;
CREATE TABLE bears (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- manage IDs for us; we wont have to initialise them
  name TEXT,
  description TEXT,
  age INTEGER,
  image_url TEXT,
  owner_id INTEGER 
  
);

INSERT INTO bears (name, description, age, image_url, owner_id)
  VALUES (
    'simba',
    'The best bear',
    10, 
    'https://whyy.org/wp-content/uploads/2017/07/belgium-china-panda-1-768x432.jpg',
    1
  );

  INSERT INTO bears (name, description, age, image_url, owner_id)
  VALUES (
    'lichi',
    'dumb',
    30, 
    'https://img2.chinadaily.com.cn/images/202107/09/60e78417a310efa1e3ad3e42.jpeg'
    2
  );
  INSERT INTO bears (name, description, age, image_url, owner_id) 
  VALUES (
    'simon',
    'intelligent',
    4, 
    'https://cdn.tsln.com/wp-content/uploads/sites/13/2018/10/bears-tsln-101318-1-1240x823.jpg',
    3
  );