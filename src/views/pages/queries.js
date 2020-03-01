const Pool = require('pg').Pool


const pool = new Pool({
    host: '172.20.0.2',
    port: 5432,
    user: 'postgres',
    password: 'postsql#-098765!',
    database: 'doe',
})

pool
  .connect()
  .then(() => console.log('DB connected!'))
  .catch(err => console.error('DB connection error!', err.stack))


const getAllItems = function(req, res) {
    const sql = 'SELECT * FROM donors ORDER BY id ASC';
    pool.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        res.render("/pages/index.ejs", {donors: donor.rows})
    })
};


module.exports = {getAllItems}