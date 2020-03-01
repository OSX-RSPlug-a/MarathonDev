    CREATE DATABASE doe;

    CREATE TABLE COMPANY(
        ID INT PRIMARY KEY     NOT NULL,
        name           TEXT    NOT NULL,
        email          TEXT     NOT NULL,
        blood          TEXT     NOT NULL,
);

    INSERT INTO "donors" ("name", "email", "blood")
VALUES ('Dude Bug', 'dudebug@mail.com', 'B+'),
('Lady Bug', 'ladybug@mail.com', 'B'),
('Leblon James', 'leblonjames@mail.com', 'A+'),
('Jhon Snow', 'jhonsnow.com', 'O+');