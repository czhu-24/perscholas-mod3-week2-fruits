// create a schema (breakdown of what data should look like)
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema(
	{
			name: String,
			color: String,
			readyToEat: Boolean,
			age: Number
	},
	{
		timestamps: true
	}
);

// create a model with that schema
// collection name will be lowercased & pluralized
// Fruit > fruits
// User > users
// the model has a collection & a schema 
// for some reason, ppl use "Fruit" instead of "fruits"

// Mongoose model constructor function not a normal js variable below, so Fruit is capitalized
const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;