import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/home">Home</Link>

			{props.currentUser
				? (
					<span>
						<Link to="/about">About</Link>
						<Link to="/recipeSearch">Search</Link>
						<Link to="/myrecipe">My Recipes</Link>
						<Link to="/viewAll">Explore Recipes</Link>
						<Link to="/favorites">My Favorites</Link>
						<Link to="/logout">Log Out</Link>
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			}
		</div>
	)
}

export default NavBar