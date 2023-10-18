// create a schema (breakdown of what data should look like)
const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema(
	{
			name: {
				type: String, 
				required: true
			},
			color: String,
			readyToEat: Boolean,
			age: Number,
			isHealthy: Boolean
	},
	{
		timestamps: true
	}
);

// Mongoose model constructor function not a normal js variable below, so Veggie is capitalized
const Veggie = mongoose.model("Veggie", veggieSchema);

module.exports = Veggie;