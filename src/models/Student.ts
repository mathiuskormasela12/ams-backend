// ========== Student Model
// import all modules
import { Schema, model } from 'mongoose'

const student = new Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 2
	},
	lastName: {
		type: String,
		required: false
	},
	photo: {
		type: String,
		default: 'nophoto.png'
	},
	nisn: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 5
	},
	classId: {
		type: Number,
		required: true
	},
	majorId: {
		type: Number,
		required: true
	},
	birthPlace: {
		type: String,
		required: true
	},
	birthday: {
		type: Date,
		required: true
	}
})

export default model('Student', student)
