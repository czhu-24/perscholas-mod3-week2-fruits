

const express = require('express')
// REMEMBER TO NPM INSTALL CORS AND MORGAN
// do it in one line via npm i cors morgan
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')
const Veggie = require('./models/Veggie.cjs');

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

// to serve final version inside dist folder
app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json()); // makes req.body not undefined IMPORTANT //

// end of middleware //


// FRUITS' ROUTES //
app.get('/fruits', async (req, res) => {
    const fruits = await Fruit.find();
    res.send(fruits);
});

/* 
app.get('/fruits', (req, res) => {
    Fruit.find().then(dbData => {
        res.send(dbData);
    })
})
*/

app.post('/fruits', (req, res) => {
    const newFruit = req.body;
    // this gives us a Promise as well (practically... speaking?)
    Fruit.create(newFruit);
    res.status(201).send(newFruit);
})

app.get('/fruits/search', async (req, res) => {
    const search = req.query.searchTerm;
    console.log(`search is ${search}`);
    
    // Use a regular expression to match names containing the search term (case-insensitive)
    const searchQuery = { name: { $regex: new RegExp(search, 'i') } };
  
    try {
      const results = await Fruit.find(searchQuery);
      res.send(results);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while searching.");
    }
});
  



app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

// VEGGIES' ROUTES

app.get('/veggies', async (req, res) => {
    const veggies = await Veggie.find();
    res.status(200).send(veggies);
})

app.post('/veggies', async (req, res) => {
    let dbResponse = await Veggie.create(req.body);
    res.status(201).send(dbResponse);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});