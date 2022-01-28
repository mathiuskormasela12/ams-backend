// ========== User Model
// import all modules
import { Schema, model } from 'mongoose'

const user = new Schema({
	firstname: {
		type: String,
		required: true,
		minlength: 2
	},
	lastname: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		minlength: 5
	},
	password: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		default: 'nophoto.png'
	}
})

export default model('User', user)
