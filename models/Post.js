const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
	userID: {
		type: String,
		required: true
	},
	title: {
		type: String,
		// required: true,
		min: 5,
		max: 50
	},
	description: {
		type: String,
		required: true,
		max: 500	
	},
	img: {
		type: String
	},
	likes: {
		type: Array,
		default: []
	},
	comments: {
		type: Array,
		default: []
	},
	shares: {
		type: Array,
		default: []
	}
},
	{timestamps: true}	
); 

module.exports = mongoose.model('Post', postSchema);
