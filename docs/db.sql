 
 CREATE DATABASE IF NOT EXISTS api_notes;
 USE api_notes;
        CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            role ENUM("admin","normal") DEFAULT "normal",
            registrationCode VARCHAR(100)
        );

        CREATE TABLE categories (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(50) NOT NULL
        );

         CREATE TABLE notes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            note VARCHAR(5000) NOT NULL,
            image VARCHAR(200),
            public BOOLEAN NOT NULL DEFAULT FALSE,
            categoryId INT UNSIGNED NOT NULL,
            userId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE CASCADE
          );