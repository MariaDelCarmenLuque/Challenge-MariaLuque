/*
    Connection with Database
 */
const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'maritcarmn',
    port: 5432,
    base: 'db_Ravn_challenge'
})

//PART 1 : SQL

client.connect()
    .then(() => console.log("Connected successfuly"))

//1 st Query: The first 10 authors ordered by date_of_birth

.then(() => client.query("SELECT * FROM authors ORDER BY date_of_birth FETCH FIRST 10 ROWS ONLY;"))

//2ND Query:  the sales total for the author named “Veronica Roth”

.then(() => client.query("SELECT DISTINCT customer_name, quantity, item_price,book_id,name FROM authors AS author JOIN books AS book ON author_id=author.id JOIN sale_items AS sale ON book_id=sale.id WHERE name ='Veronica Roth';"))

//3rd Query: The top 10 performing authors

.then(() => client.query("SELECT book_id, SUM(quantity*item_price) AS sales_totals FROM sale_items GROUP BY book_id ORDER BY sales_totals DESC FETCH FIRST 10 ROWS ONLY;"))

.then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => client.end())