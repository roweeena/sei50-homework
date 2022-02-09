DROP TABLE IF EXISTS properties;

CREATE TABLE properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fur TEXT,
    eyes TEXT,
    mouth TEXT,
    headwear TEXT,
    bodywear TEXT,
    background TEXT,
    eye_accessory TEXT,
    nft_id INTEGER
);

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Forest Ape Genus 1',
        'Blue',
        'Ape Mouth',
        'No Headwear',
        'Pink Metaverse Suit',
        'Medium',
        'No Eye Accessory',
        1
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Hill Top Ape Genus 2',
        'Olive',
        'Content',
        'No Headwear',
        'No Body Wear',
        'Into The Metaverse',
        'No Eye Accessory',
        2
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Mountain Ape Genus 2',
        'Red',
        'Melancholy',
        'Pink Metaverse Helmet',
        'Pink Metaverse Suit',
        'Medium',
        'Scouter V2',
        3
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Forest Ape Genus 2',
        'Blue',
        'Content',
        'No Headwear',
        'White Immutable Apes T',
        'Fresh',
        'No Eye Accessory',
        4
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Ape Lord of the Zebras',
        'Blue',
        'Melancholy',
        'No Headwear',
        'Pink Metaverse Suit',
        'Modest Moon',
        'No Eye Accessory',
        5
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Ape Lord Of The Leapards Genus 2',
        'Gas Fire',
        'Tooth Pick',
        'No Headwear',
        'No Body Wear',
        'Sublime Moon',
        'No Eye Accessory',
        6
    );

INSERT INTO properties ( fur, eyes, mouth, headwear, bodywear, background, eye_accessory, nft_id )
    VALUES (
        'Forest Ape Genus 1',
        'Black',
        'Ape Mouth',
        'No Headwear',
        'No Body Wear',
        'Distant Moon',
        'No Eye Accessory',
        7
    );