use bookTraderDevdb;
INSERT INTO authors(author,bio)
VALUES("Anne McCaffrey", "The Dragonlady, as she is affectionately know, lived in Ireland"),
      ("Arthur C Clarke","Born in Minehead, Sumerset, England in 1917. Author of fifty books, some 20 million copies of which have been printed in over thirty langueages. His numerous awards include 1961 Kalinga Prize, the AAAS Westinghouse science-writing prize, the Bradford Washburn Award, and the Hugo, Nebul, and John W Campbell Awards -- all three of which were won by his novel Rendezvous with Rama."),
      ("Timothy Zahn","One of science fiction's most popular voices. He won the Hugo Award for his novella Cascade Point and is the author of eleven science fiction novels, including Cobra, The Blackcollar, adn Warhorse as well as two connections of short fiction. Timothy Zahn lives on the Oregon coast"),
      ("Poul Anderson","one of the foremost talents of science fiction. Winner of the Hugo Award."),
      ("J. K. Rowling","Wrote the beginning of the first Harry Potter novel on scraps of paper at a local cafe. Sher received an unprecedented award from the Scottish Arts Conncil. The book garnerd rave reviews and major award, including The British book Awards Childern Book of the year and the Smarties Prize. Ms. Rowling lives in Edinburgh");

INSERT INTO books(title,genre,numpages,authorid)
VALUES("The Rowan","Fantasy",235,1),
      ("Damia","Fantasy",336,1),
      ("Damia\'s, Children","Fantasy",272,1),
      ("2010: Odyssey Two","Science Fiction",291,2),
      ("2061: Odyssey Three","Science Fiction",279,2),
      ("Harry Potter and the Sorcerer\'s Stone","Fantasy",309,5),
      ("The Byworlder","Science Fiction",160,4),
      ("There Will Be Time","Science Fiction",176,4),
      ("Cobra","Science Fiction",346,3),
      ("Cobra Strike","Science Fiction",344,3);
INSERT INTO usertable(username,passwd)
VALUES("jessesal","123456");

INSERT INTO forsale(bookID,sellerID,price,newused)
values(1,1,.50,"used"),
      (2,1,.50,"used"),
      (3,1,.50,"used"),
      (4,1,1.50,"used"),
      (5,1,1.50,"used"),
      (6,1,1.50,"used"),
      (7,1,.75,"used"),
      (8,1,.75,"used"),
      (9,1,1.00,"used"),
      (10,1,1.00,"used");