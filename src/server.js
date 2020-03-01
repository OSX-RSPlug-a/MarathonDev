const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
//const nunjucks = require("nunjucks");
const expressLayouts = require('express-ejs-layouts');
const path = require('path');


const routes = require('./routes');


const app = express();
const server = http.Server(app);
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(routes)


//nunjucks.configure("./", {
//    express: app,
//    noCache: true, 
//})


app.listen(port, (err) => {
    if (err) {
      console.log('Error heppened')
    } else {
      console.log(`Enabled and web serv list on port ${port}!`)
      console.log('The system running on http://localhost:3000')
    }
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


module.exports = server