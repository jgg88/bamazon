DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE product (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INTEGER NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM product;