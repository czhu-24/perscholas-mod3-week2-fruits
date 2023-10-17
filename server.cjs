const express = require('express')
// REMEMBER TO NPM INSTALL CORS AND MORGAN
// do it in one line via npm i cors morgan
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

// start of middleware //
const middleware = (req, res, next) => {
    console.log("doing stuff");
    next();
}

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(middleware);

app.use(express.json()); // makes req.body not undefined

// end of middleware //

// "/"
// serve the html and js of our react app (dist folder)

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});