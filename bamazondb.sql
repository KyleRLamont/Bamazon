DROP database IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

USE bamazon_db;
Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (101, "controller", "electronics", 24.99, 20),
	   (212, "PS4", "electronics", 599.99, 10),
	   (313, "games", "electronics", 59.99, 5),
	   (420, "sweater", "men's wear", 129.99, 14),
	   (504, "pants", "men's wear", 69.99, 15),
	   (619, "shorts", "men's wear", 19.99, 19),
	   (720, "gloves", "outerwear", 49.99, 11),
	   (808, "toaster", "home/kitchen", 69.99, 10),
	   (913, "coasters", "home/kitchen", 9.99, 19),
	   (1009, "microwave", "home/kitchen", 89.99, 17);