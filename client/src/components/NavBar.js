import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = (props) => {
	return (

		<Nav activeKey="/home"
		onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
	  >

  <Navbar bg="light" variant="light">
    <Navbar.Brand to="/home">Home</Navbar.Brand>
    <Nav className="mr-auto">
			
		
			{props.currentUser
				? (
					<div>

					
						<Nav.Link to="/about">About</Nav.Link>
						<Nav.Link to="/recipeSearch">Search</Nav.Link>
						<Nav.Link to="/createRecipe">Create A Recipe</Nav.Link>
						<Nav.Link to="/myrecipe">My Recipes</Nav.Link>
						<Nav.Link to="/viewAll">Explore Recipes</Nav.Link>
						<Nav.Link to="/favorites">My Favorites</Nav.Link>
						<Nav.Link to="/logout">Log Out</Nav.Link>
						</div>
		
				)
				:
				</Nav>
				</Navbar>				
		</Nav>
		
						
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			
		

		
export default NavBar