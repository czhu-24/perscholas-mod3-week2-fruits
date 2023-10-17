const express = require('express')
// REMEMBER TO NPM INSTALL CORS AND MORGAN
// do it in one line via npm i cors morgan
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')

// allows us to use process.env
require('dotenv').config();

require('./config/db.cjs'); 

// start of middleware //
const middleware = (req, res, next) => {
    console.log("doing stuff");
    next();
}

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'));

app.use(middleware);

app.use(express.json()); // makes req.body not undefined IMPORTANT //

// end of middleware //

// "/"
// serve the html and js of our react app (dist folder)

app.get('/fruits', async (req, res) => {
    let fruitsFromDB = Fruit.find();
    res.send(fruitsFromDB);
})

app.post('/fruits', (req, res) => {
    const newFruit = req.body;
    // this gives us a Promise as well (practically... speaking?)
    Fruit.create(newFruit);
    res.status(201).send(newFruit);
})

app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});