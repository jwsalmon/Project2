use bookTraderDevdb;
DROP TABLE IF EXISTS forsale;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS usertable;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id int AUTO_INCREMENT NOT NULL,
    author VARCHAR(50) NOT NULL,
    bio VARCHAR(512),
    PRIMARY KEY(id)
);

CREATE TABLE books(
    id int AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    numpages int,
    authorid int,
    PRIMARY KEY(id),
    FOREIGN KEY (authorid)
        REFERENCES authors(id)
);

CREATE TABLE usertable(
    id int AUTO_INCREMENT not null,
    username VARCHAR(50) not null,
    passwd VARCHAR(50) not null,
    PRIMARY KEY(id)
);

CREATE TABLE forsale(
    id int AUTO_INCREMENT NOT NULL,
    bookID int not null,
    sellerID int not null,
    price DEC,
    newused VARCHAR(10),
    PRIMARY KEY(id),
    INDEX (bookID),
    INDEX (sellerID),

    FOREIGN KEY (bookID)
     REFERENCES books(id),

    FOREIGN KEY (sellerID)
     REFERENCES usertable(id)
);