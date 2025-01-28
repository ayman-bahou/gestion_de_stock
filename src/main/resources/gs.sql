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
    DATE date,
    TYPE varchar(10),
    QUANTITE integer,
    PRODUIT_ID integer,
    CONSTRAINT produit_fk FOREIGN KEY (PRODUIT_ID) REFERENCES PRODUIT(ID)
);

