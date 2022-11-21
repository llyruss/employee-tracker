USE employees_db;

INSERT INTO department (department_name)
VALUES ('DnD'),
       ('Hawkins_Police'),
       ('The_Upsidedown'),
       ('Journalism');

INSERT INTO employee_role (title, salary, department_id)
VALUES ('Dungeon_Master', 50000.00, 1),
       ('Wizard', 40000.00, 1),
       ('Paladin', 30000.00, 1),
       ('Cheief of Police', 35000.00, 2),
       ('Police Officer', 25000, 2),
       ('Secretary', 20000.00, 2),
       ('Ruler', 50000, 3),
       ('Intern(Upsidedown)', 10000, 3),
       ('Minion', 15000.00, 3),
       ('Editor', 22000.00, 4),
       ('Photographer', 20000.00, 4),
       ('Intern(journalism)', 10000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Eddie', 'Munson', 1, NULL ),
       ('Will', 'Byers', 2, 1),
       ('Mike', 'Wheeler', 3, 1),
       ('Jim', 'Hopper', 4, NULL),
       ('Phil', 'Callahan', 5, 4),
       ('Florence', "Machine", 6, 4),
       ('Henry', 'Kreel', 7, NULL),
       ('Dart', 'Demogorgon', 8, 7),
       ('Demogorgon', 'Smith', 9, 7),
       ('Tom', 'Holloway', 10, NULL),
       ('Jonathan', 'Byers', 11, 10),
       ('Nancy', 'Wheeler', 12, 10);
