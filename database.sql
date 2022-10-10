DROP DATABASE IF EXISTS inventory;
CREATE DATABASE inventory;

DROP TABLE IF EXISTS guitars;

CREATE TABLE guitars (
    id SERIAL PRIMARY KEY,
    model VARCHAR(20),
    brand VARCHAR(20),
    color TEXT,
    fretNum INTEGER
);

INSERT INTO guitars (model, brand, color, fretNum) VALUES
('Stratocastor', 'Fender', 'Red', 21),
('Pacifica', 'Yahmaha', 'Green', 22),
('Les Paul', 'Gibson', 'Orange', 22),
('Prestige', 'Ibanez', 'Blue', 24),
('Dinky', 'Jackson', 'Red', 24),
('Telecaster', 'Fender', 'Yellow', 21);