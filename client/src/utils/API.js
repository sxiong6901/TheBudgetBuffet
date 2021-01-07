import axios from 'axios'
import jwtDecode from 'jwt-decode'

const API = {
	getToken: function() {
		return localStorage.getItem('token')
	},
	setToken: function(token) {
		localStorage.setItem('token', token)
		return token
	},
	getCurrentUser: function() {
		const token = this.getToken()
		if (token) {
			let decoded = jwtDecode(token);
			console.log(decoded)
		}
		
		if(token) return {...jwtDecode(token), token}
		return null
	},
	logIn: function(credentials) {	
		const {email, password} = credentials
		return axios.post('/api/users/authenticate', {email, password})
			.then((serverResponse) => {
				const token = serverResponse.data.token
				if(token) {
					// sets token as an included header for all subsequent api requests
					axios.defaults.headers.common['token'] = this.setToken(token)
					
					return jwtDecode(token)
				} else {
					return false
				}
			})
	},
	signUp: function(userInfo) {
		const {name, email, password} = userInfo
		return axios.post('/api/users', {name, email, password})
		.then((serverResponse) => {			
			const token = serverResponse.data.token
			if(token) {				
				axios.defaults.headers.common['token'] = this.setToken(token)				
				return jwtDecode(token)
			} else {
				return false
			}
		})
	},
	logOut: function() {
		localStorage.removeItem('token')
		delete axios.defaults.headers.common.token
		return true
	},
	getSecret: function(token){
		// the jwt is stored as a default in headers (see login above)
		// the jwt is removed on logout
		// passing jwt as param on url (/api/users/secret/${token}) is a security violation
		
		return axios.get(`/api/users/secret`)
		.then((serverResponse) => {	
			console.log(`response from server`)
			console.log(serverResponse)
			return serverResponse
		})
	},
	addRecipe: function(recipe){
		return axios.post(`/api/users/add`,recipe)
		.then((serverResponse) => {	
			console.log(`response from server`)
			console.log(serverResponse)
			return serverResponse
		})
	},
	viewRecipe: function(recipe){
		return axios.get(`/api/users/view`,recipe)
		.then((serverResponse) => {	
			console.log(`response from server`)
			console.log(serverResponse)
			return serverResponse.data
		})
	},
	myRecipes: function(recipe){
		return axios.get(`/api/users/myRecipe`,recipe)
		.then((serverResponse) => {	
			console.log(`response from server`)
			console.log(serverResponse)
			return serverResponse.data
		})
	},
	myFavorites: function(recipe){
		return axios.post(`/api/users/favorites`,recipe)
		.then((serverResponse) => {	
			console.log(`response from server`)
			console.log(serverResponse)
			return serverResponse.data
		})
	},
}
axios.defaults.headers.common['token'] = API.getToken()

export default API
