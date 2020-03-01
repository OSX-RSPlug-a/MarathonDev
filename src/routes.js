const express = require('express');
const routes = express.Router();

const db = require('./views/pages/queries');

//const { db, Client } = require('pg');

let donors = db.getAllItems;


routes.get('/pages', (req, res) =>  {
    return res.render('pages')
}) 

//routes.get('/', (req, res) => {
//    const donors = [];
//    return res.render('/public'), { donors }
//})


routes.get('/', (req, res) => {
    const donor = [];
    res.render("pages", { donors }, {
        donor: db.getAllItems
    });
});



routes.post('/', (req, res) => { 
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;


    if (name == "" || email == "" || blood == "") {
        return res.send("All fields are required")
    }

    const values =  [name, email, blood]

    const query = `INSERT INTO donors ("name", "email", "blood") VALUES (1$, 2$, 3$)`;  

    db.query(query, values, function(err) {
        if (err) return res.send("Error on DB")
        
        return res.redirect("/")
    })

})


module.exports = routes