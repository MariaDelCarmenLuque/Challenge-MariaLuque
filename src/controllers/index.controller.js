//Connection whith Postgress
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'maritcarmn',
    database: 'db_ravn_challenge',
    port: '5432'
})


//functions
const getAuthors = async(req, res) => {
    const response = await pool.query('SELECT book_id, SUM(quantity*item_price) AS sales_totals FROM sale_items GROUP BY book_id ORDER BY sales_totals DESC FETCH FIRST 10 ROWS ONLY;');
    //response with a json file on the server
    res.status(200).json(response.rows);
}

module.exports = {
    getAuthors
}