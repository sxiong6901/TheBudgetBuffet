const jwtDecode = require('jwt-decode')
const User = 	  require('../models/User.js')
const jokes = 	  require('../data')
const signToken = require('../auth').signToken

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// this function is behind the firewall
	show: async (req, res) => {
		// retrieve jwt from headers
		const token = req.get('token')
		if(!token){
			return res.sendStatus('403')
		}
		let userProfile = jwtDecode(token)		
		let joke = jokes[Math.floor(Math.random() * jokes.length)]
		// note we execute .lean() to convert a mongoose document to js doc
		let doc = await User.find({email: userProfile.email}).lean()		
		doc[0].joke = joke				
		res.json(doc)
	},

	// create a new user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a JWT and return to client"
			const token = signToken(user)
			res.json({success: true, message: "User created. Token attached.", token})
		})
	},

	// update an existing user
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "User updated.", user})
			})
		})
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the user exists
		User.findOne({email: req.body.email}, (err, user) => {
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}

			const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
		})
	},
	makeRecipe: (req, res)=>{
		const token = req.get('token')
		if(!token){
			return res.sendStatus('403')
		}
		let userProfile = jwtDecode(token)
		console.log(userProfile)
		User.findByIdAndUpdate(
			userProfile._id,
			{$push: {recipes: req.body}},
			{new: true, runValidators: true}
			).then(function(recipe) {
			res.json(recipe);
			
		  });
		// let doc = await User.find({email: userProfile.email}).lean()		
	},
	
	viewRecipe: async (req, res)=>{
		const token = req.get('token')
		if(!token){
			return res.sendStatus('403')
		}
		const recipes = await User.find({recipes:{$gt: []}},{recipes:1, _id:0})
		let recpArr = []
		recipes.forEach(recipe=>recipe.recipes.forEach(recipeSingular=>recpArr.push(recipeSingular)))
		res.json(recpArr)
		
		
	},

	myRecipes: (req, res)=>{
		const token = req.get('token')
		if(!token){
			return res.sendStatus('403')
		}
		let userProfile = jwtDecode(token)
		console.log(userProfile)
		User.findById(userProfile._id,(err, user)=>{
			if (err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.json(user.recipes);
		});
		
			
		
	}
}