CREATE DATABASE gestion_stock;

CREATE TABLE PRODUIT(
    ID integer primary key not null AUTO_INCREMENT,
    NOM varchar(10),
    PRIXACHAT double,
    PRIXVENTE double,
    STOCK integer
);

CREATE TABLE MOUVEMENT_STOCK(
    ID integer primary key not null AUTO_INCREMENT,
    DATE datetime DEFAULT CURRENT_TIMESTAMP,
    TYPE ENUM('ENTREE', 'SORTIE') not null,
    QUANTITE integer not null,
    PRODUIT_ID integer not null,
    CONSTRAINT produit_fk FOREIGN KEY (PRODUIT_ID) REFERENCES PRODUIT(ID)
);

