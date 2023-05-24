USE oluchi_db;

CREATE TABLE transaction (
  TransactionID INT NOT NULL PRIMARY KEY,
  Timestamp TIMESTAMP,
  CustomerID FLOAT,
  Name VARCHAR(30),
  Surname VARCHAR(30),
  Shipping_State VARCHAR(30),
  Item FLOAT,
  Description VARCHAR(30),
  Retail_Price FLOAT,
  Loyalty_Discount FLOAT
);