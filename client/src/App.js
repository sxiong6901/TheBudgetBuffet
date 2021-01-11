import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import API from './utils/API'
import NavBar from './components/NavBar'
import Recipe from './pages/Recipe'
import ViewAll from './pages/ViewAll'
import About from './pages/About'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import SignUp from './pages/SignUp'
import Home from './pages/home'
import MyRecipe from './pages/MyRecipes'
import RecipeSearch from './pages/recipeSearch'
import Favorites from './pages/MyFavorites'


class App extends React.Component {
	state = { currentUser: API.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: API.getCurrentUser() })
	}

	logOut() {
		API.logOut()
		this.setState({ currentUser: null })
	}

	render() {
		const { currentUser } = this.state
		return (
			<div className='App container'>

				<NavBar currentUser={currentUser} />

				<Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={() => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/home" render={() => {
						return currentUser

							? <Home profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/about" render={() => {
						return currentUser

							? <About profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/createRecipe" component={Recipe} />

					<Route path="/myrecipe" render={() => {
						return currentUser

							? <MyRecipe profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/recipeSearch" render={() => {
						return currentUser

							? <RecipeSearch profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/viewAll" render={() => {
						return currentUser

							? <ViewAll profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/favorites" render={() => {
						return currentUser

							? <Favorites profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/" render={() => {
						return currentUser

							? <SignUp profile={currentUser} />
							: <Redirect to="/login" />
					}} />

				</Switch>
			</div>
		)
	}
}

export default App