-- This file will structure the 'paintings' table,
-- and will also create some default rows (seed data)

-- This re-initialises the whole database every time sqlite3 database.db is run
DROP TABLE IF EXISTS paintings;

CREATE TABLE paintings (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- auto-initialises a unique ID
    name TEXT,          -- Name of the painting
    artist TEXT,        -- Name of the Artist
    year INTEGER,       -- Year the painting was made
    movement TEXT,      -- The movement the painting is part of
    medium TEXT,        -- What the painting was painting with, and painted on
                        -- i.e, Oil paints on canvas
    description TEXT,   -- Brief summary that describes the painting
    image_url TEXT      -- Self-explanatory     

);

INSERT INTO paintings (name, artist, year, movement, medium, description, image_url)
    VALUES (
        'Vanitas Still Life',
        'Peter Claesz',
        1625,
        'Protestant Reformation Art',
        'Oil on panel',
        'A candlestick holding the waxencrusted stub of a candle, a watch, a letter, a pen and an inkpot, a flower, a skull and a walnut are arranged on a table. Every one of these objects is part of the established repertoire of Vanitas symbolism and alludes to the passing of time and to mortality. The flower at the edge of the table is an anemone. It appears newly picked; the petals and the leaves are still fresh, but it will not be long before the flower withers. The Roman poet Ovid called the anemone a windflower, because it clings to life for such a short time. In this still life, with its message of time slipping by, the flower certainly refers to the fugitive nature of life. Pieter Claesz is known chiefly for his monochrome still lifes. In this little panel, which dates from 1625, there are still many colourful elements like the red and white of the anemone and the blue of the silk ribbon attached to the pocket watch. After about 1630 he used only muted tones of grey, green and yellow. Claesz came from Berchem, near Antwerp. He was twenty-four when he settled in Haarlem around 1621 as a fully-qualified artist. His first son was born in Haarlem. In 1622; he, too, became a painter, calling himself after his fathers birthplace. He was Nicolaes Berchem. Pieter Claesz specialized in painting breakfast pieces, little banquets and Vanitas still lifes, and his lead was followed by a great many artists.',
        'https://lh3.googleusercontent.com/PRGh9uf9J2zW597TihrACK4rbpD0WreAnBRTdWecupQho8c1KykL49NKoc76ATptSQ=s1200'
    );


INSERT INTO paintings (name, artist, year, movement, medium, description, image_url)
    VALUES (
        'Golden Summer, Eaglemonst',
        'Arthur Streeton',
        1889,
        'Heidelberg School, Australian Impressionism',
        'Oil on canvas',
        'Golden Summer, Eaglemont is an 1889 landscape painting by Australian artist Arthur Streeton. Painted en plein air at the height of a summer drought, it is an idyllic depiction of sunlit, undulating plains that stretch from Streetons Eaglemont artists camp to the distant blue Dandenong Ranges, outside Melbourne. Naturalistic yet poetic, and a conscious effort by the 21-year-old Streeton to create his grandest work yet, it is a prime example of the artists distinctive, high-keyed blue and gold palette, what he considered natures scheme of colour in Australia.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Arthur_Streeton_-_Golden_summer%2C_Eaglemont_-_Google_Art_Project.jpg/1280px-Arthur_Streeton_-_Golden_summer%2C_Eaglemont_-_Google_Art_Project.jpg'
    );


INSERT INTO paintings (name, artist, year, movement, medium, description, image_url)
    VALUES (
        'In the Big Horn Mountains, Wyoming',
        'Thomas Moran',
        1899,
        'Hudson River School, Romanticism',
        'Watercolour and pencil on paper',
        'In the Big Horn Mountains, Wyoming is a powerful composition, defined by the perpetual freshness of Morans best Western watercolors. Despite its small size, Moran masterfully conveys the largess and rugged beauty of the mountainscape. He uses vibrant washes of greens and browns for the landscape in the foreground and pinks and purples to capture the sun-dappled mountains, contrasting these bold colors with the more muted tones of the distant snow covered peak. The cloudless sky is permeated by the distinct crystalline light of the place and the viewer can feel the crispness of the dry air.',
        'https://media.mutualart.com/Images/2014_04/29/14/143649623/ade448c6-546a-413c-96fd-19af8a79743d_570.Jpeg'
    );



