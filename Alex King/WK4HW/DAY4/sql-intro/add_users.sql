-- To add rows to a table, we use the 'INTERT INTO' command

INSERT INTO users (id, name, email, password, profile_image, verified, age)
    VALUES(
        1, 
        'Luke',
        'luke@ga.co',
        'chicken',
        'http://placekitte.com/200/200',
        1, -- still boolean, 1 true, 0 false 
        100
    ); 

    INSERT INTO users (id, name, email, password, profile_image, verified, age)
    VALUES(
        2, 
        'Ro',
        'roboat@ga.co',
        'chicken',
        'http://placekitte.com/400/400',
        0, -- still boolean, 1 true, 0 false 
        20
    ); 

    INSERT INTO users (id, name, email, password, profile_image, verified, age)
    VALUES(
        3, 
        'lay',
        'lay@ga.co',
        'chicken',
        'http://placekitte.com/100/500',
        0, -- still boolean, 1 true, 0 false 
        26
    ); 