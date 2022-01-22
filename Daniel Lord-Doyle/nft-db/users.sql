DROP TABLE IF EXISTS nfts;

CREATE TABLE nfts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_name TEXT NOT NULL,
    last_purchase_price INTEGER,
    owned BOOLEAN,
    for_sale BOOLEAN,
    asking_price INTEGER,
    image_route TEXT
);

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route )
    VALUES (
        'Immutable Apes X',
        0.07,
        true,
        false,
        'https://i.ibb.co/qpwxsdB/ape1.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route )
    VALUES (
        'Immutable Apes X',
        0.07,
        true,
        true,
        0.09,
        'https://i.ibb.co/7rfFJfN/ape2.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route )
    VALUES (
        'Immutable Apes X',
        0.062,
        true,
        false,
        'https://i.ibb.co/fkPsKNZ/ape3.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route )
    VALUES (
        'Immutable Apes X',
        0.03,
        true,
        true,
        0.1,
        'https://i.ibb.co/3m8MYfq/ape4.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route )
    VALUES (
        'Immutable Apes X',
        0.07,
        true,
        false,
        'https://i.ibb.co/wKKcXF7/ape5.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route )
    VALUES (
        'Immutable Apes X',
        0.045,
        true,
        true,
        1.4,
        'https://i.ibb.co/mD5mPBS/ape6.png'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route )
    VALUES (
        'Immutable Apes X',
        0.065,
        true,
        true,
        3.4,
        'https://i.ibb.co/j3s7Ywk/ape7.png'
    );








