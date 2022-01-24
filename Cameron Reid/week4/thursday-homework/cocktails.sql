DROP TABLE IF EXISTS cocktails;

CREATE TABLE cocktails (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT,
  name TEXT,
  ingredient1 TEXT,
  ingredient2 TEXT,
  ingredient3 TEXT,
  ingredient4 TEXT,
  ingredient5 TEXT,
  glass_type_url TEXT,
  description TEXT,
  steps TEXT,
  garnish TEXT
);

INSERT INTO cocktails ( image_url, name, ingredient1, ingredient2, ingredient3, glass_type_url, description, garnish, steps )
  VALUES (
    'https://preppykitchen.com/wp-content/uploads/2021/01/espresso-martini-feature.jpg',
    'Espresso Martini',
    '40ml vodka', 
    '20ml kahlua', 
    '20ml espresso',
    'https://cdn-icons-png.flaticon.com/512/83/83512.png',
    'Something to get then party started',
    '3 coffee beans',
    '1. Add liquor and coffee to shaker with ice 2. Shake for 1 min until shaker starts to ice over 3. double strain into cocktail glass'
  );

INSERT INTO cocktails ( image_url, name, ingredient1, ingredient2, ingredient3, glass_type_url, description, garnish, steps )
  VALUES (
    'https://www.liquor.com/thmb/FpQjWZNtBBC8PoW8aPfUj7cysYg=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08110806__negroni-720x720-recipe-7c1b747a616f4659af4008d025ab55df.jpg',
    'Negroni',
    '30ml gin', 
    '30ml campari', 
    '30ml sweet vermouth',
    'https://cdn-icons.flaticon.com/png/512/2279/premium/2279808.png?token=exp=1642674058~hmac=1687b9b3ff4b4e182245eade46b18246',
    'A classic italian aperitivo',
    'Orange slice',
    '1. Pour the gin, vermouth and Campari into a mixing glass or jug with ice. Stir well until the outside of the glass feels cold 2. Strain into a tumbler and add 1 large ice sphere or some fresh ice, and garnish with an orange slice, using a blood orange when in season.'
  );

INSERT INTO cocktails ( image_url, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, glass_type_url, description, garnish, steps )
  VALUES (
    'https://www.artofdrink.com/wp-content/uploads/2010/08/how-to-make-a-mojito-recipe-735x1103.jpg',
    'Mojito',
    '10 mint leaves', 
    '30ml lime juice',
    '60ml white rum', 
    '30ml sugar syrup', 
    '100ml soda water',
    'https://cdn-icons-png.flaticon.com/512/3329/3329163.png',
    'Traditional Cuban cocktail, perfect for summer',
    'Mint sprig, lime wedges',
    '1. Place mint, lime and sugar in glass, bruise mint leaves with muddler or pestle 2. Add ice, then rum and soda water, then mix 3. Garnish with mint and lime'
  );


