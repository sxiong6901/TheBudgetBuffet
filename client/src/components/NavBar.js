import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const NavBar = (props) => {
	return (
		<Nav activeKey="/home"
		onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
	  >>

		<Nav.Item>	
			<Nav.Link to="/home">Home</Nav.Link>
		</Nav.Item>
			{props.currentUser
				? (
					<div>
					<Nav.Item>
						<Nav.Link to="/about">About
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/recipeSearch">Search</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/createRecipe">Create A Recipe</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/myrecipe">My Recipes</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/viewAll">Explore Recipes</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/favorites">My Favorites</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link to="/logout">Log Out</Nav.Link>
					</Nav.Item>
					
					</div>	
					
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			}
		</Nav>
)
		}
export default NavBar