DROP TABLE IF EXISTS students;

CREATE TABLE students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    second_name TEXT,
    course_year INTEGER,
    address TEXT,
    email TEXT
);

INSERT INTO students (first_name, second_name, course_year, address, email) VALUES ('Jesus', 'Flores', 2021, 'Alexadnria,NSW 2015','sss@ga.com');
INSERT INTO students (first_name, second_name, course_year, address, email) VALUES ('FFF', 'XXX', 2222, 'Alexadnria,NSW 2015','sss@ga.com');
INSERT INTO students (first_name, second_name, course_year, address, email) VALUES ('fas', 'Flordases', 1212, 'Alexadnria,NSW 2015','sss@ga.com');


DROP TABLE IF EXISTS studentssubjects;

CREATE TABLE studentssubjects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    subject_id INTEGER
);


INSERT INTO studentssubjects (subject_id, student_id) VALUES (1,1);
INSERT INTO studentssubjects (subject_id, student_id) VALUES (2,2);
INSERT INTO studentssubjects (subject_id, student_id) VALUES (3,3);

DROP TABLE IF EXISTS subjects;

CREATE TABLE subjects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    clssroom TEXT,
    teacher TEXT,
    description TEXT
);

INSERT INTO subjects (name, clssroom, teacher, description) VALUES ('Javascript', 'Zoom', 'Luke', 'What is JS?');
INSERT INTO subjects (name, clssroom, teacher, description) VALUES ('C', 'Zoom', 'Luke', 'What is C?');
INSERT INTO subjects (name, clssroom, teacher, description) VALUES ('Ruby', 'Zoom', 'Luke', 'What is Ruby?');

