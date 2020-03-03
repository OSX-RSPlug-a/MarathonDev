const Pool = require('pg').Pool


const pool = new Pool({
    host: 'URIP',
    port: 5432,
    user: 'URUSER',
    password: 'URPASWRD',
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
