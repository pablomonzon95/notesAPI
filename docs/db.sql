CREATE DATABASE notas_api;
USE notas_api;


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS categories;

CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            registrationCode VARCHAR(100)
        );notes
        
CREATE TABLE notes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            description VARCHAR(5000) NOT NULL,
            userId INT UNSIGNED NOT NULL,
            categoryId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (CategoryId) REFERENCES categories (id) ON DELETE CASCADE
        );
 CREATE TABLE categories (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL 
        );       
ALTER TABLE notes
ADD image VARCHAR(100); 
       
INSERT INTO users(email, password) VALUES
('pablo@email.com', 123456),
('juan@email.com', 123456),
('maria@email.com', 123456);        

INSERT INTO categories(name) VALUES
('hogar'),
('escuela'),
('deportes'),
('niños'),
('cumpleaños');



         
        
        