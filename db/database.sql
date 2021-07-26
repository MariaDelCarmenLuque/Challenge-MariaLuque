--Create Database
CREATE DATABASE db_ravn_challenge;

--Create tables
CREATE TABLE authors (
  id serial PRIMARY KEY,
  name text,
  date_of_birth timestamp
);
						
CREATE TABLE books (
  id serial PRIMARY KEY,
  author_id integer REFERENCES authors (id),
  isbn text
);
						
CREATE TABLE sale_items (
  id serial PRIMARY KEY,
  book_id integer REFERENCES books (id),
  customer_name text,
  item_price money,			
  quantity integer
);			

--import authors table from df_author.csv
\copy authors FROM '../Ravn-Challenge-Backend-Maria_del_Carmen_Luque_Quispe/db/df_author.csv' DELIMITER ';' CSV;

--import books table from df_book.csv
\copy books FROM '../Ravn-Challenge-Backend-Maria_del_Carmen_Luque_Quispe/db/df_books.csv' DELIMITER ',' CSV;

--import authors table from df_author.csv
\copy sale_items FROM '../Ravn-Challenge-Backend-Maria_del_Carmen_Luque_Quispe/db/df_sales.csv' DELIMITER ',' CSV;
