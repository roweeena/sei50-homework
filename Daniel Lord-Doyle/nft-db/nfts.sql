DROP TABLE IF EXISTS nfts;

CREATE TABLE nfts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_name TEXT NOT NULL,
    last_purchase_price FLOAT,
    owned BOOLEAN,
    for_sale BOOLEAN,
    asking_price FLOAT,
    image_route TEXT,
    previous_owner TEXT
);

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route, previous_owner, asking_price )
    VALUES (
        'Immutable Apes X',
        0.07,
        true,
        false,
        'https://i.ibb.co/qpwxsdB/ape1.png',
        'rororotheboat',
        2.2
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route, previous_owner )
    VALUES (
        'Immutable Apes X',
        0.07,
        false,
        true,
        0.09,
        'https://i.ibb.co/7rfFJfN/ape2.png',
        'whichalex'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route, previous_owner, asking_price )
    VALUES (
        'Immutable Apes X',
        0.062,
        true,
        false,
        'https://i.ibb.co/fkPsKNZ/ape3.png',
        'lukehammerz',
        0.8
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route, previous_owner )
    VALUES (
        'Immutable Apes X',
        0.03,
        false,
        true,
        0.1,
        'https://i.ibb.co/3m8MYfq/ape4.png',
        'jiasungasong'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, image_route, previous_owner, asking_price )
    VALUES (
        'Immutable Apes X',
        0.07,
        true,
        false,
        'https://i.ibb.co/wKKcXF7/ape5.png',
        'bigyippity',
        0.09
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route, previous_owner )
    VALUES (
        'Immutable Apes X',
        0.045,
        false,
        true,
        1.4,
        'https://i.ibb.co/mD5mPBS/ape6.png',
        'cassiegotc0vid'
    );

INSERT INTO nfts ( project_name, last_purchase_price, owned, for_sale, asking_price, image_route, previous_owner )
    VALUES (
        'Immutable Apes X',
        0.065,
        false,
        true,
        3.4,
        'https://i.ibb.co/j3s7Ywk/ape7.png',
        'camth3man'
    );