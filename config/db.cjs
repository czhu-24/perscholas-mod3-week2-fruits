// connect mongoose odm to db
// when we use mongoose somewhere else, it'll already be connected

const mongoose = require("mongoose");

// required dotenv module
const password = process.env.MONGO_PASS; 

// add Food for the db's name before the ? inside connectionString
const connectionString = `mongodb+srv://cynthia:${password}@cluster0.wrraj3v.mongodb.net/Food?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// log when we successfully connect to db
mongoose.connection.once('open', () => {
	console.log('connected to database');
});