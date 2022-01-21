DROP TABLE IF EXISTS shortcuts;

CREATE TABLE shortcuts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    shortcut TEXT,
    power INTEGER,
    benefit TEXT
);

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'change application',
        'command tab',
        1,
        'much faster'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'change browser window',
        'command and then number',
        3,
        'much faster than using the mouse'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'reload browser',
        'command r',
        2,
        'much faster than pressing the button'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'command palette',
        'command shift p',
        5,
        'not sure how else to open it'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'duplicate line',
        'option shift down or up',
        7,
        'much faster than copy and paste and retain clipboard'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'keyboard shortcut customisation',
        'command k and then s',
        9,
        'spend the time you have saved with shortcuts making more shortcuts'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'collapse all functions',
        'command k',
        7,
        'hide your hideous code'
    );

INSERT INTO shortcuts(name, shortcut, power, benefit)
    VALUES (
        'expand all functions',
        'cannot recall',
        1,
        'find some hideous code'
    );