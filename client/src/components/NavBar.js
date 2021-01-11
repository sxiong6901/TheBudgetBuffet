import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
<<<<<<< HEAD

			
			<Link to="/home">Home< i className= "fas fa-home"/>
			</Link>
=======
			<Link to="/home">Home</Link>
>>>>>>> cdbe3cd89ad8fa306af327f52c660a1e9b15867f

			{props.currentUser
				? (
					<span>
						<Link to="/about">About</Link>
						<Link to="/recipeSearch">Search</Link>
<<<<<<< HEAD
						<Link to="/createRecipe">Create A Recipe</Link>
						<Link to="/myrecipe">My Recipes</Link>
						<Link to="/viewAll">Explore Recipes</Link>
						{/* <Link to="/favorites">My Favorites</Link> */}
=======
						<Link to="/myrecipe">My Recipes</Link>
						<Link to="/viewAll">Explore Recipes</Link>
						<Link to="/favorites">My Favorites</Link>
>>>>>>> cdbe3cd89ad8fa306af327f52c660a1e9b15867f
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